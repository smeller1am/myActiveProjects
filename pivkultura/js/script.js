
$(window).on("load", function () {
  let myMap

  const swiper = new Swiper('.nav__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }, 
  });
  if(window.innerWidth <= 576){
    const swiper1 = new Swiper('.catalog__wrapper', {
      slidesPerView: "auto",
    });
  }

    let paddingLeft = document.querySelector('.header__container').getBoundingClientRect();
    console.log(paddingLeft);
    $('.sidebar').css('padding-left',paddingLeft.left);
    $( window ).resize(function() {
        let paddingLeft = document.querySelector('.header__container').getBoundingClientRect();
        $('.sidebar').css('padding-left',paddingLeft.left);
        //$('.container').css('padding-right',paddingLeft.left);
        //$('.container').css('padding-left',paddingLeft.left);
        // $('.footer').css('padding-left',paddingLeft.left);
        // $('.footer').css('padding-right',paddingLeft.left);
    });
  if(document.querySelector('#map')){

    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('map', {
        center: [51.575831, 45.974249],
        zoom: 17,
        controls: ['zoomControl'],
      })
      myMap.behaviors.disable("scrollZoom");
    })
  }
  if(document.querySelector('#map2')){
    let zoom = 16
    if(window.innerWidth <= 1450){
      zoom = 15
    } if (window.innerWidth <= 576){
      zoom = 14
    }
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('map2', {
        center: [51.575831, 45.974249],
        zoom: zoom,
        controls: ['zoomControl'],
      })
      myMap.behaviors.disable("scrollZoom");
      var circle1 = new ymaps.Circle([[51.575831, 45.974249], 150], {}, {
        fillColor: "rgba(60, 171, 141, 0.10)",
        strokeColor: "#3CAB8D",
        strokeOpacity: 1,
        strokeWidth: 3
    });

    var circle2 = new ymaps.Circle([[51.575831, 45.974249], 300], {}, {
        fillColor: "rgba(246, 181, 84, 0.10)",
        strokeColor: "#F6B554",
        strokeOpacity: 1,
        strokeWidth: 3
    });

    var circle3 = new ymaps.Circle([[51.575831, 45.974249], 400], {}, {
        fillColor: "rgba(241, 93, 80, 0.10)",
        strokeColor: "#F15D50",
        strokeOpacity: 1,
        strokeWidth: 3
    });

    // Добавляем круги на карту
    myMap.geoObjects.add(circle1);
    myMap.geoObjects.add(circle2);
    myMap.geoObjects.add(circle3);
    })
  }
  if (document.querySelector('.contacts__elem')) {
    var targetMap = document.querySelectorAll('[data-target]'),
      map = document.querySelectorAll('.contacts__elem')

    targetMap?.forEach((elem) => {
 
      elem.addEventListener('click', function (e) {

        if(elem.dataset.target =='target1'){
          myMap?.setCenter([51.575831, 45.974249])
        } else{
          myMap?.setCenter([51.525987, 46.031795])
        }
        e.preventDefault()
        var target = this.getAttribute('data-target')
        map.forEach((elem) => {
          elem.classList.remove('contacts__elem--opacity', 'contacts__elem--active')
        })
        targetMap.forEach((elem) => {
          elem.classList.remove('contacts__tabs-item--active')
        })
        this.classList.add('contacts__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('contacts__elem--active')
        setTimeout(() => {
          cat.classList.add('contacts__elem--opacity')
        }, 400)
      })
    })
  }
  $('.burger').on('click', function(){
    $('.burger').toggleClass('burger--open')
    $('.sidebar').toggleClass('sidebar--open')
    $('.overlay').toggleClass('overlay--open')
  })
  $('.overlay').on('click', ()=>{
    $('.burger').removeClass('burger--open')
    $('.sidebar').removeClass('sidebar--open')
    $('.overlay').removeClass('overlay--open')
  })
})