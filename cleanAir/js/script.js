document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.sertificate__swiper', {
        slidesPerView: 1,
        // spaceBetween: 20,
        // centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
          },
    
      });
      $('.burger').on('click', () => {
        $('.menu').addClass('menu--active')
        $('html').addClass('hidden')
        $('.overlay').addClass('overlay--active')
        setTimeout(()=> {
            $('.overlay').addClass('overlay--opacity')
        }, 100)
      })
      $('.menu__back').on('click', () => {
        $('.menu').removeClass('menu--active')
        $('.overlay').removeClass('overlay--active')
        $('html').removeClass('hidden')
        setTimeout(()=> {
            $('.overlay').removeClass('overlay--opacity')
        }, 100)
      })
      $('.overlay').on('click', () => {
        $('.menu').removeClass('menu--active')
        $('html').removeClass('hidden')
        $('.overlay').removeClass('overlay--active')
        setTimeout(()=> {
            $('.overlay').removeClass('overlay--opacity')
        }, 100)
      })
      $('.menu__wrapper').on('click', function() {
        $('.menu__wrapper').not(this).next().slideUp()
        $(this).next().slideToggle()
      })
      if(window.innerWidth >= 576) {
        let container = document.querySelector('.container')
        let menu = document.querySelector('.menu')
        const compStyles = window.getComputedStyle(container);
        console.log();
        menu.style.paddingRight = `${Number(compStyles.marginRight.replace('px', '')) + 20}px`
      window.addEventListener('resize', () => {
        let container = document.querySelector('.container')
        let menu = document.querySelector('.menu')
        const compStyles = window.getComputedStyle(container);
        console.log();
        menu.style.paddingRight = `${Number(compStyles.marginRight.replace('px', '')) + 20}px`
      })
      }
});