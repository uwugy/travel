const list = document.querySelector(".list"),
  items = document.querySelectorAll(".swiper-slide");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    console.log(targetId);

    switch (targetId) {
      case "all":
        getitems("swiper-slide");
        break;
      case "France":
        getitems(targetId);
        break;
      case "USA":
        getitems(targetId);
        break;
      case "Italy":
        getitems(targetId);
        break;
      case "China":
        getitems(targetId);
        break;
      case "Japan":
        getitems(targetId);
        break;
    }

    swiper1.slideTo(0); // Переключение на первый слайд после фильтрации
    swiper1.update(); // Обновляем Swiper после изменения видимости слайдов
  });
}

filter();

function getitems(className) {
  let visibleSlides = 0;

  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
      visibleSlides++;
    } else {
      item.style.display = "none";
    }
  });

  // Обновляем параметры Swiper для корректной работы с новым количеством видимых слайдов
  swiper1.params.slidesPerView = Math.min(visibleSlides, 4); // Ограничиваем количество видимых слайдов до 4 или меньше
  swiper1.update(); // Обновляем Swiper после изменения количества видимых слайдов
}

// Инициализация Swiper
var swiper1 = new Swiper(".myFirstSwiper", {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper1.changeDirection(getDirection());
    },
    reachEnd: function () {
      if (swiper1.slides.length > swiper1.params.slidesPerView) {
        setTimeout(() => swiper1.slideTo(0), 2000); // Переключение на первый слайд после окончания видимых слайдов
      }
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  return windowWidth <= 760 ? "vertical" : "horizontal";
}

// Инициализация второго Swiper
var swiper2 = new Swiper(".mySecondSwiper", {
  direction: "vertical",
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".second-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".second-next",
    prevEl: ".second-prev",
  },
});
