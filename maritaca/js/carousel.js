/**
 * Carousel Module for Flat Maritaca
 * Image carousel with touch/swipe support
 */

const Carousel = {
  init() {
    document.querySelectorAll('.carousel').forEach(carousel => {
      this.initCarousel(carousel);
    });
  },

  initCarousel(carousel) {
    const inner = carousel.querySelector('.carousel-inner');
    const images = inner.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');

    if (images.length <= 1) {
      // Hide controls if only one image
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dotsContainer) dotsContainer.style.display = 'none';
      return;
    }

    let currentIndex = 0;

    // Create dots
    images.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Image ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }

    function goToSlide(index) {
      currentIndex = index;
      updateCarousel();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
    }, { passive: true });

    // Keyboard navigation when carousel is focused
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    // Store reference for external control
    carousel._carousel = {
      next: nextSlide,
      prev: prevSlide,
      goTo: goToSlide,
      getCurrentIndex: () => currentIndex
    };
  },

  // Reinitialize all carousels (useful after language change)
  refresh() {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const dotsContainer = carousel.querySelector('.carousel-dots');
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
      }
    });
    this.init();
  }
};

// Export
window.Carousel = Carousel;
