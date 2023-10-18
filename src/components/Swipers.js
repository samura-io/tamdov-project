import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Pagination, Autoplay,Navigation } from 'swiper/modules';

export default class Swipers {

  runPaginationSwiper() {
    const paginationSwiper = new Swiper('.pagination-swiper', {
      modules: [Pagination, Autoplay],
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    return paginationSwiper;
  }

  runChangeSwiper() {
    const changeSwiper = new Swiper('.change-swiper', {
      modules: [Navigation],
        spaceBetween: 50,
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
    return changeSwiper;
  }

  runPopupSwiper() {
    const popupSwiper = new Swiper('.popup-swiper', {
      slidesPerView: 2.6,
      spaceBetween: 10,
      freeMode: true,
    });
    return popupSwiper;
  }
}
