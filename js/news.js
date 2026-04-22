(function () {
  const moreBtns = document.querySelectorAll(".js-news-more");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".news__group");
      const items = group.querySelectorAll(".news__item");
      
      // 現在のボタンのテキストで「これから開くのか、閉じるのか」を決める
      const isOpening = btn.textContent.trim() === "Read more...";

      items.forEach((item, index) => {
        // 3件目（index 2）以降が対象
        if (index >= 3) { 
          if (isOpening) {
            // 開くとき：is-hidden を外す
            item.classList.remove("is-hidden");
          } else {
            // 閉じるとき：is-hidden をつける
            item.classList.add("is-hidden");
          }
        }
      });

      // ボタンの文字を切り替え
      btn.textContent = isOpening ? "Close" : "Read more...";
    });
  });
})();