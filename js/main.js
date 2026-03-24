(function () {
  const FORTUNES = [
    {
      title: "大吉",
      message:
        "今日は自分を特別扱いして。とっておきの一服を。☕️",
      weight: 3,
    },
    {
      title: "大吉",
      message:
        "深呼吸をひとつ。今のあなたは、それだけで十分素晴らしいんだよ。☀︎",
      weight: 3,
    },
    {
      title: "中吉",
      message:
        "直感を信じてみて。ふと思いついたことが、幸運の扉を開くカギになるよ。✨",
      weight: 5,
    },
    {
      title: "小吉",
      message: "今日は『NO』と言ってもいい日。自分の心地よさを最優先に。🌿",
      weight: 5,
    },
    {
      title: "吉",
      message:
        "小さな変化を楽しもう。いつもと違う道を通るだけで発見があるよ。🚶‍♂️",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "今の悩みは、大きな幸せに変わるための準備運動。焦らなくて大丈夫。🌱",
      weight: 5,
    },
    {
      title: "大吉",
      message:
        "鏡を見てニッコリしてみて。その笑顔が、今日一番のラッキーアイテム！😊",
      weight: 3,
    },
    {
      title: "小吉",
      message:
        "完璧じゃなくていい。60点くらいの自分を『よくやった！』と褒めよう。👏",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "深い緑色が今日の守護色。落ち着いた気持ちで過ごせば、運気が安定するよ。🌲",
      weight: 5,
    },
    {
      title: "吉",
      message:
        "懐かしい友人に連絡してみる？心温まるニュースが舞い込む予感。📞",
      weight: 8,
    },
    {
      title: "大吉",
      message:
        "今日は『受け取り上手』になろう。褒め言葉は遠慮せず『ありがとう』で。💎",
      weight: 3,
    },
    {
      title: "末吉",
      message:
        "空を見上げてみて。広い世界を感じることで、悩みもふっと軽くなるはず。☁️",
      weight: 10,
    },
    {
      title: "中吉",
      message:
        "自分に小さなプレゼントを。欲しかったお菓子、お気に入りの入浴剤。🎁",
      weight: 5,
    },
    {
      title: "吉",
      message: "今は力を蓄えるとき。ゆっくり休むことが明日の魔法になる。🌙",
      weight: 8,
    },
    {
      title: "小吉",
      message:
        "あなたの言葉には力がある。今日は自分にも他人にも、優しい言葉を選んで。🗣️",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "整理整頓がツキを呼ぶよ。デスクの一角を片付けるだけで心にゆとりが。🧹",
      weight: 5,
    },
    {
      title: "末吉",
      message:
        "失敗は、新しい道を見つけるためのヒント。次はもっとうまくいくから大丈夫。💪",
      weight: 10,
    },
    {
      title: "大吉",
      message:
        "太陽の光を浴びてみて。朝焼けのエネルギーが、運気を底上げしてくれる。🌅",
      weight: 3,
    },
    {
      title: "吉",
      message:
        "『なんとかなる』が今日の合言葉。肩の力を抜けば、運勢は回り出す。🎡",
      weight: 10,
    },
    {
      title: "大吉",
      message:
        "あなたは一人じゃない。僕が、そして占いの魔法が、いつでも味方しているよ。☀︎",
      weight: 3,
    },
  ];

  function pickWeighted(list) {
    const total = list.reduce((s, item) => s + item.weight, 0);
    let r = Math.random() * total;
    for (const item of list) {
      r -= item.weight;
      if (r <= 0) return item;
    }
    return list[list.length - 1];
  }

  const card = document.getElementById("result-card");
  const glow = document.getElementById("result-glow");
  const titleEl = document.getElementById("result-title");
  const messageEl = document.getElementById("result-message");
  const btn = document.getElementById("draw-btn");

  btn.addEventListener("click", () => {
    card.style.transform = "scale(0.95)";

    setTimeout(() => {
      const picked = pickWeighted(FORTUNES);
      titleEl.textContent = picked.title;
      messageEl.textContent = picked.message;

      glow.style.background = `radial-gradient(circle, ${picked.title === "大吉" ? "#ffd194" : "#e2d1c3"} 0%, transparent 70%)`;

      card.style.transform = "scale(1)";
    }, 150);
  });
})();
