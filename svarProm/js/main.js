// const { default: Swiper } = require("swiper")

$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const swiperImg = document.querySelectorAll('.license__swiper')

  $(".license__images").mCustomScrollbar({
    axis: 'x',
    theme:"dark",
    documentTouchScroll: true,
    alwaysShowScrollbar: -1,
    scrollButtons:{ 
      enable: true
    },
  });
  
  if(swiperImg){
    const swipe =  new Swiper('.license__swiper', {
      slidesPerView: 3,
      breakpoints: {
        1800: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3.5,
        },
        490:{
          slidesPerView: 2.5,
        },
        380:{
          slidesPerView: 2,
        },
        320:{
          slidesPerView: 1.5,
        },
        220:{
          slidesPerView: 1,
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }

  if (burger) {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.active').length) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      }
      e.stopPropagation()
    })

    // menuItem.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     burger.classList.toggle('active')
    //     menu.classList.remove('active')
    //     body.classList.remove('no-scroll')
    //   })
    // })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
      body.classList.toggle('no-scroll')
    })
  }

  if (document.querySelector('.license__box')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.license__box')
    // console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('license__box--opacity', 'license__box--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('license__tabs-item--active')
        })
        this.classList.add('license__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('license__box--active')
        setTimeout(() => {
          cat.classList.add('license__box--opacity')
        }, 400)
      })
    })
  }
  if(window.innerWidth < 992) {
    const swiper = new Swiper('.reviews__swiper', {
      slidesPerView: 3,
      breakpoints: {
        769: {
          slidesPerView: 3,
        },
        576:{
          slidesPerView: 2,
        },
        320:{
          slidesPerView: 1,
        }
      }
    });
    $('.footer__col-title').on('click', function() {
      $(this).toggleClass('active')
      $('.footer__col-title').not(this).removeClass('active').next('').slideUp()
      $(this).next('').slideToggle()
    })
    $('.menu__icon').on('click', function() {
      $(this).parent().toggleClass('active')
      $('.menu__icon').not(this).parent().removeClass('active').next('').slideUp()
      $(this).parent().next('').slideToggle()
    })
  }
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

if(document.querySelector('.data__accordeon')){
  $('.data__accordeon-text').on('click', function() {
    $('.data__accordeon-text').toggleClass('active')
    $(this).parent().find('.data__accordeon-content').slideToggle()
    // $('.data__accordeon-content').slideToggle()
  })
}

const swiper1 = new Swiper('.partners__swiper', {
  slidesPerView: 3.5,
  spaceBetween: 35,
  breakpoints: {
    769: {
      slidesPerView: 3.5,
    },
    576:{
      slidesPerView: 2,
    },
    320:{
      slidesPerView: 2,
    }
  }
});
const swiper2 = new Swiper('.detail__content-swiper', {
  slidesPerView: 1,
  spaceBetween: 35,
  pagination: {
    el: '.swiper-pagination',
  },
});
if(document.querySelector('#phone')){
  $('#phone').mask('+7(999) 999-9999', {
    placeholder: '_',
    autoclear: false,
  })
}
if (document.querySelector('.phone')) {
  $('.phone').mask('+7(999) 999-9999', {
    placeholder: '_',
    autoclear: false,
  })
}
// document.addEventListener('DOMContentLoaded', () => {})
