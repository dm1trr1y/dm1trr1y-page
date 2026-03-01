import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    addIcons: false,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
