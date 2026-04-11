// URLから ?id=xxx を取得
const params = new URLSearchParams(location.search);
const id = params.get("id");

// キャラデータ（ここ増やすだけ）
const characters = {
  ULTRAMAN_ZERO: {
    name: "ウルトラマンゼロ",
    worksPerformed: "大怪獣バトル ウルトラ銀河伝説 THE MOVIE",
    height: "49m",
    weight: "35,000t",
    introduction: "M78星雲・光の国出身のウルトラヒーロー。\nウルトラセブンを父に持ち、ウルトラマンレオ・アストラ兄弟に師事している。\n頭部の宇宙ブーメラン・ゼロスラッガーや父譲りの光線技、レオに鍛えられた格闘技で戦う。\n盟友、グレンファイヤー・ミラーナイト・ジャンボット・ジャンナインらと「ウルティメイトフォースゼロ」というチームを結成している。"
  },
  ULTRAMAN_ZERO_CLOAK: {
    name: "ウルトラマンゼロ (ウルトラゼロマント)",
    worksPerformed: "大怪獣バトル ウルトラ銀河伝説 THE MOVIE",
    height: "49m",
    weight: "35,000t",
    introduction: "ウルトラマンゼロが、師匠のウルトラマンレオから授かった「ウルトラゼロマント」を纏った姿。\n様々な宇宙を越える任務が多いことから他より危険な戦いに臨むことが多いゼロにとって、防具の役割を果たしている。\n全力を出す際はウルティメイトブレスレットに収納されている。"
  },
  ULTRAMAN_TIGA_MULTI: {
    name: "ウルトラマンティガ マルチタイプ",
    worksPerformed: "ウルトラマンティガ",
    height: "53m",
    weight: "44,000t",
    introduction: "3000万年の時を経て復活した超古代の光の巨人で、地球平和連合「TPC」の特捜チーム「GUTS」のマドカ・ダイゴ隊員が変身する。\nタイプチェンジ能力を持ち、マルチタイプはパワーとスピードのバランスに優れている。\nまた、必殺技の「ゼペリオン光線」をはじめ多彩な光線技を撃つことが可能。"
  },
  ULTRAMAN_TARO: {
    name: "ウルトラマンタロウ",
    worksPerformed: "ウルトラマンタロウ",
    height: "53m",
    weight: "55,000t",
    introduction: "M78星雲・光の国出身。\nウルトラの父とウルトラの母の実子であると同時に、ウルトラ兄弟6番目の弟でもある。宇宙科学警備隊「ZAT」隊員の東 光太郎がウルトラバッジで変身する。\nウルトラ兄弟の中でも特にポテンシャルが高く、「ストリウム光線」や「ウルトラダイナマイト」といった強力な必殺技を持つ。\n光の国へ帰還した後は「宇宙警備隊」の筆頭教官となり、ウルトラマンメビウスを鍛え上げた。"
  },
  JUGGLUS_JUGGLER: {
    name: "ジャグラス ジャグラー",
    worksPerformed: "ウルトラマンオーブ",
    height: "1.95～49m",
    weight: "100Kg～47,000t",
    introduction: "ウルトラマンオーブことクレナイ ガイのライバル。\nかつては光の戦士を目指して彼と競い合っていたが、いつしか闇に囚われ、ガイを敵視するようになっていった。\n長きにわたりガイのいるところに現れ、執拗に付け狙った末、地球で決戦を挑んだ。\n戦闘時はその姿を「魔人態」へと変える。また、闇のエネルギーを得ることで巨大化も可能。 武器は「蛇心剣」と呼ばれる妖刀。この剣から、 闇の力の必殺斬撃「新月斬液」を放つ。"
  },
  ZETTON: {
    name: "ゼットン",
    worksPerformed: "ウルトラマン",
    height: "60m",
    weight: "30,000t",
    introduction: "宇宙一の強さを誇るといわれる宇宙恐竜。\n武器は顔面からの火球、光波バリヤー、腕からの 波状光線。防御力、光線技、パワーなど全ての面 でウルトラマンを陵駕する実力を持つ。\nウルトラマンとの戦いでは、その攻撃を全く受け付けず、逆に圧倒的なパワーでカラータイマーを破壊し、ウルトラマンを倒した。"
  },
  ULTRAMAN_OMEGA_VALGENESS: {
    name: "ウルトラマンオメガ ヴァルジェネスアーマー",
    worksPerformed: "ウルトラマンオメガ",
    height: "58m",
    weight: "58,000t",
    introduction: "ウルトラマンオメガが、メテオカイジュウ ヴァルジェネスが変形した槍斧「ヴァルジェネスハルバード」と「ヴァルジェネスアーマー」を装着した姿。\nヴァルジェネスと同じく、火・水・風・土のエレメントの力を用いて戦う。強力な形態ではあるが、消耗が激しく長時間の変身はできない。\n必殺技は4つのエレメントの力をヴァルジェネスハルバードにまとわせて放つ「ヴァルジェネスハルバードクアドランズ」。"
  },
  ULTRAMAN_MEBIUS_BB: {
    name: "ウルトラマンメビウス バーニングブレイブ",
    worksPerformed: "ウルトラマンメビウス",
    height: "49m",
    weight: "36,000t",
    introduction: "ウルトラマンメビウスが、CREW GUYSの仲間たちとの友情をさらに深めたことで、秘めた力を覚醒させた姿。\n別名「炎の勇者」とも呼ばれており、胸に刻まれたファイヤーシンボルは人間とウルトラヒーローの絆を表している。\n体内の強力な炎のエネルギーを駆使して、GUYSの仲間とともにインペライザーや暗黒四天王といった強敵たちを倒していった。\n必殺技は、「胸のファイヤーシンボルから放つ超高熱の火球「メビュームバースト」。"
  },
  ULTRAMAN_TREGEAR: {
    name: "ウルトラマントレギア",
    worksPerformed: "ウルトラマンR/B",
    height: "50m",
    weight: "37,000t",
    introduction: "常に策謀を巡らせ、暗躍する悪のウルトラマン。 かつてはM78星雲・光の国出身で宇宙科学技術局 に在籍。そして、ウルトラマンタロウの親友でもあった。¥nウルトラマンベリアルの存在や、科学技術局の上司 であるウルトラマンヒカリが闇に堕ちたことを知り、正義という概念に疑念を持つようになる。¥nやがて光の国を出た後、光と闇は同じであることを証明するため、かつての親友の息子・ウルトラマンタイガに魔の手を伸ばす。¥n最大の武器は、他者の心の隙を突く甘言と、手段を選ばぬ陰湿さ。戦闘能力も高く、幾度もトライスクワッドを窮地に追い込んだ。"
  }
};

// 表示処理
if (characters[id]) {
  document.getElementById("name").textContent = characters[id].name;
  document.getElementById("worksPerformed").textContent = characters[id].worksPerformed;
  document.getElementById("height").textContent = characters[id].height;
  document.getElementById("weight").textContent = characters[id].weight;
  document.getElementById("introduction").textContent = characters[id].introduction;
} else {
  document.getElementById("name").textContent = "キャラが見つかりません";
}