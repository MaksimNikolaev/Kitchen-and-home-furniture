const swiper = new Swiper('.swiper-cover', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-cover__btn-next',
    prevEl: '.swiper-cover__btn-prev',
  },
});

const swiperPrice = new Swiper('.swiper-price', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-price__btn-next',
    prevEl: '.swiper-price__btn-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is <= 480px
    490: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  slidesPerGroup: 4,
  // And if we need scrollbar
});

const swiperNews = new Swiper('.swiper-news', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-news__btn-next',
    prevEl: '.swiper-news__btn-prev',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is <= 480px
    490: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is <= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  slidesPerGroup: 4,
  // And if we need scrollbar
});
