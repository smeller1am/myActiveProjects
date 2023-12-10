document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('swiped', function(e) {
    console.log(e.target); // element that was swiped
    console.log(e.detail); // see event data below
    console.log(e.detail.dir); // swipe direction
  });
  $(".bottom__chat").mCustomScrollbar({
    axis : 'y'
  });
  if(window.innerWidth < 993){
    $(".news__content").mCustomScrollbar({
      axis : 'y'
    });
    $(".news__content").mCustomScrollbar({
      axis : 'y'
    });
  } else {
    $(".news__right").mCustomScrollbar({
      axis : 'y'
    });
    $(".news__box").mCustomScrollbar({
      axis : 'y'
    });
  }
  $('.fancy__close').on('click', ()=> {
    $.fancybox.close();
  })
  document.querySelector('.bottom__forum ').addEventListener('click', () => {
    document.querySelector('.bottom__forum-dropdown').classList.toggle('bottom__forum-dropdown--active')
    document.querySelector('.info').classList.toggle('info--index')
  })
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.info__comment').classList.add('info__comment--hidden')
  })

    document.querySelector('.header__burger').addEventListener('click', () => {
      document.querySelector('.menu').classList.toggle('menu--active')
    })
  if(window.innerWidth < 1480){
    document.querySelector('#headerBack').src = './assets/img/Group 307163758.png'
    document.querySelector('#commentImg').src = './assets/img/Rectangle 614020.png'
  }
  if(window.innerWidth < 500){
    document.querySelector('.bottom > img').src = './assets/img/Group 307163759.png'
  }
  if(window.innerWidth < 768){
    document.querySelector('.bottom__forum-dropdown > img').src = './assets/img/Vector 45.png'
  }
});