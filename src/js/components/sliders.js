const swiperportfolioSlider = new Swiper('.portfolio-section__slider', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },
});

const swiperrelatedSlider = new Swiper('.related__slider', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },
});

const testimonialsSlider = new Swiper('.testimonials__slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },
});

var projectSlider = new Swiper(".hero-project__nav", {
  spaceBetween: 20,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
});
var projectSliderNav = new Swiper(".hero-project__slider", {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: ".project-btn__next",
    prevEl: ".project-btn__prev",
  },
  thumbs: {
    swiper: projectSlider,
  },
});