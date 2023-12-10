document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('swiped', function(e) {
    console.log(e.target); // element that was swiped
    console.log(e.detail); // see event data below
    console.log(e.detail.dir); // swipe direction
  });
  $(".bottom__chat").mCustomScrollbar({
    axis : 'y'
  });
  document.querySelector('.bottom__forum-content').addEventListener('click', () => {
    document.querySelector('.bottom__forum-dropdown').classList.toggle('bottom__forum-dropdown--active')
  })
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.info__comment').classList.add('info__comment--hidden')
  })
});