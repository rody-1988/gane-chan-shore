(function () {
  const section = document.querySelector(".reviews");
  if (!section) {
    return;
  }

  const wrapper = section.querySelector(".reviews__wrapper");
  const status = section.querySelector(".reviews__status");
  const empty = section.querySelector(".reviews__empty");

  if (window.Swiper) {
    section.__swiperInstance = new window.Swiper(
      section.querySelector(".reviews__swiper"),
      {
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
          el: section.querySelector(".reviews__pagination"),
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
      },
    );
  }

  status.hidden = true;
  empty.hidden = true;
})();
