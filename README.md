<div align="center">

  # ✦ Harshal Patil — 3D Interactive Portfolio ✦

  <p align="center">
    <b>A high-performance, cinematic developer portfolio featuring interactive 3D canvas scroll sequences, kinetic glass graphics, and modern web design.</b>
  </p>

  <p align="center">
    <a href="https://iharshalp.github.io">
      <img src="https://img.shields.io/badge/Live_Demo-iharshalp.github.io-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Site">
    </a>
    <a href="https://github.com/iharshalp/iharshalp.github.io/actions/workflows/deploy.yml">
      <img src="https://img.shields.io/github/actions/workflow/status/iharshalp/iharshalp.github.io/deploy.yml?style=for-the-badge&label=Deployment" alt="Deploy Status">
    </a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Astro-v6.4.6-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v3.4.19-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
    <img src="https://img.shields.io/badge/GSAP-v3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP">
    <img src="https://img.shields.io/badge/TypeScript-v5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=for-the-badge" alt="Lenis">
  </p>

</div>

---

## 🌟 Key Highlights

### 🎬 1. "Behind The Screen" 3D Scroll Overlay
* **300 High-Definition WebP Frames:** Smooth 3D animation sequence captured on HTML5 canvas.
* **Lossy WebP Compression:** Optimized from 300 MB PNGs down to ~18 MB total without visual loss.
* **Multi-Device Input:** Intuitive gesture mapping for desktop mouse wheel scrolling and mobile touch swipes.
* **Off-Center Text Layouts:** Dynamic slide-in typographic overlays that keep the central 3D graphic unobstructed.
* **macOS App-Zoom Transitions:** macOS-style scale & blur entrance/exit animations.

### 🔮 2. Kinetic Hero Sculpture
* **Interactive 3D Mouse Tracking:** Real-time 3D tilt and parallax movement on cursor hover.
* **Glassmorphic UI:** Multi-layer background blur, glowing ambient gradient orbs, and rotating vector rings.

### 🍱 3. Modern Bento Grid Work Showcase
* Showcases real-world projects including **Genora AI Suite**, **BugToBuild**, **Ancestriq**, and **AWS Cloud Architecture**.
* Responsive grid layouts with subtle micro-interactions and hover elevation effects.

### ⚡ 4. Lightweight & Ultra Fast
* **Inline SVG Architecture:** 100% SVG icon system with zero external font dependencies.
* **Preloader Protection:** Asynchronous frame loading deferred until browser idle to ensure instant page load speeds.

---

## 🛠️ Technology Stack

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Framework** | [Astro v6](https://astro.build/) | Static Site Generation (SSG) & component routing |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Modern utility styles and custom oklch color variables |
| **Animations** | [GSAP](https://greensock.com/gsap/) | Frame interpolation, modal transitions & scroll timing |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) | Hardware-accelerated smooth scrolling |
| **Rendering** | HTML5 Canvas 2D | High-frame-rate image sequence playback |
| **Form Handling** | AJAX + FormSubmit | Real-time contact form submission with custom toast alerts |

---

## 📁 Repository Structure

```text
iharshalp.github.io/
├── .github/workflows/     # Automated GitHub Pages CI/CD deployment
│   └── deploy.yml
├── public/
│   ├── frames/            # 300 HD WebP frame sequence (frame-001.webp - frame-300.webp)
│   ├── fav.png
│   └── favicon.ico
├── src/
│   ├── components/        # UI & Animation Components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── CinematicIntro.astro   # 3D Modal Overlay
│   │   ├── Work.astro             # Bento Grid Projects
│   │   ├── About.astro            # Skills & Timeline
│   │   ├── Contact.astro          # Interactive Contact Form
│   │   ├── Footer.astro
│   │   └── Toast.astro            # Global Toast Notifications
│   ├── layouts/
│   │   └── Layout.astro           # Root shell & Lenis smooth scroll setup
│   ├── pages/
│   │   └── index.astro            # Main page assembly
│   └── styles/
│       └── global.css             # oklch theme tokens & animations
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 💻 Local Development

### Prerequisites
* **Node.js**: `>= 22.12.0`
* **npm**: `>= 9.0.0`

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iharshalp/iharshalp.github.io.git
   cd iharshalp.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🚀 Deployment

This project is deployed to **GitHub Pages** using GitHub Actions:
* **Workflow:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
* **Trigger:** Pushes to the `main` branch automatically build and publish static production artifacts.

---

<div align="center">

  Designed & Built with ❤️ by **Harshal Patil**  
  [Website](https://iharshalp.github.io) • [GitHub](https://github.com/iharshalp)

</div>
