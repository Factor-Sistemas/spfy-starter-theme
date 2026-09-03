import Swiper from 'swiper';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

export default class FsProductGallery extends HTMLElement {
  private mainSwiper: Swiper | null = null;
  private thumbsSwiper: Swiper | null = null;

  connectedCallback() {
    const thumbsEl = this.querySelector('.swiper-thumbs') as HTMLElement | null;
    const mainEl = this.querySelector('.swiper-main') as HTMLElement | null;

    if (!mainEl) return;

    if (thumbsEl) {
      this.thumbsSwiper = new Swiper(thumbsEl, {
        modules: [FreeMode, Thumbs, Navigation],
        spaceBetween: 12,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'horizontal',
        breakpoints: {
          1024: {
            direction: 'vertical',
            slidesPerView: 'auto',
          },
        },
        navigation: {
          nextEl: this.querySelector('.thumbs-nav-next'),
          prevEl: this.querySelector('.thumbs-nav-prev'),
        },
      });
    }

    this.mainSwiper = new Swiper(mainEl, {
      modules: [Navigation, Thumbs],
      spaceBetween: 10,
      navigation: {
        nextEl: this.querySelector('.main-nav-next'),
        prevEl: this.querySelector('.main-nav-prev'),
      },
      thumbs: {
        swiper: this.thumbsSwiper,
      },
    });
  }

  disconnectedCallback() {
    if (this.mainSwiper) {
      this.mainSwiper.destroy(true, true);
      this.mainSwiper = null;
    }
    if (this.thumbsSwiper) {
      this.thumbsSwiper.destroy(true, true);
      this.thumbsSwiper = null;
    }
  }
}

if (!customElements.get('fs-product-gallery')) {
  customElements.define('fs-product-gallery', FsProductGallery);
}
