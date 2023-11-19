document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.sertificate__swiper', {
        slidesPerView: 1,
        // spaceBetween: 20,
        // centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
          },
    
      });
      if (document.querySelector('#tel')) {
        $('#tel').mask('+7 (000) 000-00-00');
      }
      $('.burger').on('click', () => {
        $('.menu').addClass('menu--active')
        // $('html').addClass('hidden')
        $('.overlay').addClass('overlay--active')
        setTimeout(()=> {
            $('.overlay').addClass('overlay--opacity')
        }, 100)
      })
      $('.menu__back').on('click', () => {
        $('.menu').removeClass('menu--active')
        $('.overlay').removeClass('overlay--active')
        // $('html').removeClass('hidden')
        setTimeout(()=> {
            $('.overlay').removeClass('overlay--opacity')
        }, 100)
      })
      $('.overlay').on('click', () => {
        $('.menu').removeClass('menu--active')
        // $('html').removeClass('hidden')
        $('.overlay').removeClass('overlay--active')
        setTimeout(()=> {
            $('.overlay').removeClass('overlay--opacity')
        }, 100)
      })
      $('.menu__wrapper').on('click', function() {
        $('.menu__wrapper').not(this).next().slideUp()
        $(this).next().slideToggle()
      })
      if(window.innerWidth >= 576) {
        let container = document.querySelector('.container')
        let menu = document.querySelector('.menu')
        const compStyles = window.getComputedStyle(container);
        console.log();
        menu.style.paddingRight = `${Number(compStyles.marginRight.replace('px', '')) + 20}px`
      window.addEventListener('resize', () => {
        let container = document.querySelector('.container')
        let menu = document.querySelector('.menu')
        const compStyles = window.getComputedStyle(container);
        console.log();
        menu.style.paddingRight = `${Number(compStyles.marginRight.replace('px', '')) + 20}px`
      })
      }
      if (document.querySelector('#map')) {
        ymaps.ready(function () {
          var map = new ymaps.Map("map", {
            center: [59.911597, 30.267431],
            zoom: 14,
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
            .add(new ymaps.Placemark([59.911597, 30.267431], {
              balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
            }));
        });
      }
      if(document.querySelector('.calculator')){
        let conc = document.querySelector('#conc')
        let ob = document.querySelector('#ob')
        let check = document.querySelector('#check')
        let clear = document.querySelector('#clear')
        let final = document.querySelector('#final')
        check.addEventListener('click', () => {
          x = ob.value/100 + conc.value
          if(x < 1){
            final.innerHTML = 1  
          } else if ( x >= 10){
            final.innerHTML = Math.round(x/10)
          } 
          else{

            final.innerHTML = Math.round(x)
          }
        })
        clear.addEventListener('click', ()=>{
          conc.value = 0
          ob.value = 0
        })
      }
      if(document.querySelector('.feedback')){
        let tel = document.querySelector('#tel')
        let name = document.querySelector('#name')
        let mail = document.querySelector('#email')
        let comm = document.querySelector('#comm')

        const token = '6718640038:AAGt4QyxtynoEPvn3_fD6qk1dWVc5YDUlAk'
        const chatId = '-1002030929335'
        const urlApi = `https://api.telegram.org/bot${token}/sendMessage`
        const submitApplicationForm = async (e) => {
          console.log(e);
          e.preventDefault()
      
          if (tel.value.length < 18) {
            alert('введите корректный номер телефона')
            return
          }
      
          let message = `<b>Заявка на звонок с сайта:</b>\n`
          message += `<b>Имя:</b> ${name.value}\n`
          message += `<b>Телефон:</b> ${tel.value}\n`
          message += `<b>Почта:</b> ${mail.value}\n`
          message += `<b>Комментарий:</b> ${comm.value}\n`
      
          const resp = await axios.post(urlApi, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message,
          })
          message = message.replace(/(<([^>]+)>)/gi, '')
          if (resp.data.ok) {
            $.ajax({
              url: '/send.php',
              type: 'post',
              data: {
                message
              },
              cache: false,
              dataType: 'html',
              success: function (data) {
      
                success.classList.add('success--visible')
                if (success.classList.contains('success--visible')) {
                  setTimeout(() => {
                    success.classList.remove('success--visible')
                  }, 1500)
                }
              },
            })
            alert('Заявка отправлена')
          }
        }
        document.querySelector('.feedback form').addEventListener('submit', function(e) {
          submitApplicationForm(e)
        })
      }
});