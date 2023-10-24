document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2021
if(document.querySelector('#age')){
  var handlesSlider = document.getElementById('quantity');

  noUiSlider.create(handlesSlider, {
    start: [0,20],
    connect: true,
    range: {
        'min': [0],
        'max': [40]
    }
  });
  handlesSlider.noUiSlider.disable(0)
    var handlesAgeSlider = document.getElementById('age');
  
  noUiSlider.create(handlesAgeSlider, {
    start: [3,6],
    connect: true,
    range: {
        'min': [3],
        'max': [17]
    }
  });
  handlesAgeSlider.noUiSlider.disable(0)
}
if(document.querySelector('#weight')){
    var handlesAgeSlider = document.getElementById('weight');
  
  noUiSlider.create(handlesAgeSlider, {
    start: [3,6],
    connect: true,
    range: {
        'min': [3],
        'max': [17]
    }
  });
  handlesAgeSlider.noUiSlider.disable(0)
}
// fixedHandle.classList.add('noUi-fixed-handle');
  if(document.querySelector('#days')){
    const deadline = new Date(2024, 6, 1);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('#days');
    const $hours = document.querySelector('#hours');
    const $minutes = document.querySelector('#minutes');
    const $seconds = document.querySelector('#seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  
  }
  const swiper = new Swiper('.reviews__swiper', {
    centeredSlides: true,
    spaceBetween: 25,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
  const swiper1 = new Swiper('.guests__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  const swiper2 = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  console.log(123)
  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active')
    document.querySelector('.burger').classList.toggle('active')

    if(document.querySelector('.fixed')){
      document.querySelector('body').classList.remove('fixed')
    } else{
      setTimeout(() => {
        document.querySelector('body').classList.add('fixed')
      },400)
    }
  })
  $('.menu__list-item--accordeon').on('click', () =>{
    $('.menu__list-item--accordeon').toggleClass('menu__list-item--accorderonActive')
    $('.menu__dropdown').slideToggle('fast')
  })

  if(document.querySelector('#map')){
    ymaps.ready(function () {  
      var map = new ymaps.Map("map", {
        center: [55.76, 37.64], 
        zoom: 10,
        controls:[]
      });  
    });
  }
  if (document.querySelector('.animatorsType__content')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.animatorsType__content')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('animatorsType__content--opacity', 'animatorsType__content--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('animatorsType__tabs-item--active')
        })
        this.classList.add('animatorsType__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('animatorsType__content--active')
        setTimeout(() => {
          cat.classList.add('animatorsType__content--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('.topCard__tab')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.topCard__tab'),
      blocks = document.querySelectorAll('.category__list')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('topCard__tab--opacity', 'topCard__tab--active')
        })
        blocks.forEach((elem) => {
          elem.classList.remove('category__list--opacity', 'category__list--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('topCard__tabs-item--active')
        })
        this.classList.add('topCard__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        var cat1 = document.querySelector('.category__list[data-info="' + target + '"]')
        cat.classList.add('topCard__tab--active')
        setTimeout(() => {
          cat.classList.add('topCard__tab--opacity')
        }, 400)
        cat1.classList.add('category__list--active')
        setTimeout(() => {
          cat1.classList.add('category__list--opacity')
        }, 400)
      })
    })
  }
  if(document.querySelector('[data-fancybox]')){
    $('[data-fancybox]').fancybox({
      scrolling: 'auto'
    });
  }
  if (document.querySelector('.galleryWrap')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.galleryWrap')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('galleryWrap--opacity', 'galleryWrap--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('galleryTabs__box-item--active')
        })
        this.classList.add('galleryTabs__box-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('galleryWrap--active')
        setTimeout(() => {
          cat.classList.add('galleryWrap--opacity')
        }, 400)
      })
    })
  }
  $(".ordering__item-select").selectize({
    delimiter: ",",
    persist: false,
    maxItems: 1,
    create: function (input) {
      return {
        value: input,
        text: input,
      };
    }
  });

});