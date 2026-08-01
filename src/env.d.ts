/// <reference types="astro/client" />

interface Window {
  lenis: import('lenis').default;
  showToast: (message: string, type?: 'success' | 'error') => void;
  openCinematicExperience?: () => void;
}
