
if(document.querySelector(".contacts__right")){
    let ofice = [
        ['', "55.799183", "37.604771"],
    ];

    let myMap;
    let myCollection;

    ymaps.ready(function () {
        myCollection = new ymaps.GeoObjectCollection();
        if(document.getElementById("map")){
        // Помещаем карту в элемент DIV с id, равным «map»
        myMap = new ymaps.Map("map", {
            center: [55.799183, 37.604771], // Начальные значения центра карты
            zoom: 15,         // Начальное значение зума карты
            // controls: ['zoomControl'],
        });
        if($(window).width() < 1024) {
            myMap.behaviors.disable('scrollZoom');
            // myMap.behaviors.disable('drag');
        }
        // Перебираем в цикле точки, которые надо добавить на карту
        for (i = 0; i < ofice.length; i++) {
            var myPlacemark = new ymaps.Placemark([
                ofice[i][1], ofice[i][2]
            ], {
                hintContent: ofice[i][0],
                balloonContent: ofice[i][0]
            },
                {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                // iconImageHref: '/wp-content/themes/plan_D/img/icon/placeholder.png',
                hideIconOnBalloonOpen:false,
                iconImageSize: [34, 34],
    
                // iconImageOffset: [-120, -140],
    
            });
            myMap.behaviors.disable('scrollZoom'); 
    
            myCollection.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark);
    
        }
        // Добавляем точки на карту
        myMap.geoObjects.add( myCollection ); 
        }
    })
}
if(document.querySelector("#contentBox__leftMap")){
    let ofice = [
        ['', "59.970231", "30.315446"],
    ];

    let myMap;
    let myCollection;

    ymaps.ready(function () {
        myCollection = new ymaps.GeoObjectCollection();
        if(document.getElementById("contentBox__leftMap")){
        // Помещаем карту в элемент DIV с id, равным «map»
        myMap = new ymaps.Map("contentBox__leftMap", {
            center: [59.970231, 30.315446], // Начальные значения центра карты
            zoom: 15,         // Начальное значение зума карты
            // controls: ['zoomControl'],
        });
        if($(window).width() < 1024) {
            myMap.behaviors.disable('scrollZoom');
            // myMap.behaviors.disable('drag');
        }
        // Перебираем в цикле точки, которые надо добавить на карту
        for (i = 0; i < ofice.length; i++) {
            var myPlacemark = new ymaps.Placemark([
                ofice[i][1], ofice[i][2]
            ], {
                hintContent: ofice[i][0],
                balloonContent: ofice[i][0]
            },
                {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                // iconImageHref: '/wp-content/themes/plan_D/img/icon/placeholder.png',
                hideIconOnBalloonOpen:false,
                iconImageSize: [34, 34],
    
                // iconImageOffset: [-120, -140],
    
            });
            myMap.behaviors.disable('scrollZoom'); 
    
            myCollection.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark);
    
        }
        // Добавляем точки на карту
        myMap.geoObjects.add( myCollection ); 
        }
    })
}
if(document.querySelector("#contentBox__rightMap")){
    let ofice = [
        ['', "54.404116", "48.780451"],
    ];

    let myMap;
    let myCollection;

    ymaps.ready(function () {
        myCollection = new ymaps.GeoObjectCollection();
        if(document.getElementById("contentBox__rightMap")){
        // Помещаем карту в элемент DIV с id, равным «map»
        myMap = new ymaps.Map("contentBox__rightMap", {
            center: [54.404116, 48.780451], // Начальные значения центра карты
            zoom: 15,         // Начальное значение зума карты
            // controls: ['zoomControl'],
        });
        if($(window).width() < 1024) {
            myMap.behaviors.disable('scrollZoom');
            // myMap.behaviors.disable('drag');
        }
        // Перебираем в цикле точки, которые надо добавить на карту
        for (i = 0; i < ofice.length; i++) {
            var myPlacemark = new ymaps.Placemark([
                ofice[i][1], ofice[i][2]
            ], {
                hintContent: ofice[i][0],
                balloonContent: ofice[i][0]
            },
                {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                // iconImageHref: '/wp-content/themes/plan_D/img/icon/placeholder.png',
                hideIconOnBalloonOpen:false,
                iconImageSize: [34, 34],
    
                // iconImageOffset: [-120, -140],
    
            });
            myMap.behaviors.disable('scrollZoom'); 
    
            myCollection.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark);
    
        }
        // Добавляем точки на карту
        myMap.geoObjects.add( myCollection ); 
        }
    })
}