// Polo Avenue — motion layer
// Layered on top of the React-rendered DOM after first paint.
// Adds: Lenis smooth-scroll, custom gold cursor, magnetic CTAs, mouse-x tilt on watch cards.

(function () {
  'use strict';

  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

  // ============================================
  // Lenis smooth-scroll
  // ============================================
  function initSmoothScroll() {
    if (typeof Lenis === 'undefined') return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    window.lenis = lenis;
  }

  // ============================================
  // Custom gold cursor (desktop only)
  // ============================================
  function initCursor() {
    if (isTouch) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-dot';
    const label = document.createElement('span');
    label.className = 'cursor-label';
    cursor.appendChild(label);
    document.body.appendChild(cursor);
    document.body.classList.add('has-custom-cursor');

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    function tick() {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();

    const expandSel = '.house-card, .watch-card, .gallery-tile';
    const linkSel   = 'a, button, .btn, .hamburger, input, .nav .logo';

    document.addEventListener('mouseover', (e) => {
      const exp = e.target.closest(expandSel);
      const lnk = e.target.closest(linkSel);
      if (exp) {
        cursor.classList.add('expand');
        label.textContent = 'VIEW';
      } else if (lnk) {
        cursor.classList.add('link');
      }
    });
    document.addEventListener('mouseout', (e) => {
      const expFrom = e.target.closest(expandSel);
      const lnkFrom = e.target.closest(linkSel);
      const expTo = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(expandSel);
      const lnkTo = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(linkSel);
      if (expFrom && !expTo) {
        cursor.classList.remove('expand');
        label.textContent = '';
      }
      if (lnkFrom && !lnkTo) {
        cursor.classList.remove('link');
      }
    });

    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
  }

  // ============================================
  // Magnetic CTAs (desktop only)
  // ============================================
  function initMagnetic() {
    if (isTouch) return;
    const buttons = document.querySelectorAll('.btn-gold, .btn-ghost-gold, .float-book');
    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // ============================================
  // Mouse-x tilt on watch cards (desktop only)
  // ============================================
  function initWatchTilt() {
    if (isTouch) return;
    const cards = document.querySelectorAll('.watch-card');
    cards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      card.style.willChange = 'transform';
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const ry = x * 9, rx = -y * 5;
        card.style.transform = `perspective(1100px) rotateY(${ry}deg) rotateX(${rx}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  // ============================================
  // Hero videos: ensure they play (Safari sometimes needs a poke)
  // ============================================
  function pokeHeroVideos() {
    document.querySelectorAll('.hero-video').forEach((v) => {
      v.muted = true;
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      v.addEventListener('canplay', tryPlay, { once: true });
    });
  }

  // ============================================
  // Init — wait for React-rendered elements
  // ============================================
  function init() {
    initSmoothScroll();
    let attempts = 0;
    const tryInit = () => {
      const ready = document.querySelector('.btn-gold') && document.querySelector('.watch-card');
      if (ready) {
        initCursor();
        initMagnetic();
        initWatchTilt();
        pokeHeroVideos();
      } else if (attempts++ < 40) {
        setTimeout(tryInit, 80);
      }
    };
    tryInit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
