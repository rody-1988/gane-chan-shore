(function () {
  const section = document.querySelector(".reviews");
  if (!section) {
    return;
  }

  const quotes = section.querySelectorAll(".reviews__quote");
  const swiperElement = section.querySelector(".reviews__swiper");
  const status = section.querySelector(".reviews__status");
  const empty = section.querySelector(".reviews__empty");
  const prefersReducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  const collapseExpandedQuotes = () => {
    section.querySelectorAll(".reviews__quote.is-expanded").forEach((quote) => {
      quote.classList.remove("is-expanded");

      const toggleButton = quote.nextElementSibling;
      if (
        toggleButton &&
        toggleButton.classList.contains("reviews__more") &&
        !toggleButton.classList.contains("reviews__more--placeholder")
      ) {
        toggleButton.textContent = "続きを読む +";
        toggleButton.setAttribute("aria-expanded", "false");
      }
    });
  };

  const setupReviewToggles = () => {
    quotes.forEach((quote, index) => {
      quote.classList.add("reviews__quote--clamp");

      const toggleButton = document.createElement("button");
      toggleButton.type = "button";
      toggleButton.className = "reviews__more";
      toggleButton.textContent = "続きを読む +";

      // 長文のみトグルを表示する
      if (quote.scrollHeight <= quote.clientHeight + 1) {
        quote.classList.remove("reviews__quote--clamp");
        toggleButton.classList.add("reviews__more--placeholder");
        toggleButton.setAttribute("aria-hidden", "true");
        toggleButton.tabIndex = -1;
        quote.insertAdjacentElement("afterend", toggleButton);
        return;
      }

      const quoteId = `review-quote-${index + 1}`;
      quote.id = quoteId;
      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.setAttribute("aria-controls", quoteId);

      toggleButton.addEventListener("click", () => {
        const isExpanded = quote.classList.toggle("is-expanded");
        toggleButton.textContent = isExpanded ? "閉じる -" : "続きを読む +";
        toggleButton.setAttribute("aria-expanded", String(isExpanded));
      });

      quote.insertAdjacentElement("afterend", toggleButton);
    });
  };

  setupReviewToggles();

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

    section.__swiperInstance = new window.Swiper(swiperElement, swiperOptions);
    section.__swiperInstance.on(
      "slideChangeTransitionStart",
      collapseExpandedQuotes,
    );
  }

  if (status) {
    status.hidden = true;
  }

  if (empty) {
    empty.hidden = true;
  }
})();
