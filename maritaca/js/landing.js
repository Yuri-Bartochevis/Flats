/**
 * Public landing page logic for Flat Maritaca.
 * Slimmer than guide app.js: no rules/wifi/beaches rendering.
 */

const Landing = {
  init() {
    if (window.i18n) window.i18n.initLanguage();
    this.applyQueryLang();
    this.initLanguageSwitcher();
    this.initDarkMode();
    this.initSmoothScroll();
    this.initScrollAnimations();
    this.initModal();
    this.render();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === window.i18n.getLanguage());
    });
  },

  applyQueryLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q && window.i18n && ['pt', 'en', 'he'].includes(q)) {
      window.i18n.setLanguage(q);
    }
  },

  initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        window.i18n.setLanguage(lang);
        document.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lang);
        });
        this.render();
      });
    });
  },

  initDarkMode() {
    const toggle = document.querySelector('#theme-toggle');
    if (!toggle) return;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
      this.setThemeIcon(true);
    }
    toggle.addEventListener('click', () => {
      const dark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      this.setThemeIcon(dark);
    });
  },

  setThemeIcon(dark) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
  },

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = a.getAttribute('href');
        if (target === '#' || !target) return;
        const el = document.querySelector(target);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  },

  initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('main section').forEach(s => {
      s.classList.add('fade-in');
      observer.observe(s);
    });
  },

  initModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = modal?.querySelector('.modal-close');
    if (!modal || !modalImg) return;

    let lastFocused = null;
    const open = img => {
      lastFocused = document.activeElement;
      modal.style.display = 'flex';
      modalImg.src = img.dataset.full || img.currentSrc || img.src;
      modalImg.alt = img.alt;
      close?.focus();
    };
    const closeFn = () => {
      modal.style.display = 'none';
      lastFocused?.focus();
    };

    document.querySelectorAll('.gallery img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => open(img));
    });

    modal.addEventListener('click', e => { if (e.target === modal) closeFn(); });
    close?.addEventListener('click', closeFn);
    document.addEventListener('keydown', e => {
      if (modal.style.display !== 'flex') return;
      if (e.key === 'Escape') closeFn();
      else if (e.key === 'Tab') { e.preventDefault(); close?.focus(); }
    });
  },

  render() {
    const t = key => window.i18n.t(key);
    const lang = window.i18n.getLanguage();
    const landing = t('landing');
    if (!landing) return;

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    if (landing.meta?.title) document.title = landing.meta.title;
    if (landing.meta?.description) {
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', landing.meta.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(el.dataset.i18n);
      if (typeof value === 'string') el.innerHTML = value;
    });

    // Highlights grid
    const hl = document.getElementById('highlights-grid');
    if (hl && Array.isArray(landing.highlights)) {
      hl.innerHTML = landing.highlights.map(h => `
        <div class="highlight">
          <i class="fas ${h.icon}" aria-hidden="true"></i>
          <h3>${h.title}</h3>
          <p>${h.desc}</p>
        </div>
      `).join('');
    }

    // About prose
    const prose = document.getElementById('about-prose');
    if (prose && landing.about?.paragraphs) {
      prose.innerHTML = landing.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }

    // Amenities — reuse the `about.amenities` shared list
    const amenities = t('about')?.amenities || [];
    const amList = document.getElementById('amenities-list');
    if (amList && amenities.length) {
      amList.innerHTML = amenities.map(a =>
        `<li><strong>${a.title}:</strong> ${a.desc}</li>`
      ).join('');
    }

    // Maps URL & location CTA
    if (landing.location?.mapsUrl) {
      const cta = document.getElementById('location-cta');
      if (cta) cta.href = landing.location.mapsUrl;
    }

    // FAQ
    const faqEl = document.getElementById('faq-list');
    if (faqEl && Array.isArray(landing.faq?.items)) {
      faqEl.innerHTML = landing.faq.items.map(item => `
        <details class="faq-item">
          <summary>${item.q}<i class="fas fa-chevron-down" aria-hidden="true"></i></summary>
          <div class="faq-answer">${item.a}</div>
        </details>
      `).join('');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => Landing.init());
window.Landing = Landing;
