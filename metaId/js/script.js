document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.bottom__forum ').addEventListener('swiped-up', function(e) {
    document.querySelector('.bottom__forum-dropdown').classList.add('bottom__forum-dropdown--active')

    if(window.innerWidth > 769){
      document.querySelector('.info').classList.add('info--index')
    } else{
      document.querySelector('.info').classList.add('info--opacity')
    }
    document.querySelector('.bottom__forum > svg').classList.add('active')
  });
  document.querySelector('.bottom__forum-dropdown > svg ').addEventListener('swiped-down', function(e) {
    document.querySelector('.bottom__forum-dropdown').classList.remove('bottom__forum-dropdown--active')
    if(window.innerWidth > 769){
      document.querySelector('.info').classList.remove('info--index')
    } else{
      document.querySelector('.info').classList.remove('info--opacity')
    }
    document.querySelector('.bottom__forum > svg').classList.remove('active')
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
    document.querySelector('.bottom__forum ').classList.toggle('bottom__forum--index')
    document.querySelector('.bottom__forum-content ').classList.toggle('bottom__forum-content--index')
    document.querySelector('.bottom__forum .wrapper1 > img ').classList.toggle('index')
    setTimeout(() => {
      document.querySelector('.bottom__forum-dropdown').classList.toggle('bottom__forum-dropdown--index')
    }, 100)
    if(window.innerWidth > 769){
      document.querySelector('.info').classList.toggle('info--index')
    } else{
      document.querySelector('.info').classList.toggle('info--opacity')
    }
    document.querySelector('.bottom__forum .wrapper1 > svg').classList.toggle('active')
    if(window.innerWidth > 501){
      if(document.querySelector('.bottom > img').src.includes("307163755.png") ){
        setTimeout(() => {
          document.querySelector('.bottom > img').src = "./assets/img/Vector 452.png" 
        }, 100)
      } else{
        document.querySelector('.bottom > img').src = "./assets/img/Group 307163755.png"
      }
    } else{
      if(document.querySelector('.bottom > img').src.includes("307163759.png") ){
        setTimeout(() => {
          document.querySelector('.bottom > img').src = "./assets/img/Vector 451.png" 
        }, 100)
      } else{
        document.querySelector('.bottom > img').src = "./assets/img/Group 307163759.png"
      }
    }
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