$(window).on("load", function () {

  // $('#phone').mask('+7 (000) 000 00 00');
  $(".customize__list").mCustomScrollbar({
    axis: "y",
    theme: 'white'
  });
  var swiper = new Swiper('.content__sliderHome', {
    loop: true,
    navigation: {
      nextEl: ".content__sliderHome-btnNext",
      prevEl: ".content__sliderHome-btnPrev",
    },
  });
  if(document.querySelector('.gallery__swiper')){
    var swiperGallery = new Swiper('.gallery__swiper', {
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 20, 
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      }
    });
    swiperGallery?.slideTo(1, 0)
  }
  var swiperCatalog = new Swiper('.content__sliderCatalog', {
    loop: true,
    navigation: {
      nextEl: ".content__sliderCatalog-btnNext",
      prevEl: ".content__sliderCatalog-btnPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 5,
      }
    }
  });
  var sliderPopular = new Swiper('.content__sliderPopular', {
    loop: true,
    navigation: {
      nextEl: ".content__sliderPopular-btnNext",
      prevEl: ".content__sliderPopular-btnPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
        spaceBetween: 4,
      }
    }
  });

  const modalCounter = document.querySelectorAll('.cart__quantity')

  modalCounter?.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.cart__quantity-num')
      let sum = +num.innerHTML
      if (e.classList.contains('cart__quantity-plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('cart__quantity-minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  })

  // $('svg[data-fancybox]').fancybox({
  //   closeBtn: true,
  //   afterShow: function( instance, current){
  //     $('.fancybox-content::after').on('click', function(){
  //       console.log(1);
  //     })
  //   }

  // })

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });


  $('#showPassword').on('click', () =>{
    if($('#password').attr('type') == 'password'){
      $('#password').attr('type', 'text')
    } else {
      $('#password').attr('type', 'password')
    }
  })
  
  $('.ordering__file').on('change', function(){
    if ($('.ordering__file').val() !==''){
      $('.ordering__file').addClass('ordering__file--full')
    } else{
      $('.ordering__file').removeClass('ordering__file--full')
    }
  })
  $('.ordering__selects-item').select2()
  $('.ordering__selects-item').on('change', function(){
    var selectedOption = $(this).val();
    hideAllSelects()
    switch(selectedOption){
      case ('car'):
        $('#cdekItem').addClass('visible');
        break
      case ('self'):
        $('#placeItem').addClass('visible');
        break
      case ('courier'):
        $('#plug').addClass('visible');
        $('#town').addClass('visible');
        $('#adress').addClass('visible');
        break
      }
  })
  $('.ordering__radio-input').on('change', function(){
    if (this.id =='cashLess'){
      $('.ordering__file').addClass('visible');
    } else{
      $('.ordering__file').removeClass('visible');
    }
  })

  function hideAllSelects(){
    $('#cdekItem').removeClass('visible');
    $('#placeItem').removeClass('visible');
    $('#plug').removeClass('visible');
    $('#town').removeClass('visible');
    $('#adress').removeClass('visible');
  }

  if (document.querySelector('.customize__box')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.customize__box')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('customize__box--opacity', 'customize__box--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('customize__tabs-item--active')
        })
        this.classList.add('customize__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('customize__box--active')
        setTimeout(() => {
          cat.classList.add('customize__box--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('.constructor')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.constructor__content')
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('constructor__content--opacity', 'constructor__content--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('constructor__tabs-item--active')
        })
        this.classList.add('constructor__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        console.log(cat);
        cat.classList.add('constructor__content--active')
        setTimeout(() => {
          cat.classList.add('constructor__content--opacity')
        }, 400)
      })
    })
  }

  let countertopCards = document.querySelector('#tableTop')?.querySelectorAll('.customize__list-item'),
      underframeCards = document.querySelector('#tableBottom')?.querySelectorAll('.customize__list-item')
      countertopItem = document.querySelector('#countertopItem'),
      underframeItem = document.querySelector('#underframeItem')

  countertopCards?.forEach((el) => {
    el.addEventListener('click', function() {
      document.querySelector('.customize__preview-material').src = this.querySelector('.customize__list-img').src
      countertopItem.querySelector('.customize__preview-text').textContent = this.querySelector('.customize__list-text').textContent
      countertopItem.querySelector('.customize__preview-img'). src = this.querySelector('.customize__list-img').src
    })
  })
  underframeCards?.forEach((el) => {
    el.addEventListener('click', function() {
      document.querySelector('.customize__preview-table').src = this.querySelector('.customize__list-img').src
      underframeItem.querySelector('.customize__preview-text').textContent = this.querySelector('.customize__list-text').textContent
      underframeItem.querySelector('.customize__preview-img'). src = this.querySelector('.customize__list-img').src
    })
  })

  $('#register form').on('submit', function(e){
    e.preventDefault()
    $.fancybox.close();
    $.fancybox.open({
      src: '#success',
    });
    setTimeout(function(){
      $.fancybox.close();
    }, 4000)
    })
  $("#contactUs").click(function (e) {
    e.preventDefault()
    $.fancybox.open({
      src: "#contactUsModal",
      type: "inline",
      touch: false,
      infobar: false,
      smallBtn: false,
    });
  });

  let constructItem = document.querySelectorAll('.customize__col:nth-child(2) .customize__construct-item')
  constructItem?.forEach((el) =>{
    el.addEventListener('click', function(){
      constructItem?.forEach((el) =>{
        el.classList.remove('customize__construct-item--active');
      })
      let data = el.dataset.images
      let size = document.querySelector(`.customize__size[data-sizes = "${data}"]`)
      this.classList.add('customize__construct-item--active');
      document.querySelectorAll('.customize__size').forEach((el) =>{
        el.classList.remove('customize__size-active');
      })
      size.classList.add('customize__size-active');
    })
  }) 

  let models = document.querySelectorAll('.constructor__models .constructor__models-item')
  models.forEach((el) =>{
    el.addEventListener('click', function(){
      let data = el.dataset.model
      let allBlocks = document.querySelectorAll(`[data-option]`)
      allBlocks.forEach(el => el.classList.remove('constructor--visible'))
      document.querySelectorAll('.constructor__models-item--active').forEach(el => el.classList.remove('constructor__models-item--active'))
      el.classList.add('constructor__models-item--active')
      document.querySelectorAll('.constructor__color-item--active').forEach((el) => {el.classList.remove('constructor__color-item--active')})
      document.querySelectorAll('.constructor__material-item--active').forEach((el) => {el.classList.remove('constructor__material-item--active')})
      document.querySelectorAll('.constructor__form-item--active').forEach((el) => {el.classList.remove('constructor__form-item--active')})
      let blocks = document.querySelectorAll(`[data-option="${data}"]`)
      blocks.forEach(el => el.classList.add('constructor--visible'))
      blocks.forEach((el) => {
        if(el.querySelector('.constructor__color-item')){
          el.querySelector('.constructor__wrapper').children[0].classList.add('constructor__color-item--active');
          console.log(el.querySelector('.constructor__wrapper').children[0]);
        }
        if(el.querySelector('.constructor__form-item')){
          el.querySelector('.constructor__wrapper').children[0].classList.add('constructor__form-item--active');
          console.log(el.querySelector('.constructor__wrapper').children[0]);
        }
        if(el.querySelector('.constructor__material-item')){
          el.querySelector('.constructor__wrapper').children[0].classList.add('constructor__material-item--active');
          console.log(el.querySelector('.constructor__wrapper').children[0]);
        }
      })
    })
  })
  document.querySelectorAll('.constructor__color-item').forEach((el) => {
    el.addEventListener('click', function(){
      document.querySelectorAll('.constructor__color-item--active').forEach((el) => el.classList.remove('constructor__color-item--active'))
      el.classList.add('constructor__color-item--active')
    })
  })
  document.querySelectorAll('.constructor__material-item').forEach((el) => {
    el.addEventListener('click', function(){
      document.querySelectorAll('.constructor__material-item--active').forEach((el) => el.classList.remove('constructor__material-item--active'))
      el.classList.add('constructor__material-item--active')
    })
  })
  document.querySelectorAll('.constructor__form-item').forEach((el) => {
    el.addEventListener('click', function(){
      document.querySelectorAll('.constructor__form-item--active').forEach((el) => el.classList.remove('constructor__form-item--active'))
      el.classList.add('constructor__form-item--active')
    })
  })
  // $('.customize__construct-item').on('click', function(){
  //   $('.customize__construct-item').removeClass('customize__construct-item--active');
  //   $(this).addClass('customize__construct-item--active');
  // })
  if (window.innerWidth <= 1165) {
    $('[data-targetDropdown]').click(function () {
      var target = $(this).attr('data-targetDropdown');
      $('[data-dropdown="' + target + '"]').stop().slideToggle(600);
    });
    $(".burger").on("click", function () {
      $(".burger").toggleClass("burger--open");
    });

  }
  if (window.innerWidth <= 576) {
    $('.footer__accordion').on('click', function () {
      $('.footer__accordion').toggleClass('footer__accordion--active')
      $('.footer__links').slideToggle();
    })
  }
  if (window.innerWidth <= 992) {
    $('.nav__item-link').click(function () {
      $(this).toggleClass('nav__item-link--rotate').next('.nav__list').slideToggle();
    });
    $('.nav__list-item').click(function () {
      $(this).toggleClass('nav__list-item--active').next('.nav__list-itemFirst').slideToggle();
      $('.nav__list-item').not(this).removeClass('nav__list-item--active').next('.nav__list-itemFirst').slideUp();
    });
  }

});

