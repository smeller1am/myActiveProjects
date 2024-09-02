document.addEventListener("DOMContentLoaded", function () {
  
  let faqSwiper = new Swiper('.faq__swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      prevEl: ".faq__slide-prev",
      nextEl: ".faq__slide-next",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
    spaceBetween: 24,
      },
      768: {
        slidesPerView: 2.5,
    spaceBetween: 15,
      },
      576: {
        slidesPerView: 1.6,
    spaceBetween: 15,
      },
      320: {
        slidesPerView: 1.2,
    spaceBetween: 15,
      },
    }
  });

});
