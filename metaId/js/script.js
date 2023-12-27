document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.bottom__forum ').addEventListener('swiped-up', function (e) {
    document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--active')
    setTimeout(() => {
      document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
    }, 100)
    if (window.innerWidth > 769) {
      document.querySelector('.info').classList.add('info--index')
    } else {
      document.querySelector('.info').classList.add('info--opacity')
    }
    document.querySelector('.bottom__forum > .wrapper1 svg').classList.add('active')
    if (window.innerWidth > 501) {
      document.querySelector('.bottom').classList.remove('bottom--bottom1')
      document.querySelector('.bottom').classList.add('bottom--bottom')
      if (document.querySelector('.bottom > img').src.includes("4521.png")) {
        setTimeout(() => {
          document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"

        }, 200)
      } else {
        console.log(2);
        // document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"
        document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
        document.querySelector('.bottom > img').classList.remove('left')
      }
    } else {
      if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
        setTimeout(() => {
          document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"
          document.querySelector('.bottom').classList.add('bottom--bottom')
        }, 100)
      } else {
        document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
      }
    }
  });
  ymaps.ready(function () {
    var map = new ymaps.Map("map", {
      center: [55.843070, 37.366817],
      zoom: 10,
      controls: []
    });
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [55.843070, 37.366817]
      },
    });

    map.geoObjects
      .add(myGeoObject)

  });
  ymaps.ready(function () {
    var map = new ymaps.Map("map1", {
      center: [55.843070, 37.366817],
      zoom: 10,
      controls: []
    });
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
        type: "Point",
        coordinates: [55.843070, 37.366817]
      },
    });

    map.geoObjects
      .add(myGeoObject)

  });

  document.querySelector('.header__dropdown-bottom').addEventListener('click', function () {

    document.querySelector('.header__dropdown').classList.toggle('header__dropdown--active')
  })
  document.querySelector('.header__bottom > svg ').addEventListener('click', function (e) {
    this.classList.add('hidden')
    document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
    document.querySelector('.header__dropdown').classList.add('header__dropdown--active1')
  })
  document.querySelector('.bottom__forum-dropdown > svg ').addEventListener('swiped-down', function (e) {
    document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
    setTimeout(() => {
      document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
    }, 150)
    if (window.innerWidth > 769) {
      document.querySelector('.info').classList.remove('info--index')
    } else {
      document.querySelector('.info').classList.remove('info--opacity')
    }
    document.querySelector('.bottom__forum .wrapper1 > svg').classList.remove('active')
    if (window.innerWidth > 501) {
      document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
      document.querySelector('.bottom > img').classList.remove('left')
      // if (document.querySelector('.bottom > img').src.includes("307163755.png")) {
      //   console.log(11);

      //     // document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"
      //     document.querySelector('.bottom > img').classList.remove('left')

      // } else {
      //   console.log(22);
      //   // document.querySelector('.bottom > img').src = "./assets/img/Group 307163755.png"
      //   document.querySelector('.bottom').classList.remove('bottom--bottom')
      //   document.querySelector('.bottom').classList.add('bottom--bottom1')
      // }
    } else {
      if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
        setTimeout(() => {
          document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"

        }, 100)
      } else {
        document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
        document.querySelector('.bottom').classList.remove('bottom--bottom')
      }
    }
  });
  if (window.innerWidth < 992) {
    document.querySelector('.header__bottom-link').addEventListener('click', () => {
      document.querySelector('.header__bottom-dropdown').classList.toggle('header__bottom-dropdown--active')
    })
  }
  if (window.innerWidth > 992) {
    document.querySelector('.bottom__map').addEventListener('click', () => {
      document.querySelector('.bottom').classList.toggle('bottom--top')
    })
  } else {
    document.querySelector('.bottom__map').dataset.fancybox = ''
    document.querySelector('.bottom__map').href = '#mapModal'
  }
  document.querySelector('.header__dropdown svg').addEventListener('click', () => {
    document.querySelector('.header__dropdown').classList.remove('header__dropdown--active1')
    document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
    document.querySelector('.header__bottom >svg').classList.remove('hidden')
    console.log(document.querySelector('.header__bottom svg'));
  })
  $(".bottom__chat").mCustomScrollbar({
    axis: 'y'
  });
  if (window.innerWidth < 993) {
    $(".news__content").mCustomScrollbar({
      axis: 'y'
    });
    $(".news__content").mCustomScrollbar({
      axis: 'y'
    });
  } else {
    $(".news__right").mCustomScrollbar({
      axis: 'y'
    });
    $(".news__box").mCustomScrollbar({
      axis: 'y'
    });

  }
  $(".fav__wrapper").mCustomScrollbar({
    axis: 'y'
  });
  $(".aunth__wrapper").mCustomScrollbar({
    axis: 'y'
  });
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    trapFocus: false,
    touch: false
  });
  $('.fancy__close').on('click', () => {
    $.fancybox.close();
    document.querySelector('.popup').classList.remove('popup--active')
  })
  $('.fancy__close').on('touchend', () => {
    $.fancybox.close();
  })
  if (window.innerWidth > 992) {
    document.querySelector('.bottom > img ').addEventListener('click', () => {

      document.querySelector('.bottom__forum-content ').classList.remove('bottom__forum-content--index')
      document.querySelector('.bottom__forum .wrapper1 > img ').classList.remove('index')
      // document.querySelector('.bottom > img').classList.remove('vis')
      console.log(document.querySelector('.bottom__forum-dropdown--index'));
      if (window.innerWidth > 501 ) {
        if (document.querySelector('.bottom > img').src.includes("4521.png")  ) {
          // setTimeout(() => {
          //   document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"

          // }, 200)
        } else {
          document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
          document.querySelector('.bottom > img').classList.remove('left')

        }
      } else {
        
        if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
          setTimeout(() => {
            document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"

          }, 100)
        } else {
          document.querySelector('.bottom').classList.remove('bottom--bottom')
          document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
        }
      }
      document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
      if (!document.querySelector('.bottom__forum-dropdown--active')) {
        console.log(1);
        document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
        // document.querySelector('.bottom > img').classList.add('vis')
        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
        }, 150)
      } else {    
        document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')
        console.log(2);
        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
        }, 100)
      }

      if (window.innerWidth > 769) {
        document.querySelector('.info').classList.remove('info--index')
      } else {
        document.querySelector('.info').classList.remove('info--opacity')
      }
      document.querySelector('.bottom__forum .wrapper1 > svg').classList.remove('active')
     
    })
    document.querySelector('.wrapper1 ').addEventListener('click', () => {

      document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--active')
      document.querySelector('.bottom__forum-content ').classList.add('bottom__forum-content--index')
      document.querySelector('.bottom__forum .wrapper1 > img ').classList.add('index')
      // document.querySelector('.bottom > img').classList.remove('vis')
      if (!document.querySelector('.bottom__forum-dropdown--active')) {
  
        // document.querySelector('.bottom > img').classList.add('vis')
        document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
        })
      } else {
        document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')
        document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
        setTimeout(() => {

        }, 100)
      }
      console.log(document.querySelector('.bottom__forum--index'));
      if (window.innerWidth > 769) {
        document.querySelector('.info').classList.add('info--index')
      } else {
        document.querySelector('.info').classList.toggle('info--opacity')
      }
      document.querySelector('.bottom__forum .wrapper1 > svg').classList.toggle('active')
      if (window.innerWidth > 501) {
        if (document.querySelector('.bottom > img').src.includes("4521.png")) {
          setTimeout(() => {
            document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"
            document.querySelector('.bottom > img').classList.add('left')
          }, 100)
        } else {
          // document.querySelector('.bottom > img').src = "./assets/img/Vector 4521.png"
        }
      } else {
        if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
          // setTimeout(() => {
          //   document.querySelector('.bottom > img').src = "./assets/img/Vector 451.png"
          // }, 100)
        } else {
          document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
        }
      }
    })
  } else {
    document.querySelector('.wrapper1 ').addEventListener('click', () => {

      document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--active')
      document.querySelector('.bottom__forum-content ').classList.add('bottom__forum-content--index')
      document.querySelector('.bottom__forum .wrapper1 > img ').classList.add('index')
      // document.querySelector('.bottom > img').classList.remove('vis')
      if (!document.querySelector('.bottom__forum-dropdown--active')) {
  
        // document.querySelector('.bottom > img').classList.add('vis')
        document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
        })
      } else {
        document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')
        document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
        setTimeout(() => {

        }, 100)
      }
      console.log(document.querySelector('.bottom__forum--index'));
      if (window.innerWidth > 769) {
        document.querySelector('.info').classList.add('info--index')
      } else {
        document.querySelector('.info').classList.toggle('info--opacity')
      }
      document.querySelector('.bottom__forum .wrapper1 > svg').classList.toggle('active')
      if (window.innerWidth > 501) {
        if (document.querySelector('.bottom > img').src.includes("4521.png")) {
          setTimeout(() => {
            document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"
            document.querySelector('.bottom > img').classList.add('left')
          }, 100)
        } else {
          // document.querySelector('.bottom > img').src = "./assets/img/Vector 4521.png"
        }
      } else {
        if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
          setTimeout(() => {
            document.querySelector('.bottom').classList.add('bottom--bottom')
            document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"
          }, 100)
        } else {
          document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
        }
      }
    })
    document.querySelector('.bottom > img ').addEventListener('click', () => {
      document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
      document.querySelector('.bottom__forum-content ').classList.remove('bottom__forum-content--index')
      document.querySelector('.bottom__forum .wrapper1 > img ').classList.remove('index')
      // document.querySelector('.bottom > img').classList.remove('vis')
      if (!document.querySelector('.bottom__forum-dropdown--active')) {
  
        document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
        // document.querySelector('.bottom > img').classList.add('vis')
        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
        }, 150)
      } else {    
        document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')

        setTimeout(() => {
          document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
        }, 100)
      }

      if (window.innerWidth > 769) {
        document.querySelector('.info').classList.remove('info--index')
      } else {
        document.querySelector('.info').classList.remove('info--opacity')
      }
      document.querySelector('.bottom__forum .wrapper1 > svg').classList.remove('active')
      if (window.innerWidth > 501) {
        if (document.querySelector('.bottom > img').src.includes("4521.png")) {
          setTimeout(() => {
            document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"

          }, 200)
        } else {
          document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
          document.querySelector('.bottom > img').classList.remove('left')

        }
      } else {
        if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
          // setTimeout(() => {
          //   document.querySelector('.bottom > img').src = "./assets/img/Vector 451.png"

          // }, 100)
        } else {
          document.querySelector('.bottom').classList.remove('bottom--bottom')
          document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
        }
      }
    })
  }
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.info__comment').classList.add('info__comment--hidden')
  })

  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active')
  })
  if (window.innerWidth < 1480) {
    document.querySelector('#headerBack').src = './assets/img/Group 307163758.png'
    document.querySelector('#commentImg').src = './assets/img/Rectangle 614020.png'
  }
  if (window.innerWidth < 500) {
    document.querySelector('.bottom > img').src = './assets/img/Group 307163759.png'
  }
  if (window.innerWidth < 768) {
    document.querySelector('.bottom__forum-dropdown > img').src = './assets/img/Vector 45.png'
  }
  $('.news__select').selectize({

  })
  $('.news__search').selectize({

  })
  document.querySelector('.popup__close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('popup--active')
  })
  let popup = document.querySelector('.popup')
  let path
  let coords
  const event = new MouseEvent('click', {})
  const elem = document.querySelector('.news__map svg')
  const panzoom = Panzoom(elem, {
    maxScale: 7
  })

  document.querySelectorAll('[data-svg]').forEach((el) => {
    el.addEventListener('click', (e) => {
      path = el
      coords = $(e.target).position()
      popup.classList.add('popup--active')

      popup.style.left = coords.left + 'px';
      popup.style.top = coords.top + 'px';
      
    })
  })
elem.addEventListener('panzoomzoom', ((el) => {
  console.log(2);
        popup.classList.remove('popup--active')
  
}))
  elem.addEventListener('panzoomend', ((el) => {
    path?.dispatchEvent(event)
    console.log(3);
  }))
  

  panzoom.pan(10, 10)
  panzoom.zoom(1, { animate: true })
  document.querySelector('.news__plus').addEventListener('click', panzoom.zoomIn)
  document.querySelector('.news__minus').addEventListener('click', panzoom.zoomOut)
});