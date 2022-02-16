const swiperportfolioSlider = new Swiper('.portfolio-section__slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.portfolio__next',
    prevEl: '.portfolio__prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

const swiperrelatedSlider = new Swiper('.related__slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  }
});

const testimonialsSlider = new Swiper('.testimonials__slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

var projectSlider = new Swiper(".hero-project__nav", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    576: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 10,
    }
  }
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

const historySlider = document.querySelector('.history-slider');

if (historySlider) {
  const workSlider = new Swiper(historySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".history__next",
      prevEl: ".history__prev",
    },
  });

  workSlider.on('slideChange', function () {
    console.log(workSlider.realIndex);

    historyBtns.forEach(el => {
      el.classList.remove('history-nav__btn--active');
    });

    document.querySelector(`.history-nav__btn[data-index="${workSlider.realIndex}"]`).classList.add('history-nav__btn--active');
  });

  const historyBtns = document.querySelectorAll('.history-nav__btn');

  historyBtns.forEach((el, idx) => {
    el.setAttribute('data-index', idx);

    el.addEventListener('click', (e) => {
      const index = e.currentTarget.dataset.index;

      historyBtns.forEach(el => {
        el.classList.remove('history-nav__btn--active');
      });

      e.currentTarget.classList.add('history-nav__btn--active');

      workSlider.slideTo(index);
    });
  });
}

const heroSliderSpeed = 1500;

const bodyStyles = window.getComputedStyle(document.body);
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set

const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__next',
    prevEl: '.hero__prev',
  },
  speed: heroSliderSpeed,
  // autoplay: {
  //   delay: 1000,
  // },
  pagination: {
    el: '.hero__pag',
    type: 'bullets',
    clickable: true
  },
  on: {
      init: function () {
        const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

        paginationBullets.forEach(el => {
          el.innerHTML = `<span class="hero__bar"></span>`;
        });
      },
    },
});