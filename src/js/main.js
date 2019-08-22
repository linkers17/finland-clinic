$(function() {

   // Подключение slick-слайдера
/*
   $('.slider-header').slick({

      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: 'slider-header__dots',
      arrows: false,
      fade: true,
      lazyLoad: 'progressive'
      //appendDots: $('.slider-header__dots')

   });*/

   $('.slider-reviews').slick({

      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      appendDots: $('.slider-reviews__dots'),
      prevArrow: $('.slider-reviews__arrow-prev'),
      nextArrow: $('.slider-reviews__arrow-next')

   });

   function yamaps() {

      ymaps.ready(init);
      function init(){ 
         // Создание карты.    
         var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.05006155, 92.96999190],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
         });
      }

   }

   yamaps();

});