

const gamburger = document.querySelector('.gamburger'),
    menu = document.querySelector('.menu'),   
    close = document.querySelector('.menu__close'); //устанавливаем переменные
    



gamburger.addEventListener('click', () => {
    menu.classList.add('active');  //добавляем класс активности
});

close.addEventListener('click', () => {
    menu.classList.remove('active');  // удалаяем класс активности
});


// %-line
const counters = document.querySelectorAll('.skills__progress-counter'),
    lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach ( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


//добавление класса активности
  

const portfolio = document.querySelector('.portfolio2__item');
var button = document.getElementsByClassName("open-btn");
var actives = document.getElementsByClassName('active');
for (i = 0; button.length > i; i++) {
  button[i].onclick = function() {
    var currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("active");

    if (currentActive !== this)
      this.classList.add("active");
  };
};





$(document).ready(function(){
    $('.contacts__form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        text: {
          required: true,
          maxlength: 1000
        },
        policy: {
          required: true
        }
      },
      messages: {
        name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        },
        text: "Пожалуйста, введите текст сообщения",
        policy: "Чтобы продолжить, установите флажок"
      }
    });

    $('form').submit(function(e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('form').trigger('reset');
      });
      return false;
  });

});






  



  
   


