(function () {
  const section = document.querySelector(".reviews");
  if (!section) {
    return;
  }

  const swiperElement = section.querySelector(".reviews__swiper");
  const paginationElement = section.querySelector(".reviews__pagination");
  const status = section.querySelector(".reviews__status");
  const empty = section.querySelector(".reviews__empty");
  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  if (window.Swiper && swiperElement) {
    const swiperOptions = {
      loop: !prefersReducedMotion,
      autoplay: prefersReducedMotion
        ? false
        : {
            delay: 4000,
            disableOnInteraction: false,
          },
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      },
    };

    if (paginationElement) {
      swiperOptions.pagination = {
        el: paginationElement,
        clickable: true,
      };
    }

    section.__swiperInstance = new window.Swiper(swiperElement, swiperOptions);
  }

  if (status) {
    status.hidden = true;
  }

  if (empty) {
    empty.hidden = true;
  }
})();
