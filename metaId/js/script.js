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
      document.querySelector('.bottom__backg').classList.add('bottom__backg--alt')
      document.querySelector('.bottom').classList.remove('bottom--bottom1')
      document.querySelector('.bottom').classList.add('bottom--bottom')

    } else {
      document.querySelector('.bottom__backg').classList.add('bottom__backg--alt')

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
  if (window.innerWidth > 992 || window.innerWidth < 769) {
    if (document.querySelector('.vizit__dropdown-visible')) {
      document.querySelector('.vizit__dropdown-visible').addEventListener('click', function () {
        this.parentNode.classList.toggle('vizit__dropdown--active')
        $('.vizit__dropdown-content').slideToggle()
      })
    }
  }
  document.querySelector('.header__dropdown-bottom').addEventListener('click', function () {

    // document.querySelector('.header__dropdown').classList.toggle('header__dropdown--active')
  })
  document.querySelector('.header__bottom > svg ').addEventListener('click', function (e) {
    // this.classList.add('hidden')
    // document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
    // document.querySelector('.header__dropdown').classList.add('header__dropdown--active1')
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
      document.querySelector('.bottom__backg').classList.remove('bottom__backg--alt')

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
      document.querySelector('.bottom__backg').classList.remove('bottom__backg--alt')
    }
  });
  if (window.innerWidth < 992) {
    document.querySelector('.header__bottom-link').addEventListener('click', () => {
      document.querySelector('.header__bottom-dropdown').classList.toggle('header__bottom-dropdown--active')
    })
  }
  if (window.innerWidth > 992) {
    document.querySelector('.bottom__map').addEventListener('click', () => {
      // document.querySelector('.bottom').classList.toggle('bottom--top')
    })
  } else {
    document.querySelector('.bottom__map').dataset.fancybox = ''
    document.querySelector('.bottom__map').href = '#mapModal'
  }
  document.querySelector('.header__dropdown svg').addEventListener('click', () => {
    // document.querySelector('.header__dropdown').classList.remove('header__dropdown--active1')
    // document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
    // document.querySelector('.header__bottom >svg').classList.remove('hidden')
    // console.log(document.querySelector('.header__bottom svg'));
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
    $(".vizit__box").mCustomScrollbar({
      axis: 'y'
    });
  } else {
    $(".vizit__profile").mCustomScrollbar({
      axis: 'y'
    });
    $(".news__right").mCustomScrollbar({
      axis: 'y'
    });
    $(".news__box").mCustomScrollbar({
      axis: 'y'
    });
    $(".vizit__listt").mCustomScrollbar({
      axis: 'y'
    });
    $(".vizit__cards").mCustomScrollbar({
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
  if (document.querySelector('.vizit__right')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.vizit__right')
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('vizit__right--opacity', 'vizit__right--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('vizit__list-item--active')
        })
        this.classList.add('vizit__list-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('vizit__right--active')
        setTimeout(() => {
          cat.classList.add('vizit__right--opacity')
        }, 400)
      })
    })
  }
  $('.fancy__close').on('click', () => {
    $.fancybox.close();
    document.querySelector('.popup').classList.remove('popup--active')
  })
  $('.fancy__close').on('touchend', () => {
    $.fancybox.close();
  })
  if (window.innerWidth > 992) {
    document.querySelector('.bottom > img ')?.addEventListener('click', () => {

      // document.querySelector('.bottom__forum-content ').classList.remove('bottom__forum-content--index')
      // document.querySelector('.bottom__forum .wrapper1 > img ').classList.remove('index')
      // // document.querySelector('.bottom > img').classList.remove('vis')
      // console.log(document.querySelector('.bottom__forum-dropdown--index'));
      // if (window.innerWidth > 501 ) {
      //   if (document.querySelector('.bottom > img').src.includes("4521.png")  ) {
      //     // setTimeout(() => {
      //     //   document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"

      //     // }, 200)
      //   } else {
      //     document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
      //     document.querySelector('.bottom > img').classList.remove('left')

      //   }
      // } else {

      //   if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
      //     setTimeout(() => {
      //       document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png"

      //     }, 100)
      //   } else {
      //     document.querySelector('.bottom').classList.remove('bottom--bottom')
      //     document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
      //   }
      // }
      // document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
      // if (!document.querySelector('.bottom__forum-dropdown--active')) {
      //   console.log(1);
      //   document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
      //   // document.querySelector('.bottom > img').classList.add('vis')
      //   setTimeout(() => {
      //     document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
      //   }, 150)
      // } else {    
      //   document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')
      //   console.log(2);
      //   setTimeout(() => {
      //     document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
      //   }, 100)
      // }

      // if (window.innerWidth > 769) {
      //   document.querySelector('.info').classList.remove('info--index')
      // } else {
      //   document.querySelector('.info').classList.remove('info--opacity')
      // }
      // document.querySelector('.bottom__forum .wrapper1 > svg').classList.remove('active')

    })
    document.querySelector('.wrapper1 ').addEventListener('click', () => {

      // document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--active')
      // document.querySelector('.bottom__forum-content ').classList.add('bottom__forum-content--index')
      // document.querySelector('.bottom__forum .wrapper1 > img ').classList.add('index')
      // // document.querySelector('.bottom > img').classList.remove('vis')
      // if (!document.querySelector('.bottom__forum-dropdown--active')) {

      //   // document.querySelector('.bottom > img').classList.add('vis')
      //   document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
      //   setTimeout(() => {
      //     document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
      //   })
      // } else {
      //   document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')
      //   document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
      //   setTimeout(() => {

      //   }, 100)
      // }
      // console.log(document.querySelector('.bottom__forum--index'));
      // if (window.innerWidth > 769) {
      //   document.querySelector('.info').classList.add('info--index')
      // } else {
      //   document.querySelector('.info').classList.toggle('info--opacity')
      // }
      // document.querySelector('.bottom__forum .wrapper1 > svg').classList.toggle('active')
      // if (window.innerWidth > 501) {
      //   if (document.querySelector('.bottom > img').src.includes("4521.png")) {
      //     setTimeout(() => {
      //       document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"
      //       document.querySelector('.bottom > img').classList.add('left')
      //     }, 100)
      //   } else {
      //     // document.querySelector('.bottom > img').src = "./assets/img/Vector 4521.png"
      //   }
      // } else {
      //   if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
      //     // setTimeout(() => {
      //     //   document.querySelector('.bottom > img').src = "./assets/img/Vector 451.png"
      //     // }, 100)
      //   } else {
      //     document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
      //   }
      // }
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

      } else {

      }
    })
    // document.querySelector('.bottom > img ')?.addEventListener('click', () => {
    //   document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
    //   document.querySelector('.bottom__forum-content ').classList.remove('bottom__forum-content--index')
    //   document.querySelector('.bottom__forum .wrapper1 > img ').classList.remove('index')
    //   // document.querySelector('.bottom > img').classList.remove('vis')
    //   if (!document.querySelector('.bottom__forum-dropdown--active')) {

    //     document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--index')
    //     // document.querySelector('.bottom > img').classList.add('vis')
    //     setTimeout(() => {
    //       document.querySelector('.bottom__forum ').classList.remove('bottom__forum--index')
    //     }, 150)
    //   } else {
    //     document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--index')

    //     setTimeout(() => {
    //       document.querySelector('.bottom__forum ').classList.add('bottom__forum--index')
    //     }, 100)
    //   }

    //   if (window.innerWidth > 769) {
    //     document.querySelector('.info').classList.remove('info--index')
    //   } else {
    //     document.querySelector('.info').classList.remove('info--opacity')
    //   }
    //   document.querySelector('.bottom__forum .wrapper1 > svg').classList.remove('active')
    //   if (window.innerWidth > 501) {
    //     if (document.querySelector('.bottom > img').src.includes("4521.png")) {
    //       setTimeout(() => {
    //         document.querySelector('.bottom > img').src = "./assets/img/Vector 4522.png"

    //       }, 200)
    //     } else {
    //       document.querySelector('.bottom > img').src = "./assets/img//Vector 4521.png"
    //       document.querySelector('.bottom > img').classList.remove('left')

    //     }
    //   } else {
    //     if (document.querySelector('.bottom > img').src.includes("307163759.png")) {
    //       // setTimeout(() => {
    //       //   document.querySelector('.bottom > img').src = "./assets/img/Vector 451.png"

    //       // }, 100)
    //     } else {
    //       document.querySelector('.bottom').classList.remove('bottom--bottom')
    //       document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
    //     }
    //   }
    // })
  }
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.info__comment').classList.add('info__comment--hidden')
  })

  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu--active')
  })
  // if (window.innerWidth < 1480) {
  //   document.querySelector('#headerBack').src = './assets/img/Group 307163758.png'
  //   document.querySelector('#commentImg').src = './assets/img/Rectangle 614020.png'
  // }
  // if (window.innerWidth < 500) {
  //   document.querySelector('.bottom > img').src = './assets/img/Group 307163759.png'
  // }
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
  elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
  document.querySelectorAll('[data-svg]').forEach((el) => {
    el.addEventListener('click', (e) => {
      path = el
      coords = $(e.target).position()
      popup.classList.add('popup--active')
      console.log(coords);

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
    let x = $('#metro').position()
    let xx = x.left
    let xy = x.top
    let y = document.querySelector('.popup').getBoundingClientRect()
    let yy = y.y
    let yx = y.x
    let width = document.querySelector('.news__map').offsetWidth
    let height = document.querySelector('.news__map').offsetHeight
    console.log(width);
    console.log(x);
    console.log(y);

    if (window.innerWidth > 992) {
      if (xy - 30 + height < yy) {
        popup.classList.remove('popup--active')
      }
      if (xx + 30 > yx) {
        popup.classList.remove('popup--active')

      }
      if (xy + 30 > yy) {
        popup.classList.remove('popup--active')
      }
      if (xx - 100 + width < yx) {
        popup.classList.remove('popup--active')
      }
    } else {
      if (xy - 215 + height < yy) {
        popup.classList.remove('popup--active')
      }
      if (xx - 150 + width < yx) {
        popup.classList.remove('popup--active')
      }
      if (xx + 30 > yx) {
        popup.classList.remove('popup--active')

      }
      if (xy + 30 > yy) {
        popup.classList.remove('popup--active')
      }
    }
    if (window.innerWidth < 768 && window.innerWidth > 577) {
      console.log('yes1');
      if (xy - 180 + height < yy) {
        popup.classList.remove('popup--active')
      }
      if (xx - 150 + width < yx) {
        popup.classList.remove('popup--active')
      }
      if (xx + 30 > yx) {
        popup.classList.remove('popup--active')

      }
      if (xy + 30 > yy) {
        popup.classList.remove('popup--active')
      }
    }
    if (window.innerWidth < 576) {
      console.log('yes2');
      if (xx + 30 > yx) {
        popup.classList.remove('popup--active')
        console.log(3333);
      }
      if (xy + 100 > yy) {
        console.log(44444);
        popup.classList.remove('popup--active')
      }
      if (xx - 150 + width < yx) {
        popup.classList.remove('popup--active')
      }
      if (xy - 280 + height < yy) {
        popup.classList.remove('popup--active')
        console.log(5555);
      }
    } else {
      // if (xy - 230 + height < yy) {
      //   popup.classList.remove('popup--active')
      // }
    }
  }))


  panzoom.pan(10, 10)
  panzoom.zoom(1, { animate: true })
  document.querySelector('.news__plus').addEventListener('click', panzoom.zoomIn)
  document.querySelector('.news__minus').addEventListener('click', panzoom.zoomOut)
  document.querySelector('.news__share').addEventListener('click', () => {

    toggleFullScreen();
  })
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.querySelector('#metro').classList.add('news--fullscreen')
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      document.querySelector('#metro').classList.remove('news--fullscreen')
    }
  }


  var mc = new Hammer(document.querySelector('.header__shtor'));
  var mc1 = new Hammer(document.querySelector('.header__dropdown > svg'));
  var mc2 = new Hammer(document.querySelector('.wrapper1 > svg'));
  var mc3 = new Hammer(document.querySelector('.bottom__forum-dropdown > svg'));
  var mc4 = new Hammer(document.querySelector('.bottom__map-shtor'));
  mc.on('pandown', function () {
    document.querySelector('.header__shtor').classList.add('hidden')
    document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
    document.querySelector('.header__dropdown').classList.add('header__dropdown--active1')
  })
  // mc1.get('pan').set({threshold: '100'})
  mc1.on('panup', function () {

    if (document.querySelector('.header__dropdown--active')) {
      setTimeout(() => {
        document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
      }, 200)
    } else {
      setTimeout(() => {
        document.querySelector('.header__dropdown').classList.remove('header__dropdown--active1')
        document.querySelector('.header__dropdown').classList.remove('header__dropdown--active')
        document.querySelector('.header__bottom >svg').classList.remove('hidden')
        console.log(document.querySelector('.header__bottom svg'));
      }, 200)
    }


  })
  mc1.on('pandown', function () {
    document.querySelector('.header__dropdown').classList.add('header__dropdown--active')
  })
  if (window.innerWidth > 992) {
    mc2.on('panup', function () {
      document.querySelector('.bottom__map-shtor').classList.add('hidden')
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
        setTimeout(() => {
          document.querySelector('.bottom__backg').classList.add('bottom__backg--alt')

        }, 100)

      } else {

      }
    })
    mc3.on('pandown', function () {
      document.querySelector('.bottom__map-shtor').classList.remove('hidden')
      document.querySelector('.bottom__forum-content ').classList.remove('bottom__forum-content--index')
      document.querySelector('.bottom__forum .wrapper1 > img ').classList.remove('index')
      // document.querySelector('.bottom > img').classList.remove('vis')
      console.log(document.querySelector('.bottom__forum-dropdown--index'));
      if (window.innerWidth > 501) {
        document.querySelector('.bottom__backg').classList.remove('bottom__backg--alt')

      } else {

        document.querySelector('.bottom').classList.remove('bottom--bottom')

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
  }
  mc4.on('panup', function () {
    document.querySelector('.bottom').classList.add('bottom--top')
  })
  mc4.on('pandown', function () {
    document.querySelector('.bottom').classList.remove('bottom--top')
  })

  if (window.innerWidth < 992) {
    document.querySelector('.vizit__card-bubble').addEventListener('click', () => {
      document.querySelector('.vizit__card-popup').classList.toggle('vizit__card-popup--active')
    })
    document.querySelector('.vizit__card-contact').addEventListener('click', () => {
      document.querySelector('.vizit__card-contactPopup').classList.toggle('vizit__card-contactPopup--active')
    })
  }
});