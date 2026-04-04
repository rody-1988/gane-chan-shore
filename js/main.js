(function () {
  const FORTUNES = [
    {
      title: "大吉",
      message: "今日は自分を特別扱いして。\nとっておきの一服を。☕️",
      weight: 3,
    },
    {
      title: "大吉",
      message:
        "深呼吸をひとつ。\n今のあなたは、それだけで十分素晴らしいんだよ。☀︎",
      weight: 3,
    },
    {
      title: "中吉",
      message:
        "直感を信じてみて。\nふと思いついたことが、幸運の扉を開くカギになるよ。✨",
      weight: 5,
    },
    {
      title: "小吉",
      message: "今日は『NO』と言ってもいい日。\n自分の心地よさを最優先に。🌿",
      weight: 5,
    },
    {
      title: "吉",
      message:
        "小さな変化を楽しもう。\nいつもと違う道を通るだけで発見があるよ。🚶‍♂️",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "今の悩みは、大きな幸せに変わるための準備運動。\n焦らなくて大丈夫。🌱",
      weight: 5,
    },
    {
      title: "大吉",
      message:
        "鏡を見てニッコリしてみて。\nその笑顔が、今日一番のラッキーアイテム！😊",
      weight: 3,
    },
    {
      title: "小吉",
      message:
        "完璧じゃなくていい。\n60点くらいの自分を『よくやった！』と褒めよう。👏",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "深い緑色が今日の守護色。\n落ち着いた気持ちで過ごせば、運気が安定するよ。🌲",
      weight: 5,
    },
    {
      title: "吉",
      message: "懐かしい友人に連絡してみる？\n心温まるニュースが舞い込む予感。📞",
      weight: 8,
    },
    {
      title: "大吉",
      message:
        "今日は『受け取り上手』になろう。\n褒め言葉は遠慮せず『ありがとう』で。💎",
      weight: 3,
    },
    {
      title: "末吉",
      message:
        "空を見上げてみて。\n広い世界を感じることで、悩みもふっと軽くなるはず。☁️",
      weight: 10,
    },
    {
      title: "中吉",
      message:
        "自分に小さなプレゼントを。\n欲しかったお菓子、お気に入りの入浴剤。🎁",
      weight: 5,
    },
    {
      title: "吉",
      message: "今は力を蓄えるとき。\nゆっくり休むことが明日の魔法になる。🌙",
      weight: 8,
    },
    {
      title: "小吉",
      message:
        "あなたの言葉には力がある。\n今日は自分にも他人にも、優しい言葉を選んで。🗣️",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "整理整頓がツキを呼ぶよ。\nデスクの一角を片付けるだけで心にゆとりが。🧹",
      weight: 5,
    },
    {
      title: "末吉",
      message:
        "失敗は、新しい道を見つけるためのヒント。\n次はもっとうまくいくから大丈夫。💪",
      weight: 10,
    },
    {
      title: "大吉",
      message:
        "太陽の光を浴びてみて。\n朝焼けのエネルギーが、運気を底上げしてくれる。🌅",
      weight: 3,
    },
    {
      title: "吉",
      message:
        "『なんとかなる』が今日の合言葉。\n肩の力を抜けば、運勢は回り出す。🎡",
      weight: 10,
    },
    {
      title: "大吉",
      message:
        "あなたは一人じゃない。\n僕が、そして占いの魔法が、いつでも味方しているよ。☀︎",
      weight: 3,
    },
    // --- 追加の20個（日常を彩るメッセージ） ---
    {
      title: "大吉",
      message: "好きな音楽を大音量で聴いてみて。\n心が洗われる瞬間が来るよ。🎧",
      weight: 3,
    },
    {
      title: "中吉",
      message:
        "今日は『お疲れ様』を自分に10回言ってみよう。\n魔法のように体が軽くなるよ。✨",
      weight: 5,
    },
    {
      title: "小吉",
      message:
        "スマホを置いて5分だけぼーっとしよう。\n脳の余裕が幸運を呼び込むよ。📴",
      weight: 8,
    },
    {
      title: "吉",
      message:
        "新しい文房具を使うと仕事運UP。\nお気に入りのペンで明日を描こう。🖊️",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "旬のフルーツを食べてみて。\n大地のエネルギーがあなたを内側から輝かせるよ。🍎",
      weight: 5,
    },
    {
      title: "小吉",
      message:
        "靴をピカピカに磨こう。\n素敵な場所へ連れて行ってくれる準備は万端！👞",
      weight: 8,
    },
    {
      title: "吉",
      message:
        "本屋さんに立ち寄ってみて。\n今のあなたに必要な言葉がタイトルに隠れているかも。📚",
      weight: 8,
    },
    {
      title: "末吉",
      message: "水の音を楽しもう。\nあなたの心のモヤモヤを流してくれる。☔️",
      weight: 10,
    },
    {
      title: "中吉",
      message: "火を見つめてみて。\n揺れる炎があなたの不安を癒やしてくれる。🕯️",
      weight: 5,
    },
    {
      title: "大吉",
      message:
        "やりたいことを紙に書き出そう。\n書いた瞬間から、実現へのカウントダウンが始まる！📝",
      weight: 3,
    },
    {
      title: "吉",
      message:
        "今日は『寄り道』が吉。\n偶然見つけたカフェが、あなたの新しい居場所になるかも。☕️",
      weight: 8,
    },
    {
      title: "小吉",
      message:
        "動物の動画で癒やされよう。\n純粋なエネルギーに触れることで運気が回復。🐾",
      weight: 8,
    },
    {
      title: "中吉",
      message:
        "懐かしい香りに包まれて。\n思い出があなたに今のヒントをくれるはず。🌸",
      weight: 5,
    },
    {
      title: "末吉",
      message:
        "お風呂にゆっくり浸かろう。\n水に流せない想いも、湯船が溶かしてくれる。🛁",
      weight: 10,
    },
    {
      title: "吉",
      message:
        "『ありがとう』を多めに言ってみよう。\n感謝の連鎖が、思わぬプレゼントを連れてくる。🎁",
      weight: 8,
    },
    {
      title: "大吉",
      message:
        "自分を信じる強さを持って。\n今のあなたなら、どんな壁も扉に変えられる。🚪",
      weight: 3,
    },
    {
      title: "中吉",
      message:
        "星空を眺めてみて。\n宇宙の広さに比べれば、今の悩みはちっぽけなスパイス。🌃",
      weight: 5,
    },
    {
      title: "小吉",
      message:
        "背筋を伸ばして歩こう。\n視線が上がるだけで、入ってくる情報の質が変わるよ。🏃‍♂️",
      weight: 8,
    },
    {
      title: "吉",
      message:
        "花を一輪飾ってみて。\n植物の生命力が、部屋の空気をポジティブに変える。🌼",
      weight: 8,
    },
    {
      title: "大吉",
      message:
        "今日出会う人はみんなあなたの味方。\nオープンハートで接してみて。🤝",
      weight: 3,
    },

    // --- ✨ 超激レア：ガネ吉（出現率激低） ✨ ---
    {
      title: "ガネ吉",
      message:
        "おめでとう！\n奇跡の『ガネ吉』を引きました！☕️✨\nこの画面をスクショして公式LINEに送ると\n【一回特別な占い】をプレゼントするよ！",
      weight: 0.1, // 他が3〜10の中、圧倒的に出にくい設定
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

  // --- 修正ポイント：要素の取得 ---
  // ID（result-card）で取得しているので基本は動きますが、
  // アニメーション用にクラス操作を加えるのが確実です。
  const card = document.getElementById("result-card");
  const glow = document.getElementById("result-glow");
  const titleEl = document.getElementById("result-title");
  const messageEl = document.getElementById("result-message");
  const btn = document.getElementById("draw-btn");

  btn.addEventListener("click", () => {
    // 1. クリック時の演出（少し凹ませる）
    card.style.transform = "scale(0.95)";
    card.style.transition = "transform 0.15s ease";

    setTimeout(() => {
      // 2. 運勢を決定
      const picked = pickWeighted(FORTUNES);

      // 3. 内容を書き換え
      titleEl.textContent = picked.title;
      messageEl.textContent = picked.message;

      // 4. 背景の光（glow）を運勢に合わせて調整
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
