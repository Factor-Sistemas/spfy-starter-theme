import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

export default class ImageBannerSlider extends HTMLElement {
  private swiperInstance: Swiper | null = null;

  connectedCallback() {
    const swiperEl = this.querySelector('.swiper') as HTMLElement | null;
    if (!swiperEl) return;

    const sliderId = this.getAttribute('slider-id') || '';
    const autoplayEnabled = this.getAttribute('autoplay') === 'true';
    const rawDelay = parseInt(this.getAttribute('autoplay-delay') || '5000', 10);
    const autoplayDelay = rawDelay < 100 ? rawDelay * 1000 : rawDelay;
    const effect = this.getAttribute('effect') || 'slide';

    this.swiperInstance = new Swiper(swiperEl, {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      effect: effect === 'fade' ? 'fade' : 'slide',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: autoplayEnabled
        ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        : false,
      navigation: {
        nextEl: `.swiper-nav-next-${sliderId}`,
        prevEl: `.swiper-nav-prev-${sliderId}`,
      },
      pagination: {
        el: `.swiper-pagination-${sliderId}`,
        clickable: true,
      },
    });
  }

  disconnectedCallback() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}

if (!customElements.get('image-banner-slider')) {
  customElements.define('image-banner-slider', ImageBannerSlider);
}
