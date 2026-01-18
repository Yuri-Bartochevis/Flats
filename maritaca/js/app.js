/**
 * Main Application for Flat Maritaca
 * Initializes all modules and handles core functionality
 */

const App = {
  init() {
    // Initialize i18n first
    if (window.i18n) {
      window.i18n.initLanguage();
    }

    // Initialize modules
    this.initModal();
    this.initBackToTop();
    this.initSmoothScroll();
    this.initScrollAnimations();
    this.initLanguageSwitcher();
    this.initDarkMode();

    // Initialize other modules
    if (window.Carousel) {
      window.Carousel.init();
    }

    if (window.WeatherWidget) {
      window.WeatherWidget.init();
    }

    // Render dynamic content
    this.renderContent();

    // Set initial active language button
    const savedLang = localStorage.getItem('language') || 'pt';
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === savedLang);
    });
  },

  /**
   * Gallery modal functionality
   */
  initModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.querySelector('.modal-close');

    if (!modal || !modalImg) return;

    let lastFocused = null;

    window.closeModal = function() {
      modal.style.display = 'none';
      if (lastFocused) lastFocused.focus();
    };

    window.openModal = function(img) {
      lastFocused = document.activeElement;
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      if (modalClose) modalClose.focus();
    };

    // Add click handlers to gallery images
    document.querySelectorAll('.gallery img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => window.openModal(img));
    });

    // Close on backdrop click
    modal.addEventListener('click', e => {
      if (e.target === modal) window.closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        window.closeModal();
      }
    });
  },

  /**
   * Back to top button
   */
  initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.visibility = 'visible';
        backToTop.style.opacity = '1';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },

  /**
   * Smooth scrolling for anchor links
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  /**
   * Scroll-triggered fade-in animations
   */
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Apply fade-in to sections (excluding hero)
    document.querySelectorAll('main section, .toc').forEach(el => {
      el.classList.add('fade-in');
      fadeInObserver.observe(el);
    });
  },

  /**
   * Language switcher functionality
   */
  initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        this.setLanguage(lang);
      });
    });
  },

  /**
   * Dark mode toggle
   */
  initDarkMode() {
    const toggle = document.querySelector('#theme-toggle, .theme-toggle');
    if (!toggle) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDark) {
      document.body.classList.add('dark-mode');
      this.updateThemeIcon(true);
    }

    toggle.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      this.updateThemeIcon(isDark);
    });
  },

  updateThemeIcon(isDark) {
    const icon = document.querySelector('#theme-toggle i, .theme-toggle i');
    if (icon) {
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
  },

  /**
   * Set the current language and update UI
   */
  setLanguage(lang) {
    if (!window.i18n) return;

    window.i18n.setLanguage(lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update RTL direction for Hebrew
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    // Refresh weather widget
    if (window.WeatherWidget) {
      window.WeatherWidget.refresh();
    }

    // Re-render dynamic content
    this.renderContent();

    // Re-initialize carousels after content change
    if (window.Carousel) {
      setTimeout(() => window.Carousel.init(), 100);
    }

    // Re-attach modal handlers to new gallery images
    this.initModal();
  },

  /**
   * Render all dynamic content based on current language
   */
  renderContent() {
    if (!window.i18n) return;

    const t = key => window.i18n.t(key);
    const lang = window.i18n.getLanguage();

    // Update page title
    document.title = `${t('heroTitle')} - Itacaré`;

    // Update header
    this.updateElement('.subtitle', t('subtitle'));
    this.updateElement('.hero-title', t('heroTitle'));
    this.updateElement('.hero-subtitle', t('heroSubtitle'));

    // Update navigation
    this.updateNav();

    // Update sections
    this.updateAboutSection();
    this.updateGallerySection();
    this.updateRulesSection();
    this.updateBeachesSection();
    this.updateChefsSection();
    this.updateSportsSection();
    this.updateWifiSection();
    this.updateHelpSection();
    this.updateFooter();
  },

  updateElement(selector, content) {
    const el = document.querySelector(selector);
    if (el && content) el.innerHTML = content;
  },

  updateNav() {
    const t = key => window.i18n.t(key);
    const nav = t('nav');
    if (!nav) return;

    const navItems = [
      { id: 'about', label: nav.about },
      { id: 'gallery', label: nav.gallery },
      { id: 'rules', label: nav.rules },
      { id: 'beaches', label: nav.beaches },
      { id: 'chefs', label: nav.chefs },
      { id: 'sports', label: nav.sports },
      { id: 'wifi', label: nav.wifi },
      { id: 'help', label: nav.help }
    ];

    const navList = document.querySelector('.toc ul');
    if (navList) {
      navList.innerHTML = navItems
        .map(item => `<li><a href="#${item.id}">${item.label}</a></li>`)
        .join('');
    }
  },

  updateAboutSection() {
    const t = key => window.i18n.t(key);
    const about = t('about');
    const notice = t('notice');

    if (!about) return;

    // Update notice
    const noticeEl = document.querySelector('#about .notice');
    if (noticeEl && notice && notice.paragraphs) {
      noticeEl.innerHTML = `
        <h2><i class="fas fa-info-circle" aria-hidden="true"></i> ${notice.title}</h2>
        ${notice.paragraphs.map(p => `<p>${p}</p>`).join('')}
      `;
    }

    // Update about title
    this.updateElement('#about .section-title',
      `<i class="fas fa-home" aria-hidden="true"></i> ${about.title}`);

    // Update description paragraphs
    if (about.desc) {
      this.updateElement('#about .about-desc-1', about.desc[0]);
      this.updateElement('#about .about-desc-2', about.desc[1]);
    }

    // Update amenities list
    const amenitiesList = document.querySelector('#about .amenities-list');
    if (amenitiesList && about.amenities) {
      amenitiesList.innerHTML = about.amenities
        .map(item => `<li><strong>${item.title}:</strong> ${item.desc}</li>`)
        .join('');
    }
  },

  updateGallerySection() {
    const t = key => window.i18n.t(key);
    const nav = t('nav');

    if (nav && nav.gallery) {
      this.updateElement('#gallery .section-title',
        `<i class="fas fa-images" aria-hidden="true"></i> ${nav.gallery}`);
    }

    // Update image alt texts from gallery translations
    const gallery = t('gallery');
    if (gallery && gallery.images) {
      const images = document.querySelectorAll('#gallery .gallery img');
      gallery.images.forEach((imgData, index) => {
        if (images[index]) {
          images[index].alt = imgData.alt || imgData;
        }
      });
    }
  },

  updateRulesSection() {
    const t = key => window.i18n.t(key);
    const rules = t('rules');

    if (!rules) return;

    this.updateElement('#rules .section-title',
      `<i class="fas fa-file-alt" aria-hidden="true"></i> ${rules.title}`);
    this.updateElement('#rules .section-intro', rules.intro);

    const rulesList = document.querySelector('#rules .rules-list');
    if (rulesList && rules.items) {
      rulesList.innerHTML = rules.items.map(rule => {
        if (rule.subitems) {
          return `<li>${rule.icon} <strong>${rule.title}:</strong>
            <ul>${rule.subitems.map(sub => `<li>${sub}</li>`).join('')}</ul>
          </li>`;
        }
        return `<li>${rule.icon} <strong>${rule.title}:</strong> ${rule.desc}</li>`;
      }).join('');
    }
  },

  updateBeachesSection() {
    const t = key => window.i18n.t(key);
    const beaches = t('beaches');

    if (!beaches) return;

    this.updateElement('#beaches .section-title',
      `<i class="fas fa-water" aria-hidden="true"></i> ${beaches.title}`);
    this.updateElement('#beaches .section-intro', beaches.intro);

    const list = document.querySelector('#beaches .beach-list');
    if (list && beaches.items) {
      list.innerHTML = beaches.items.map(beach => `
        <div class="beach-item">
          <img loading="lazy" src="${beach.image}" alt="${beach.name}" />
          <h3>${beach.name}</h3>
          <p>${beach.desc}</p>
        </div>
      `).join('');
    }
  },

  updateChefsSection() {
    const t = key => window.i18n.t(key);
    const chefs = t('chefs');
    const lang = window.i18n.getLanguage();

    if (!chefs) return;

    this.updateElement('#chefs .section-title',
      `<i class="fas fa-utensils" aria-hidden="true"></i> ${chefs.title}`);
    this.updateElement('#chefs .section-intro', chefs.intro);

    const mapText = { pt: 'Ver no mapa', en: 'View on map', he: 'הצג במפה' };
    const prevLabel = { pt: 'Anterior', en: 'Previous', he: 'הקודם' };
    const nextLabel = { pt: 'Próximo', en: 'Next', he: 'הבא' };

    const list = document.querySelector('#chefs .beach-list');
    if (list && chefs.items) {
      list.innerHTML = chefs.items.map(chef => `
        <div class="beach-item">
          <div class="carousel">
            <div class="carousel-inner">
              ${chef.images.map(img =>
                `<img loading="lazy" src="${img.src}" alt="${img.alt}" />`
              ).join('')}
            </div>
            <button class="carousel-btn prev" aria-label="${prevLabel[lang]}">\u2039</button>
            <button class="carousel-btn next" aria-label="${nextLabel[lang]}">\u203a</button>
            <div class="carousel-dots"></div>
          </div>
          <h3>${chef.name}</h3>
          <p>${chef.desc}</p>
          <a href="${chef.mapLink}" target="_blank" class="address-link"><i class="fas fa-map-marker-alt"></i> ${mapText[lang]}</a>
          <a href="${chef.instagram}" target="_blank" class="instagram-link"><i class="fab fa-instagram"></i> ${chef.instagramHandle}</a>
        </div>
      `).join('');
    }
  },

  updateSportsSection() {
    const t = key => window.i18n.t(key);
    const sports = t('sports');
    const lang = window.i18n.getLanguage();

    if (!sports) return;

    this.updateElement('#sports .section-title',
      `<i class="fas fa-running" aria-hidden="true"></i> ${sports.title}`);
    this.updateElement('#sports .section-intro', sports.intro);

    const mapText = { pt: 'Ver no mapa', en: 'View on map', he: 'הצג במפה' };

    const list = document.querySelector('#sports .beach-list');
    if (list && sports.items) {
      list.innerHTML = sports.items.map(sport => `
        <div class="beach-item">
          <img loading="lazy" src="${sport.image}" alt="${sport.name}" />
          <h3>${sport.name}</h3>
          <p>${sport.desc}</p>
          <a href="${sport.mapLink}" target="_blank" class="address-link"><i class="fas fa-map-marker-alt"></i> ${mapText[lang]}</a>
          <a href="${sport.instagram}" target="_blank" class="instagram-link"><i class="fab fa-instagram"></i> ${sport.instagramHandle}</a>
        </div>
      `).join('');
    }
  },

  updateWifiSection() {
    const t = key => window.i18n.t(key);
    const wifi = t('wifi');

    if (!wifi) return;

    this.updateElement('#wifi .section-title',
      `<i class="fas fa-wifi" aria-hidden="true"></i> ${wifi.title}`);

    const wifiBox = document.querySelector('#wifi .wifi-box');
    if (wifiBox) {
      wifiBox.innerHTML = `
        <div>
          <p><strong>${wifi.networkLabel}:</strong> ${wifi.network}</p>
          <p>
            <strong>${wifi.passwordLabel}:</strong>
            <span id="wifi-password">${'•'.repeat(11)}</span>
            <span id="wifi-password-revealed" style="display: none;">${wifi.password}</span>
          </p>
        </div>
        <button class="btn" onclick="App.toggleWifiPassword()">
          <i class="fas fa-eye"></i> ${wifi.showButton}
        </button>
      `;
    }
  },

  toggleWifiPassword() {
    const hidden = document.getElementById('wifi-password');
    const revealed = document.getElementById('wifi-password-revealed');
    const btn = document.querySelector('#wifi .wifi-box .btn');
    const wifi = window.i18n.t('wifi');

    if (revealed.style.display === 'none') {
      revealed.style.display = 'inline';
      hidden.style.display = 'none';
      btn.innerHTML = `<i class="fas fa-eye-slash"></i> ${wifi.hideButton}`;
    } else {
      revealed.style.display = 'none';
      hidden.style.display = 'inline';
      btn.innerHTML = `<i class="fas fa-eye"></i> ${wifi.showButton}`;
    }
  },

  updateHelpSection() {
    const t = key => window.i18n.t(key);
    const help = t('help');

    if (!help) return;

    this.updateElement('#help .section-title',
      `<i class="fas fa-question-circle" aria-hidden="true"></i> ${help.title}`);
    this.updateElement('#help .section-intro', help.intro);

    const buttons = document.querySelector('#help .contact-buttons');
    if (buttons) {
      buttons.innerHTML = `
        <a href="${help.whatsapp}" class="btn btn-whatsapp" target="_blank"><i class="fab fa-whatsapp"></i> ${help.whatsappButton}</a>
      `;
    }
  },

  updateFooter() {
    const t = key => window.i18n.t(key);
    const footer = t('footer');

    if (!footer) return;

    this.updateElement('footer p', footer.copyright);
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// Export
window.App = App;
