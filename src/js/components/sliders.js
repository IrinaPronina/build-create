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
