var points = [
    ['', '55.756214', '37.638683'],
];

var myMap;
var oldCenter;
var myCollection;
var arrayBalloons = [];
ymaps.ready(function () {
    // Коллекция гео-точек, добавленных на карту
    myCollection = new ymaps.GeoObjectCollection();
    if(document.getElementById("map")){
        
    // Помещаем карту в элемент DIV с id, равным «map»
    myMap = new ymaps.Map("map", {
        center: [55.756214, 37.638683], // Начальные значения центра карты
        zoom: 18,         // Начальное значение зума карты
        controls: ['zoomControl'],
    });
    if($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('drag');
    }
    // Перебираем в цикле точки, которые надо добавить на карту
    for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark([
          points[i][1], points[i][2]
        ], {
            hintContent: points[i][0],
            balloonContent: points[i][0]
        },
         {
        	// Необходимо указать данный тип макета.
        	iconLayout: 'default#image',
        	// Своё изображение иконки метки.
        	iconImageHref: './images/location.svg',
            hideIconOnBalloonOpen:false,
        	iconImageSize: [40, 40],

        	// iconImageOffset: [-120, -140],

        });
        myMap.behaviors.disable('scrollZoom'); 

        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);

    }
    // Добавляем точки на карту
    myMap.geoObjects.add( myCollection ); 

    }
    
});



function setCenter(x, y) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
    });
};

function setCenterPos(x, y, i) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
        oldCenter = myMap.getCenter();
    });
    $("body, html").animate(function () {
        scrollTo: $(".map-footer").offset().top
    });
    // arrayBalloons[i].balloon.open();
    return false;
};

function overCenter(x, y) {
    ymaps.ready(function () {
        oldCenter = myMap.getCenter();
        setCenter(x, y);
    });
};
function oldPos() {
    ymaps.ready(function () {
        myMap.setCenter(oldCenter);
    });
};