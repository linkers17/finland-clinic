new WOW().init();

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

   $('.price-js, .callback-btn, .services__btn').on('click', showModal);

   close.on('click', function() {
      
      modal.removeClass('modal_active');
      $('#modal-form input, #modal-form textarea').val('');

   });

   $('.services-block').on('click', function(e) {

      var item = e.target.closest('.services-block__item');

      if (!item) return;

      showModal(e);

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

            required: "Выберите время"

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
               console.log(data);

               $('.success-js').fadeIn(2000);
               $('.message-js').text('Ваша заявка успешно отправлена.');
               $('#visit-form input, #visit-form select').val('');
               $('.success-js').fadeOut(5000);

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         });

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

            required: "Выберите время"

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
               console.log(data);

               $('.success-js').fadeIn(2000);
               $('.message-js').text('Ваша заявка успешно отправлена.');
               $('#footer-form input, #footer-form select').val('');
               $('.success-js').fadeOut(5000);

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         });

      }

   });

   $('#contacts-form').validate({

      rules: {

         username: {

            required: true,
            minlength: 2,
            maxlength: 15

         },

         userphone: {

            required: true

         },

        usermessage: {

            required: true,
            minlength: 15

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

         usermessage: {

            required: "Введите Ваш вопрос",
            minlength: jQuery.validator.format("Минимум {0} символов")

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
               console.log(data);

               $('.success-js').fadeIn(2000);
               $('.message-js').text('Благодарим Вас за вопрос.');
               $('#contacts-form input, #contacts-form textarea').val('');
               $('.success-js').fadeOut(5000);

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         });

      }

   });

   $('#modal-form').validate({

      rules: {

         username: {

            required: true,
            minlength: 2,
            maxlength: 15

         },

         userphone: {

            required: true

         },

        usermessage: {

            required: true,
            minlength: 15

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

         usermessage: {

            required: "Введите Ваш вопрос",
            minlength: jQuery.validator.format("Минимум {0} символов")

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
               console.log(data);

               $('.success-js').fadeIn(2000);
               $('.message-js').text('Благодарим Вас за вопрос.');
               $('#modal-form input, #modal-form textarea').val('');
               modal.removeClass('modal_active');
               $('.success-js').fadeOut(5000);

            },
            error: function(jqXHR, textStatus) {

               console.log(jqXHR + ': ' + textStatus);

            }

         });

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
            breakpoint: 1200,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }

         },
         {
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

         },

         767: {

            slidesPerView: 1,
            spaceBetween: 0

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