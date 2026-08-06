(function () {
  const trackableLinks = document.querySelectorAll("[data-gtag-event]");

  for (const link of trackableLinks) {
    link.addEventListener("click", () => {
      if (typeof window.gtag !== "function") return;

      const eventName = link.getAttribute("data-gtag-event");
      const eventCategory = link.getAttribute("data-gtag-category") || "link";
      if (!eventName) return;

      window.gtag("event", eventName, { event_category: eventCategory });
    });
  }
})();
