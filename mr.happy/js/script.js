document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2021
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

  const swiper = new Swiper('.reviews__swiper', {
    centeredSlides: true,
    spaceBetween: 25,
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
});