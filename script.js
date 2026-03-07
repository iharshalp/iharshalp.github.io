/* ========================================
   HARSHAL PATIL PORTFOLIO — SCRIPT.JS
   Animations, Interactions & Effects
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // PRELOADER
    // ========================================
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    });

    // Fallback: hide preloader after 4 seconds max
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 4000);

    // ========================================
    // DYNAMIC FOOTER YEAR
    // ========================================
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ========================================
    // PARTICLE BACKGROUND
    // ========================================
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: undefined, y: undefined };
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.color = Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Mouse interaction
            if (mouse.x !== undefined && mouse.y !== undefined) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    this.x -= dx * 0.01;
                    this.y -= dy * 0.01;
                }
            }

            // Wrap around
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        animationId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        initParticles();
        animateParticles();
    });

    // ========================================
    // CUSTOM CURSOR
    // ========================================
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');

    if (window.innerWidth > 991) {
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX - 4 + 'px';
            cursorDot.style.top = e.clientY - 4 + 'px';

            cursorRing.style.left = e.clientX - 20 + 'px';
            cursorRing.style.top = e.clientY - 20 + 'px';
        });

        // Hover effect on interactive elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .tech-item, .project-card, .glassmorphism-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });
    }

    // ========================================
    // NAVIGATION
    // ========================================
    const navbar = document.getElementById('mainNav');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        const scrollPos = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Close mobile nav on link click
    const navbarCollapse = document.getElementById('navbarNav');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
                if (collapseInstance) collapseInstance.hide();
            }
        });
    });

    // ========================================
    // TYPING EFFECT
    // ========================================
    const typingElement = document.getElementById('typingText');
    const phrases = [
        'Full Stack Web Developer',
        'AI Enthusiast',
        'Cloud Practitioner',
        'BugToBuild Creator',
        'Genora AI Builder',
        'AWS Certified'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeEffect() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === current.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('[data-count]');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                countersAnimated = true;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const start = performance.now();

                function updateCount(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    counter.textContent = Math.floor(eased * target);

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.textContent = target;
                    }
                }

                requestAnimationFrame(updateCount);
            }
        });
    }

    window.addEventListener('scroll', animateCounters);

    // ========================================
    // SKILL BAR ANIMATION
    // ========================================
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;

        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;

        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            skillsAnimated = true;
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }, index * 100);
            });
        }
    }

    window.addEventListener('scroll', animateSkillBars);

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // CONTACT FORM (FormSubmit.co — 100% Free)
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    // Set redirect back to current page
    const formRedirect = document.getElementById('formRedirect');
    if (formRedirect) formRedirect.value = window.location.href;

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const btn = this.querySelector('.btn-submit');
            const originalText = btn.innerHTML;

            // Show loading state
            btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
            btn.disabled = true;

            try {
                const formData = new FormData(this);

                const response = await fetch('https://formsubmit.co/ajax/harshal@hpweb.in', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success === "true" || result.success === true) {
                    btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Message Sent!';
                    btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
                    formResponse.style.display = 'block';
                    formResponse.className = 'form-response success';
                    formResponse.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Thank you! Your message has been sent successfully.';
                    contactForm.reset();
                } else {
                    throw new Error(result.message || 'Something went wrong');
                }
            } catch (error) {
                btn.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>Failed to Send';
                btn.style.background = 'linear-gradient(135deg, #ef4444, #ec4899)';
                formResponse.style.display = 'block';
                formResponse.className = 'form-response error';
                formResponse.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-2"></i>' + (error.message || 'Something went wrong. Please try again.');
            }

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                formResponse.style.display = 'none';
            }, 5000);
        });
    }

    // ========================================
    // AOS (Animate On Scroll) Init
    // ========================================
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: 'mobile'
    });

    // ========================================
    // TILT EFFECT ON PROJECT CARDS
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 991) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ========================================
    // PARALLAX-LIKE EFFECT ON HERO SHAPES
    // ========================================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const shapes = document.querySelectorAll('.hero-bg-shapes .shape');
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

});
