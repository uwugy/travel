var swiper1 = new Swiper(".myFirstSwiper", {
  slidesPerView: 2, // По умолчанию показывать 4 слайда
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4, // Когда ширина экрана <= 480px, показывать 1 слайд
    },
    900: {
      slidesPerView: 3, // Когда ширина экрана <= 480px, показывать 1 слайд
    },
  },
  on: {
    resize: function () {
      swiper1.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  return window.innerWidth <= 760 ? "vertical" : "horizontal";
}
// Initialize the new Swiper
