// Scroll Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  // Observe sections for scroll reveal
  document.querySelectorAll('.intro, .offers, .quote-block, .mini-gallery, .contact-cta, .card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Mobile Menu Toggle
  const nav = document.querySelector('nav');
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  
  const navRow = document.querySelector('.nav-row');
  navRow.insertBefore(hamburger, nav);

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Lightbox for gallery images
  const createLightbox = () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img src="" alt="">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

    // Attach to gallery images
    document.querySelectorAll('.mini-gallery img, .gallery-grid img').forEach(img => {
      img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
      });
    });
  };

  createLightbox();

  // Parallax effect on hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
