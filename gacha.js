let isDrawing = false;

/* 排出率テーブル（画像は後で差し替え可） */
const gachaRates = {
  Character: [
    { name: "ノーバ", rate: 8.333, rarity: 3, img: "ノーバ.png" },
    { name: "ババルウ", rate: 8.333, rarity: 3, img: "ババルウ.png" },
    { name: "ネロンガ", rate: 8.333, rarity: 3, img: "ネロンガ.png" },
    { name: "ガラオン", rate: 6.250, rarity: 3, img: "ガラオン.png" },
    { name: "ツインテール", rate: 6.250, rarity: 3, img: "ツインテール.png" },
    { name: "グドン", rate: 6.250, rarity: 3, img: "グドン.png" },
    { name: "タガヌラー", rate: 6.250, rarity: 3, img: "タガヌラー.png" },
    { name: "デマーガ", rate: 3.989, rarity: 3, img: "デマーガ.png" },
    { name: "シャゴン", rate: 3.989, rarity: 3, img: "シャゴン.png" },
    { name: "ウインダム", rate: 3.989, rarity: 3, img: "ウインダム.png" },
    { name: "ミクラス", rate: 3.989, rarity: 3, img: "ミクラス.png" },
    { name: "ベムスター", rate: 3.989, rarity: 3, img: "ベムスター.png" },
    { name: "アギラ", rate: 3.989, rarity: 3, img: "アギラ.png" },
    { name: "モンスアーガー", rate: 3.989, rarity: 3, img: "モンスアーガー.png" },
    { name: "オーブ", rate: 2.286, rarity: 3, img: "オーブ.png" },
    { name: "デスドラゴ", rate: 2.286, rarity: 3, img: "デスドラゴ.png" },
    { name: "ウルトラマン", rate: 2.286, rarity: 3, img: "ウルトラマン.png" },
    { name: "マグマ星人", rate: 2.286, rarity: 3, img: "マグマ星人.png" },
    { name: "ネクサスAF", rate: 2.286, rarity: 3, img: "ネクサス.png" },
    { name: "ザムシャー", rate: 2.286, rarity: 3, img: "ザムシャー.png" },
    { name: "セブン", rate: 2.286, rarity: 3, img: "セブン.png" },
    { name: "スラン星人", rate: 0.625, rarity: 3, img: "スラン星人.png" },
    { name: "マックス", rate: 0.625, rarity: 3, img: "マックス.png" },
    { name: "ダダ", rate: 0.625, rarity: 3, img: "ダダ.png" },
    { name: "バードン", rate: 0.625, rarity: 3, img: "バードン.png" },
    { name: "アストラ", rate: 0.625, rarity: 3, img: "アストラ.png" },
    { name: "ホロボロス", rate: 0.625, rarity: 3, img: "ホロボロス.png" },
    { name: "ブルAQ", rate: 0.625, rarity: 3, img: "ブル.png" },
    { name: "ロッソFL", rate: 0.625, rarity: 3, img: "ロッソ.png" },
    { name: "エックス", rate: 0.067, rarity: 3, img: "エックス.png" },
    { name: "バルタン星人", rate: 0.067, rarity: 3, img: "バルタン星人.png" },
    { name: "レオ", rate: 0.067, rarity: 3, img: "レオ.png" },
    { name: "ジャック", rate: 0.067, rarity: 3, img: "ジャック.png" },
    { name: "レイキュバス", rate: 0.067, rarity: 3, img: "レイキュバス.png" },
    { name: "ガンQ", rate: 0.067, rarity: 3, img: "ガンQ.png" },
    { name: "アグル", rate: 0.067, rarity: 3, img: "アグル.png" },
    { name: "ガイア", rate: 0.067, rarity: 3, img: "ガイアV2.png" },
    { name: "セブンガー", rate: 0.067, rarity: 3, img: "セブンガー.png" },
    { name: "ゼットORG", rate: 0.067, rarity: 3, img: "ゼット.png" },
    { name: "デッカーFL", rate: 0.067, rarity: 3, img: "デッカーフラッシュ.png" },
    { name: "ベロクロン", rate: 0.067, rarity: 3, img: "ベロクロン.png" },
    { name: "ダイナFL", rate: 0.017, rarity: 4, img: "ダイナフラッシュ.png" },
    { name: "メルバ", rate: 0.017, rarity: 4, img: "メルバ.png" },
    { name: "ゴルザ", rate: 0.017, rarity: 4, img: "ゴルザ.png" },
    { name: "ゴモラ", rate: 0.017, rarity: 4, img: "ゴモラ.png" },
    { name: "メビウス", rate: 0.017, rarity: 4, img: "メビウス.png" },
    { name: "ゾフィー", rate: 0.017, rarity: 4, img: "ゾフィー.png" },
    { name: "エース", rate: 0.017, rarity: 4, img: "エース.png" },
    { name: "テラフェイザー", rate: 0.017, rarity: 4, img: "テラフェイザー.png" },
    { name: "アースガロン", rate: 0.017, rarity: 4, img: "アースガロン.png" },
    { name: "トリガーMUL", rate: 0.017, rarity: 4, img: "トリガーマルチ.png" },
    { name: "アーク", rate: 0.017, rarity: 4, img: "アーク.png" },
    { name: "ギンガ", rate: 0.017, rarity: 4, img: "ギンガ.png" },
    { name: "ブレイザー", rate: 0.017, rarity: 4, img: "ブレイザー.png" },
    { name: "エレキング", rate: 0.017, rarity: 4, img: "エレキング.png" },
    { name: "オメガ", rate: 0.017, rarity: 4, img: "オメガ.png" },
    { name: "ティガMUL", rate: 0.006, rarity: 5, img: "ティガマルチ.png" },
    { name: "ゼロ", rate: 0.006, rarity: 5, img: "ゼロ.png" },
    { name: "ゼットン", rate: 0.006, rarity: 5, img: "ゼットン.png" },
    { name: "タロウ", rate: 0.006, rarity: 5, img: "タロウ.png" },
    { name: "ジャグラー", rate: 0.006, rarity: 5, img: "ジャグラスジャグラー.png" }
  ],
  Core: [
    { name: "RロケットN", rate: 8.333, rarity: 3, img: "silver1.png" },
    { name: "PナパームN", rate: 8.333, rarity: 3, img: "silver1.png" },
    { name: "YアタックN", rate: 8.333, rarity: 3, img: "silver1.png" },
    { name: "PアタックHN", rate: 6.250, rarity: 3, img: "silver2.png" },
    { name: "PブーメランHN", rate: 6.250, rarity: 3, img: "silver2.png" },
    { name: "YサークルHN", rate: 6.250, rarity: 3, img: "silver2.png" },
    { name: "GアタックHN", rate: 6.250, rarity: 3, img: "silver2.png" },
    { name: "GナパームR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "YナパームR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "BロケットR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "BブーメランR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "PアタックR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "YブーメランR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "GアタックR", rate: 4.369, rarity: 3, img: "silver3.png" },
    { name: "YロケットHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "RアタックHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "BサークルHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "BブーメランHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "RブーメランHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "GナパームHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "PアタックHR", rate: 2.000, rarity: 3, img: "silver4.png" },
    { name: "PサークルSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "YナパームSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "BロケットSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "GクリティカルSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "BサークルSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "RナパームSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "GブーメランSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "RクリティカルSR", rate: 0.563, rarity: 3, img: "gold1.png" },
    { name: "BクリティカルSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "BロケットSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "GサークルSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "GブーメランSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "PロケットSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "RアタックSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "PブーメランSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "YロケットSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "YサークルSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "BナパームSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "YクリティカルSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "BブーメランSSR", rate: 0.058, rarity: 3, img: "gold2.png" },
    { name: "RクリティカルLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "YナパームLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "RロケットLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "GロケットLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "PサークルLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "PクリティカルLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "YロケットLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "YアタックLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "GナパームLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "RサークルLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "BアタックLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "GブーメランLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "PロケットLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "RアタックLR", rate: 0.014, rarity: 4, img: "gold3.png" },
    { name: "YクリティカルUR", rate: 0.004, rarity: 5, img: "gold4.png" },
    { name: "PクリティカルUR", rate: 0.004, rarity: 5, img: "gold4.png" },
    { name: "RナパームUR", rate: 0.004, rarity: 5, img: "gold4.png" },
    { name: "GサークルUR", rate: 0.004, rarity: 5, img: "gold4.png" },
    { name: "BブーメランUR", rate: 0.004, rarity: 5, img: "gold4.png" }
  ],
  wish: [
    { name: "サークルカプセル", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ロケットカプセル", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ナパームカプセル", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "リカバリーカプセル", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ブーメランカプセル", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クロックブースター", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "トランスギア", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "研究レポート", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆◆】", rate: 4.259, rarity: 3, img: "Capsule.png" },
    { name: "イベントコイン×1", rate: 3.000, rarity: 3, img: "Capsule.png" },
    { name: "ミラノス鉱石", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ミラノスディスク", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "アームカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ピッケルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "Hドリルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "Vドリルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【★★】", rate: 0.370, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【★★】", rate: 0.370, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【★★】", rate: 0.370, rarity: 3, img: "Capsule.png" },
    { name: "願いの印", rate: 0.370, rarity: 3, img: "Capsule.png" },
    { name: "惑星の記憶", rate: 0.370, rarity: 3, img: "Capsule.png" },
    { name: "イベントコイン×10", rate: 0.500, rarity: 3, img: "Capsule.png" },
    { name: "ウルトラマンメビウスB", rate: 0.100, rarity: 4, img: "Capsule.png" },
    { name: "ウルトラマンメビウスB", rate: 0.100, rarity: 4, img: "Capsule.png" },
    { name: "ウルトラマンメビウスBB", rate: 0.051, rarity: 5, img: "Capsule.png" }
  ],
  Reminiscence: [
    { name: "サークルカプセル", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ロケットカプセル", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ナパームカプセル", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "リカバリーカプセル", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ブーメランカプセル", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クロックブースター", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "トランスギア", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "研究レポート", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆◆】", rate: 4.265, rarity: 3, img: "Capsule.png" },
    { name: "イベントコイン×1", rate: 3.000, rarity: 3, img: "Capsule.png" },
    { name: "ミラノス鉱石", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ミラノスディスク", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "アームカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ピッケルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "Hドリルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "Vドリルカプセル", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【◆◆◆◆】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【★】", rate: 1.833, rarity: 3, img: "Capsule.png" },
    { name: "クォーツ【★★】", rate: 0.280, rarity: 3, img: "Capsule.png" },
    { name: "クリスタル【★★】", rate: 0.280, rarity: 3, img: "Capsule.png" },
    { name: "ジェム【★★】", rate: 0.280, rarity: 3, img: "Capsule.png" },
    { name: "願いの印", rate: 0.280, rarity: 3, img: "Capsule.png" },
    { name: "惑星の記憶", rate: 0.280, rarity: 3, img: "Capsule.png" },
    { name: "イベントコイン×10", rate: 0.500, rarity: 3, img: "Capsule.png" },
    { name: "ゲネガーグ", rate: 0.500, rarity: 3, img: "Capsule.png" },
    { name: "ウルトラマンZ", rate: 0.099, rarity: 4, img: "Capsule.png" }
  ]
};

function drawOnce(table) {
  const rand = Math.random() * 100;
  let total = 0;
  for (const item of table) {
    total += item.rate;
    if (rand < total) return item;
  }
  return table[0];
}

/* 40連（1枠ずつ） */
function draw40() {
  if (isDrawing) return;

  isDrawing = true;
  document.getElementById("retryButton").style.display = "none";

  const level = document.getElementById("gachaLevel").value;
  const table = gachaRates[level];
  const results = document.getElementById("results");

  results.innerHTML = "";

  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const item = drawOnce(table);

      const div = document.createElement("div");
      div.className = `gacha-item rarity-${item.rarity}`;

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.onerror = () => img.remove();
      div.appendChild(img);

      const p = document.createElement("p");
      p.textContent = item.name;
      div.appendChild(p);

      if (item.rarity === 5) {
        div.classList.add("rare-hit");
      }

      results.appendChild(div);

      if (i === 39) {
        isDrawing = false;
        document.getElementById("retryButton").style.display = "inline-block";
      }
    }, i * 150);
  }
}

function retryGacha() {
  draw40();
}
