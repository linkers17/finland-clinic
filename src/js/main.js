$(function() {

   // Меню
   function burgerMenu(selector) {

      var menu = $(selector);
      var btn = menu.find('.main-nav__btn');
      var links = menu.find('.main-nav__link');
      var overlay = menu.find('.main-nav__overlay');

      btn.on('click', function(e) {

         e.preventDefault();

         toggleMenu();

      });

      links.on('click', toggleMenu);

      overlay.on('click', toggleMenu);

      function toggleMenu() {

         menu.toggleClass('main-nav_active');

      }

   }

   burgerMenu('.main-nav');

   // Маска ввода для телефона

   $('.phone').mask('8 (999) 999 99 99');

   // Модальное окно
   var modal = $('#modal-js');
   var close = $('#close-js');

   function showModal(e) {

      e.preventDefault();

      modal.addClass('modal_active');

   }

   $('.price-js, .callback__btn, .services__btn').on('click', showModal);

   close.on('click', function() {
      
      modal.removeClass('modal_active');

   });

   $('.services-block').on('click', function(e) {

      var item = e.target.closest('.services-block__item');

      if (!item) return;

      showModal(e);

   });

   modal.on('click', function() {
      
      modal.removeClass('modal_active');

   });

   // -- end --

   // Валидация форм

   $('#visit-form').validate({

      rules: {

         username: {

            required: true,
            minlength: 2,
            maxlength: 15

         },

         userphone: {

            required: true

         },

         time: {

            required: true

         }

      },

      messages: {

         username: {

            required: "Введите Ваше имя",
            minlength: jQuery.validator.format("Минимум {0} символа"),
            maxlength: jQuery.validator.format("Максимум {0} символов")

         },

         userphone: {

            required: "Введите номер телефона"

         },

         time: {

            required: "Выберите удобное время"

         }

      },

      errorElement: "div",
      errorClass: "invalid",

      submitHandler: function(form) {

         $.ajax({

            url: 'send.php',
            type: 'POST',
            data: $(form).serialize(),
            success: function(data) {

               $('.success-js').fadeIn(2000, function() {
                  
                  $(this).css('display', 'flex');

               });
               $('.message-js').text('Ваша заявка успешно отправлена.');
               $('#visit-form input, #visit-form select').val('');
               $('.success-js').fadeOut(5000, function() {
                  
                  $(this).css('display', 'none');

               });

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         })

      }

   });

   $('#footer-form').validate({

      rules: {

         username: {

            required: true,
            minlength: 2,
            maxlength: 15

         },

         userphone: {

            required: true

         },

         time: {

            required: true

         }

      },

      messages: {

         username: {

            required: "Введите Ваше имя",
            minlength: jQuery.validator.format("Минимум {0} символа"),
            maxlength: jQuery.validator.format("Максимум {0} символов")

         },

         userphone: {

            required: "Введите номер телефона"

         },

         time: {

            required: "Выберите удобное время"

         }

      },

      errorElement: "div",
      errorClass: "invalid",

      submitHandler: function(form) {

         $.ajax({

            url: 'send.php',
            type: 'POST',
            data: $(form).serialize(),
            success: function(data) {

               $('.success-js').fadeIn(2000, function() {
                  
                  $(this).css('display', 'flex');

               });
               $('.message-js').text('Ваша заявка успешно отправлена.');
               $('#footer-form input, #footer-form select').val('');
               $('.success-js').fadeOut(5000, function() {
                  
                  $(this).css('display', 'none');

               });

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         })

      }

   });

   // Подключение slick-слайдера

   $('.slider-reviews').slick({

      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      appendDots: $('.slider-reviews__dots'),
      prevArrow: $('.slider-reviews__arrow-prev'),
      nextArrow: $('.slider-reviews__arrow-next'),

      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            },

            breakpoint: 991,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]

   });

   // Подключение Swiper слайдера

   var sliderServices = new Swiper('.slider-services', {

      spaceBetween: 45,
      slidesPerView: 4,
      loop: true,
      navigation: {
         nextEl: '.services-block__btn'
      },

      breakpoints: {

         1239: {

            spaceBetween: 50

         },

         1199: {

            slidesPerView: 2,
            spaceBetween: 93

         },

         991: {

            spaceBetween: 70

         }

      }

   });

   // Плавный переход по якорным ссылкам
   $('.main-nav__list').on('click', 'a', function(e) {

      e.preventDefault();

      var id = $(this).attr('href');
      var top = $(id).offset().top;

      $('html, body').animate({scrollTop: top}, 1500);

   });

   /*function yamaps() {

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

   yamaps();*/

});