(function () {
  function pickWeighted(list) {
    const total = list.reduce((s, item) => s + item.weight, 0);
    let r = Math.random() * total;
    for (const item of list) {
      r -= item.weight;
      if (r <= 0) return item;
    }
    return list[list.length - 1];
  }

  // --- 修正ポイント：要素の取得 ---
  // ID（result-card）で取得しているので基本は動きますが、
  // アニメーション用にクラス操作を加えるのが確実です。
  const card = document.getElementById("result-card");
  const glow = document.getElementById("result-glow");
  const titleEl = document.getElementById("result-title");
  const messageEl = document.getElementById("result-message");
  const btn = document.getElementById("draw-btn");

  btn.addEventListener("click", () => {
    // クリック時の演出（少し凹ませる）
    card.style.transform = "scale(0.98)";
    card.style.transition = "transform 0.1s";

    setTimeout(() => {
      // 1. 運勢を決定
      const picked = pickWeighted(FORTUNES);

      // 2. LUCKY_MAPの「キー（名前）」だけを配列にして、そこからランダムに選ぶ
      const colorNames = Object.keys(LUCKY_MAP); // ["サンライズゴールド", "スカイブルー", ...] となる
      const colorName =
        colorNames[Math.floor(Math.random() * colorNames.length)];

      // 3. 選ばれた名前を使って、LUCKY_MAPから「色コード」を引く
      const colorCode = LUCKY_MAP[colorName];

      const number =
        LUCKY_NUMBERS[Math.floor(Math.random() * LUCKY_NUMBERS.length)];

      // 4. 内容を書き換え
      titleEl.textContent = picked.title;
      messageEl.textContent = picked.message;

      // 5. ラッキーカラーとナンバーも表示
      document.getElementById("result-color").textContent = colorName;
      document.getElementById("result-item").textContent = number;

      //ドットに色をつける
      const dot = document.querySelector(".color-dot");
      if (dot) {
        dot.style.backgroundColor = colorCode;
        dot.style.border = `1px solid rgba(0, 0, 0, 0.9)`; // ドットの周りに薄い枠をつける
        dot.style.boxShadow = `0 0 8px ${colorCode}`; // ドット色の光をつける
      }
      //4.エリアを表示
      document.getElementById("result-details").style.display = "block";
      document.getElementById("share-area").style.display = "block";

      //5.シェアURLを動的に生成
      const siteUrl = window.location.href; // 共有したいサイトのURL

      const shareText = `今日の運勢は【${picked.title}】！
      『${picked.message}』
      カラー：${colorName} / ナンバー：${number} 
      #GaneChanShore 今日もいいことあるゾ！
      ${siteUrl}`;
      const encodedText = encodeURIComponent(shareText);

      //各ボタンのシェアURLを設定

      // Threads
      const btnThreads = document.getElementById("share-threads");
      if (btnThreads) {
        btnThreads.onclick = () => {
          window.open(
            `https://www.threads.net/intent/post?text=${encodedText}`,
          );
          gtag("event", "click_share_threads", { event_category: "share" });
        };
      }

      // X (Twitter)
      const btnX = document.getElementById("share-x");
      if (btnX) {
        btnX.onclick = () => {
          // Xは文章の中にURLが含まれていれば、自動でリンクにしてくれます
          window.open(`https://twitter.com/intent/tweet?text=${encodedText}`);
          gtag("event", "click_share_x", { event_category: "share" });
        };
      }

      // LINE
      const btnLine = document.getElementById("share-line");
      if (btnLine) {
        btnLine.onclick = () => {
          window.open(
            `https://social-plugins.line.me/lineit/share?url=&text=${encodedText}`,
          );
          gtag("event", "click_share_line", { event_category: "share" });
        };
      }

      // 背景の光（glow）を運勢に合わせて調整
      // 大吉なら暖色系、それ以外は落ち着いた色
      const glowColor = picked.title === "大吉" ? "#ffa494" : "#e2d1c3";
      glow.style.background = `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`;
      glow.style.opacity = "0.4"; // 光を少し強める

      // もし「ガネ吉」なら、上の設定を特別な色で「上書き」する！
      if (picked.title === "ガネ吉") {
        glow.style.background =
          "radial-gradient(circle, #fffb93 0%, #ff82f5 100%)";
        glow.style.opacity = "0.8"; // ガネ吉は光を強めに
        console.log("🌟 ガネ吉的中！おめでとう！ 🌟");
      }
      // 5. カードを元の大きさに戻し、ふわっと浮かせる
      card.style.transform = "scale(1)";
    }, 150);
  });
})();
