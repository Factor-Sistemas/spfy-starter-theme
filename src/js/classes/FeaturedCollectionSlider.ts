import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export default class FeaturedCollectionSlider extends HTMLElement {
  private swiperInstance: Swiper | null = null;

  connectedCallback() {
    const swiperEl = this.querySelector('.swiper') as HTMLElement | null;
    if (!swiperEl) return;

    const sliderId = this.getAttribute('slider-id') || '';

    this.swiperInstance = new Swiper(swiperEl, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        nextEl: `.swiper-nav-next-${sliderId}`,
        prevEl: `.swiper-nav-prev-${sliderId}`,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      },
      watchOverflow: true,
    });
  }

  disconnectedCallback() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }
  }
}

customElements.define('fs-featured-collection-slider', FeaturedCollectionSlider);
