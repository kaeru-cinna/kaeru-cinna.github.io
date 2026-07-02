// ===== データ =====
const data = [
  {
    stage: "1",
    wave: 1,
    characters: ["デマーガ"],
    gimmicks: [
    ]
  },
  {
    stage: "2",
    wave: 1,
    characters: ["ゴモラ"],
    gimmicks: [
    ]
  },
  {
    stage: "3",
    wave: 2,
    characters: ["シャゴン","シャゴン","シャゴン"],
    gimmicks: [
      { name: "木箱", count: 2 }
    ]
  },
  {
    stage: "4",
    wave: 2,
    characters: ["ツインテール","ツインテール","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "5",
    wave: 3,
    characters: ["ガラオン","グドン","タガヌラー","タガヌラー","タガヌラー"],
    gimmicks: [
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "6",
    wave: 2,
    characters: ["ホロボロス","ダダ"],
    gimmicks: [
      { name: "木箱", count: 42 }
    ]
  },
  {
    stage: "7",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "8",
    wave: 2,
    characters: ["ノーバ","バードン"],
    gimmicks: [
      { name: "木箱", count: 4 },
      { name: "ガラス", count: 4 }
    ]
  },
  {
    stage: "9",
    wave: 2,
    characters: ["エレキング","ベムスター"],
    gimmicks: [
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "10",
    wave: 1,
    characters: ["ゴモラ"],
    gimmicks: [
      { name: "木箱", count: 24 },
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "11",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "12",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "13",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "14",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 14 }
    ]
  },
  {
    stage: "15",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ラフレシア", count: 16 }
    ]
  },
  {
    stage: "16",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ラフレシア", count: 18 }
    ]
  },
  {
    stage: "17",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 20 }
    ]
  },
  {
    stage: "18",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 22 }
    ]
  },
  {
    stage: "19",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ラフレシア", count: 24 }
    ]
  },
  {
    stage: "20",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "ラフレシア", count: 26 }
    ]
  },
  {
    stage: "21",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "22",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "23",
    wave: 2,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "24",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "雪", count: 14 }
    ]
  },
  {
    stage: "25",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 16 }
    ]
  },
  {
    stage: "26",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 18 }
    ]
  },
  {
    stage: "27",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "雪", count: 20 }
    ]
  },
  {
    stage: "28",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "雪", count: 22 }
    ]
  },
  {
    stage: "29",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 24 }
    ]
  },
  {
    stage: "30",
    wave: 1,
    characters: ["レイキュバス"],
    gimmicks: [
      { name: "雪", count: 26 }
    ]
  },
  {
    stage: "31",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "32",
    wave: 2,
    characters: ["スラン星人","ダダ","デマーガ"],
    gimmicks: [
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "33",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "34",
    wave: 2,
    characters: ["ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 14 }
    ]
  },
  {
    stage: "35",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 16 }
    ]
  },
  {
    stage: "36",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "砂利", count: 18 }
    ]
  },
  {
    stage: "37",
    wave: 2,
    characters: ["ダダ","ダダ","デマーガ"],
    gimmicks: [
      { name: "砂利", count: 20 }
    ]
  },
  {
    stage: "38",
    wave: 2,
    characters: ["ダダ","デマーガ","モンスアーガー"],
    gimmicks: [
      { name: "砂利", count: 22 }
    ]
  },
  {
    stage: "39",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "砂利", count: 24 }
    ]
  },
  {
    stage: "40",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "砂利", count: 26 }
    ]
  },
  {
    stage: "41",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "42",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "43",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "44",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 14 }
    ]
  },
  {
    stage: "45",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 16 }
    ]
  },
  {
    stage: "46",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 18 }
    ]
  },
  {
    stage: "47",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 20 }
    ]
  },
  {
    stage: "48",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 22 }
    ]
  },
  {
    stage: "49",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 24 }
    ]
  },
  {
    stage: "50",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "砂岩", count: 26 }
    ]
  },
  {
    stage: "51",
    wave: 1,
    characters: ["ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 4 }
    ]
  },
  {
    stage: "52",
    wave: 2,
    characters: ["シャゴン","シャゴン","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "53",
    wave: 1,
    characters: ["ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 8 }
    ]
  },
  {
    stage: "54",
    wave: 2,
    characters: ["シャゴン","ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "55",
    wave: 2,
    characters: ["ネロンガ","ベムスター","グドン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "56",
    wave: 1,
    characters: ["グドン","ツインテール","ネロンガ"],
    gimmicks: [
      { name: "ガラス", count: 14 }
    ]
  },
  {
    stage: "57",
    wave: 2,
    characters: ["グドン","シャゴン","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 16 }
    ]
  },
  {
    stage: "58",
    wave: 2,
    characters: ["シャゴン","ベムスター","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 18 }
    ]
  },
  {
    stage: "59",
    wave: 1,
    characters: ["グドン","ツインテール","ネロンガ"],
    gimmicks: [
      { name: "ガラス", count: 20 }
    ]
  },
  {
    stage: "60",
    wave: 1,
    characters: ["キングジョー"],
    gimmicks: [
      { name: "ガラス", count: 22 }
    ]
  },
  {
    stage: "61",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 4 }
    ]
  },
  {
    stage: "62",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 6 }
    ]
  },
  {
    stage: "63",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 8 }
    ]
  },
  {
    stage: "64",
    wave: 2,
    characters: ["ダダ","シャゴン","ゴルザ"],
    gimmicks: [
      { name: "木の根", count: 10 }
    ]
  },
  {
    stage: "65",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "66",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 14 }
    ]
  },
  {
    stage: "67",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 16 }
    ]
  },
  {
    stage: "68",
    wave: 2,
    characters: ["ゴルザ","メルバ","ダダ"],
    gimmicks: [
      { name: "木の根", count: 18 }
    ]
  },
  {
    stage: "69",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 20 }
    ]
  },
  {
    stage: "70",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "木の根", count: 22 }
    ]
  },
  {
    stage: "71",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 4 }
    ]
  },
  {
    stage: "72",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷結岩", count: 6 }
    ]
  },
  {
    stage: "73",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 8 }
    ]
  },
  {
    stage: "74",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "75",
    wave: 2,
    characters: ["エレキング","レイキュバス","ババルウ","ゼットン"],
    gimmicks: [
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "76",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 14 }
    ]
  },
  {
    stage: "77",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷結岩", count: 16 }
    ]
  },
  {
    stage: "78",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 18 }
    ]
  },
  {
    stage: "79",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 20 }
    ]
  },
  {
    stage: "80",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "氷結岩", count: 22 }
    ]
  },
  {
    stage: "81",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 4 }
    ]
  },
  {
    stage: "82",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "83",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "84",
    wave: 2,
    characters: ["バルタン星人","ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "85",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "86",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 14 }
    ]
  },
  {
    stage: "87",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 16 }
    ]
  },
  {
    stage: "88",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 18 }
    ]
  },
  {
    stage: "89",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 20 }
    ]
  },
  {
    stage: "90",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "化石岩", count: 22 }
    ]
  },
  {
    stage: "91",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 4 }
    ]
  },
  {
    stage: "92",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "93",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "94",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "95",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "96",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 14 }
    ]
  },
  {
    stage: "97",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 16 }
    ]
  },
  {
    stage: "98",
    wave: 2,
    characters: ["ベロクロン","ベムスター","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 18 }
    ]
  },
  {
    stage: "99",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 20 }
    ]
  },
  {
    stage: "100",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "化石岩", count: 22 }
    ]
  },
  {
    stage: "101",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "ガラス", count: 4 },
      { name: "木箱", count: 4 }
    ]
  },
  {
    stage: "102",
    wave: 2,
    characters: ["ノーバ","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 5 },
      { name: "木箱", count: 5 }
    ]
  },
  {
    stage: "103",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "ガラス", count: 6 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "104",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 7 },
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "105",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 8 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "106",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 9 },
      { name: "木箱", count: 9 }
    ]
  },
  {
    stage: "107",
    wave: 2,
    characters: ["キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 10 },
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "108",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 11 },
      { name: "木箱", count: 11 }
    ]
  },
  {
    stage: "109",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 12 },
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "110",
    wave: 1,
    characters: ["デスフェイサー"],
    gimmicks: [
      { name: "ガラス", count: 18 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "111",
    wave: 1,
    
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 4 },
      { name: "ラフレシア", count: 4 }
    ]
  },
  {
    stage: "112",
    wave: 2,
    characters: ["デマーガ","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 5 },
      { name: "ラフレシア", count: 5 }
    ]
  },
  {
    stage: "113",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 6 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "114",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 7 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "115",
    wave: 2,
    characters: ["ババルウ","タガヌラー","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "116",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 9 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "117",
    wave: 2,
    characters: ["タガヌラー","ババルウ","タガヌラー"],
    gimmicks: [
      { name: "木の根", count: 10 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "118",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "木の根", count: 11 },
      { name: "ラフレシア", count: 11 }
    ]
  },
  {
    stage: "119",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "120",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "木の根", count: 18 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "121",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 4 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "122",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 5 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "123",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "124",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "125",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "126",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷結岩", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "127",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "128",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "129",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷結岩", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "130",
    wave: 1,
    characters: ["ダークルギエル"],
    gimmicks: [
      { name: "氷結岩", count: 18 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "131",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "132",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "133",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "134",
    wave: 2,
    characters: ["ダダ","デマーガ","モンスアーガー"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "135",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "136",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "137",
    wave: 2,
    characters: ["スラン星人","ダダ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "138",
    wave: 2,
    characters: ["ダダ","デマーガ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "139",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "140",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "化石岩", count: 18 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "141",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂岩", count: 4 }
    ]
  },
  {
    stage: "142",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂岩", count: 5 }
    ]
  },
  {
    stage: "143",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "144",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "145",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "146",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "147",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "148",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂岩", count: 11 }
    ]
  },
  {
    stage: "149",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "150",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "化石岩", count: 18 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "151",
    wave: 1,
    characters: ["ギャラクトロン","ガラオン"],
    gimmicks: [
      { name: "銅板", count: 4 }
    ]
  },
  {
    stage: "152",
    wave: 2,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 5 },
      { name: "木箱", count: 1 }
    ]
  },
  {
    stage: "153",
    wave: 1,
    characters: ["ギャラクトロン","ガラオン"],
    gimmicks: [
      { name: "銅板", count: 6 },
      { name: "木箱", count: 2 }
    ]
  },
  {
    stage: "154",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス"],
    gimmicks: [
      { name: "銅板", count: 7 },
      { name: "木箱", count: 3 }
    ]
  },
  {
    stage: "155",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 8 },
      { name: "木箱", count: 4 }
    ]
  },
  {
    stage: "156",
    wave: 1,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 9 },
      { name: "木箱", count: 5 }
    ]
  },
  {
    stage: "157",
    wave: 2,
    characters: ["ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 10 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "158",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス"],
    gimmicks: [
      { name: "銅板", count: 11 },
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "159",
    wave: 1,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "160",
    wave: 1,
    characters: ["キングオブモンス"],
    gimmicks: [
      { name: "銅板", count: 13 },
      { name: "木箱", count: 9 }
    ]
  },
  {
    stage: "161",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 4 }
    ]
  },
  {
    stage: "162",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 5 },
      { name: "ラフレシア", count: 1 }
    ]
  },
  {
    stage: "163",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 6 },
      { name: "ラフレシア", count: 2 }
    ]
  },
  {
    stage: "164",
    wave: 2,
    characters: ["ダダ","シャゴン","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 7 },
      { name: "ラフレシア", count: 3 }
    ]
  },
  {
    stage: "165",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ","シャゴン"],
    gimmicks: [
      { name: "丸太", count: 8 },
      { name: "ラフレシア", count: 4 }
    ]
  },
  {
    stage: "166",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "丸太", count: 9 },
      { name: "ラフレシア", count: 5 }
    ]
  },
  {
    stage: "167",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 10 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "168",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 11 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "169",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "170",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "丸太", count: 13 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "171",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 4 }
    ]
  },
  {
    stage: "172",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 5 },
      { name: "雪", count: 1 }
    ]
  },
  {
    stage: "173",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 6 },
      { name: "雪", count: 2 }
    ]
  },
  {
    stage: "174",
    wave: 2,
    characters: ["ババルウ","エレキング","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 7 },
      { name: "雪", count: 3 }
    ]
  },
  {
    stage: "175",
    wave: 2,
    characters: ["エレキング","レイキュバス","ババルウ","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 8 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "176",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 9 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "177",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 10 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "178",
    wave: 2,
    characters: ["ババルウ","エレキング","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 11 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "179",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "180",
    wave: 1,
    characters: ["タイラント"],
    gimmicks: [
      { name: "氷塊", count: 13 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "181",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "岩", count: 4 }
    ]
  },
  {
    stage: "182",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "岩", count: 5 },
      { name: "砂利", count: 1 }
    ]
  },
  {
    stage: "183",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "岩", count: 6 },
      { name: "砂利", count: 2 }
    ]
  },
  {
    stage: "184",
    wave: 2,
    characters: ["バルタン星人","ダダ","スラン星人"],
    gimmicks: [
      { name: "岩", count: 7 },
      { name: "砂利", count: 3 }
    ]
  },
  {
    stage: "185",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "岩", count: 8 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "186",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩", count: 9 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "187",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "岩", count: 10 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "188",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "岩", count: 11 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "189",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "190",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "岩", count: 13 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "191",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 4 }
    ]
  },
  {
    stage: "192",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 5 },
      { name: "砂岩", count: 1 }
    ]
  },
  {
    stage: "193",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 6 },
      { name: "砂岩", count: 2 }
    ]
  },
  {
    stage: "194",
    wave: 2,
    characters: ["ベロクロン","ベムスター","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 7 },
      { name: "砂岩", count: 3 }
    ]
  },
  {
    stage: "195",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 8 },
      { name: "砂岩", count: 4 }
    ]
  },
  {
    stage: "196",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 9 },
      { name: "砂岩", count: 5 }
    ]
  },
  {
    stage: "197",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 10 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "198",
    wave: 2,
    characters: ["ベロクロン","ベムスター","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 11 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "199",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "200",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "神殿", count: 13 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "201",
    wave: 1,
    characters: ["シャゴン","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 4 },
      { name: "木箱", count: 4 }
    ]
  },
  {
    stage: "202",
    wave: 2,
    characters: ["ツインテール","シャゴン","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 5 },
      { name: "木箱", count: 5 }
    ]
  },
  {
    stage: "203",
    wave: 1,
    characters: ["ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 6 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "204",
    wave: 2,
    characters: ["シャゴン","ベムスター","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 7 },
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "205",
    wave: 2,
    characters: ["ネロンガ","ベムスター","グドン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 8 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "206",
    wave: 1,
    characters: ["グドン","ツインテール","ネロンガ"],
    gimmicks: [
      { name: "ガラス", count: 9 },
      { name: "木箱", count: 9 }
    ]
  },
  {
    stage: "207",
    wave: 2,
    characters: ["シャゴン","シャゴン","ベムスター"],
    gimmicks: [
      { name: "ガラス", count: 10 },
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "208",
    wave: 2,
    characters: ["シャゴン","ベムスター","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 11 },
      { name: "木箱", count: 11 }
    ]
  },
  {
    stage: "209",
    wave: 1,
    characters: ["グドン","ツインテール","ネロンガ"],
    gimmicks: [
      { name: "ガラス", count: 12 },
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "210",
    wave: 1,
    characters: ["ゴモラ"],
    gimmicks: [
      { name: "ガラス", count: 8 },
      { name: "木箱", count: 16 }
    ]
  },
  {
    stage: "211",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 4 },
      { name: "ラフレシア", count: 4 }
    ]
  },
  {
    stage: "212",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 5 },
      { name: "ラフレシア", count: 5 }
    ]
  },
  {
    stage: "213",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 6 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "214",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "木の根", count: 7 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "215",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "216",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 9 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "217",
    wave: 2,
    characters: ["デマーガ","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 10 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "218",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "木の根", count: 11 },
      { name: "ラフレシア", count: 11 }
    ]
  },
  {
    stage: "219",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "220",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "ラフレシア", count: 16 }
    ]
  },
  {
    stage: "221",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 4 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "222",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 5 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "223",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "224",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "225",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "226",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷結岩", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "227",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "228",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "229",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷結岩", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "230",
    wave: 1,
    characters: ["レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 8 },
      { name: "雪", count: 16 }
    ]
  },
  {
    stage: "231",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "232",
    wave: 2,
    characters: ["デマーガ","デマーガ","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "233",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "234",
    wave: 2,
    characters: ["デマーガ","デマーガ","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "235",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "236",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "237",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "238",
    wave: 2,
    characters: ["デマーガ","ダダ","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "239",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "240",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂利", count: 16 }
    ]
  },
  {
    stage: "241",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂岩", count: 4 }
    ]
  },
  {
    stage: "242",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂岩", count: 5 }
    ]
  },
  {
    stage: "243",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "244",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "245",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "246",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "247",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "248",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂岩", count: 11 }
    ]
  },
  {
    stage: "249",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "250",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂岩", count: 16 }
    ]
  },
  {
    stage: "251",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 4 },
      { name: "ガラス", count: 4 }
    ]
  },
  {
    stage: "252",
    wave: 2,
    characters: ["ノーバ","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 5 },
      { name: "ガラス", count: 5 }
    ]
  },
  {
    stage: "253",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 6 },
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "254",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 7 },
      { name: "ガラス", count: 7 }
    ]
  },
  {
    stage: "255",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 8 },
      { name: "ガラス", count: 8 }
    ]
  },
  {
    stage: "256",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 9 },
      { name: "ガラス", count: 9 }
    ]
  },
  {
    stage: "257",
    wave: 2,
    characters: ["キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 10 },
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "258",
    wave: 2,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 11 },
      { name: "ガラス", count: 11 }
    ]
  },
  {
    stage: "259",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 12 },
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "260",
    wave: 1,
    characters: ["キングジョー"],
    gimmicks: [
      { name: "木箱", count: 11 },
      { name: "ガラス", count: 13 }
    ]
  },
  {
    stage: "261",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 4 },
      { name: "木の根", count: 4 }
    ]
  },
  {
    stage: "262",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 5 },
      { name: "木の根", count: 5 }
    ]
  },
  {
    stage: "263",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 6 },
      { name: "木の根", count: 6 }
    ]
  },
  {
    stage: "264",
    wave: 2,
    characters: ["ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 7 },
      { name: "木の根", count: 7 }
    ]
  },
  {
    stage: "265",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 8 },
      { name: "木の根", count: 8 }
    ]
  },
  {
    stage: "266",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 9 },
      { name: "木の根", count: 9 }
    ]
  },
  {
    stage: "267",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 10 },
      { name: "木の根", count: 10 }
    ]
  },
  {
    stage: "268",
    wave: 2,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 11 },
      { name: "木の根", count: 11 }
    ]
  },
  {
    stage: "269",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ラフレシア", count: 12 },
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "270",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "ラフレシア", count: 11 },
      { name: "木の根", count: 13 }
    ]
  },
  {
    stage: "271",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "雪", count: 4 },
      { name: "氷結岩", count: 4 }
    ]
  },
  {
    stage: "272",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 5 },
      { name: "氷結岩", count: 5 }
    ]
  },
  {
    stage: "273",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "雪", count: 6 },
      { name: "氷結岩", count: 6 }
    ]
  },
  {
    stage: "274",
    wave: 2,
    characters: ["ババルウ","エレキング","ゼットン"],
    gimmicks: [
      { name: "雪", count: 7 },
      { name: "氷結岩", count: 7 }
    ]
  },
  {
    stage: "275",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "雪", count: 8 },
      { name: "氷結岩", count: 8 }
    ]
  },
  {
    stage: "276",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 9 },
      { name: "氷結岩", count: 9 }
    ]
  },
  {
    stage: "277",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 10 },
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "278",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "氷結岩", count: 11 }
    ]
  },
  {
    stage: "279",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "280",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "氷結岩", count: 13 }
    ]
  },
  {
    stage: "281",
    wave: 1,
    characters: ["バードン","バルタン星人"],
    gimmicks: [
      { name: "砂利", count: 4 },
      { name: "化石岩", count: 4 }
    ]
  },
  {
    stage: "282",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 5 },
      { name: "化石岩", count: 5 }
    ]
  },
  {
    stage: "283",
    wave: 1,
    characters: ["バードン","バルタン星人"],
    gimmicks: [
      { name: "砂利", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "284",
    wave: 2,
    characters: ["ダダ","バルタン星人","バードン"],
    gimmicks: [
      { name: "砂利", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "285",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 8 },
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "286",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "287",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "288",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "砂利", count: 11 },
      { name: "化石岩", count: 11 }
    ]
  },
  {
    stage: "289",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "290",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "砂利", count: 11 },
      { name: "化石岩", count: 13 }
    ]
  },
  {
    stage: "291",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "砂岩", count: 4 },
      { name: "化石岩", count: 4 }
    ]
  },
  {
    stage: "292",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂岩", count: 5 },
      { name: "化石岩", count: 5 }
    ]
  },
  {
    stage: "293",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "砂岩", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "294",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人"],
    gimmicks: [
      { name: "砂岩", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "295",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂岩", count: 8 },
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "296",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "砂岩", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "297",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂岩", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "298",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人"],
    gimmicks: [
      { name: "砂岩", count: 11 },
      { name: "化石岩", count: 11 }
    ]
  },
  {
    stage: "299",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "砂岩", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "300",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "砂岩", count: 11 },
      { name: "化石岩", count: 13 }
    ]
  },
  {
    stage: "301",
    wave: 1,
    characters: ["ガラオン","ギャラクトロン"],
    gimmicks: [
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "302",
    wave: 2,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "303",
    wave: 1,
    characters: ["ガラオン","ギャラクトロン"],
    gimmicks: [
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "304",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 14 }
    ]
  },
  {
    stage: "305",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 16 }
    ]
  },
  {
    stage: "306",
    wave: 1,
    characters: ["スキューラ","バジリス","ギャラクトロン"],
    gimmicks: [
      { name: "木箱", count: 18 }
    ]
  },
  {
    stage: "307",
    wave: 2,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 20 }
    ]
  },
  {
    stage: "308",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 22 }
    ]
  },
  {
    stage: "309",
    wave: 1,
    characters: ["スキューラ","バジリス","ギャラクトロン"],
    gimmicks: [
      { name: "木箱", count: 24 }
    ]
  },
  {
    stage: "310",
    wave: 1,
    characters: ["デスフェイサー"],
    gimmicks: [
      { name: "木箱", count: 26 }
    ]
  },
  {
    stage: "311",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "312",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "313",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "314",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 14 }
    ]
  },
  {
    stage: "315",
    wave: 2,
    characters: ["ババルウ","タガヌラー","ガンQ","モンスアーガー"],
    gimmicks: [
      { name: "ラフレシア", count: 16 }
    ]
  },
  {
    stage: "316",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ラフレシア", count: 18 }
    ]
  },
  {
    stage: "317",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 20 }
    ]
  },
  {
    stage: "318",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 22 }
    ]
  },
  {
    stage: "319",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ラフレシア", count: 24 }
    ]
  },
  {
    stage: "320",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "ラフレシア", count: 26 }
    ]
  },
  {
    stage: "321",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "322",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "323",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "324",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "雪", count: 14 }
    ]
  },
  {
    stage: "325",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 16 }
    ]
  },
  {
    stage: "326",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 18 }
    ]
  },
  {
    stage: "327",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "雪", count: 20 }
    ]
  },
  {
    stage: "328",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "雪", count: 22 }
    ]
  },
  {
    stage: "329",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "雪", count: 24 }
    ]
  },
  {
    stage: "330",
    wave: 1,
    characters: ["ダークルギエル"],
    gimmicks: [
      { name: "雪", count: 26 }
    ]
  },
  {
    stage: "331",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "332",
    wave: 2,
    characters: ["ダダ","ダダ","デマーガ"],
    gimmicks: [
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "333",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "334",
    wave: 2,
    characters: ["ダダ","ダダ","デマーガ"],
    gimmicks: [
      { name: "砂利", count: 14 }
    ]
  },
  {
    stage: "335",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 16 }
    ]
  },
  {
    stage: "336",
    wave: 1,
    characters: ["ダダ","モンスアーガー","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 18 }
    ]
  },
  {
    stage: "337",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ"],
    gimmicks: [
      { name: "砂利", count: 20 }
    ]
  },
  {
    stage: "338",
    wave: 2,
    characters: ["ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 22 }
    ]
  },
  {
    stage: "339",
    wave: 1,
    characters: ["ダダ","モンスアーガー","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 24 }
    ]
  },
  {
    stage: "340",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "砂利", count: 26 }
    ]
  },
  {
    stage: "341",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "342",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "343",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "344",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 14 }
    ]
  },
  {
    stage: "345",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 16 }
    ]
  },
  {
    stage: "346",
    wave: 1,
    characters: ["ベムスター","ゴモラ","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 18 }
    ]
  },
  {
    stage: "347",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 20 }
    ]
  },
  {
    stage: "348",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂岩", count: 22 }
    ]
  },
  {
    stage: "349",
    wave: 1,
    characters: ["ベムスター","ゴモラ","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 24 }
    ]
  },
  {
    stage: "350",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "砂岩", count: 26 }
    ]
  },
  {
    stage: "351",
    wave: 1,
    characters: ["ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 4 },
      { name: "銅板", count: 4 }
    ]
  },
  {
    stage: "352",
    wave: 2,
    characters: ["グドン","ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 5 },
      { name: "銅板", count: 5 }
    ]
  },
  {
    stage: "353",
    wave: 1,
    characters: ["ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 6 },
      { name: "銅板", count: 6 }
    ]
  },
  {
    stage: "354",
    wave: 2,
    characters: ["ベムスター","シャゴン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 7 },
      { name: "銅板", count: 7 }
    ]
  },
  {
    stage: "355",
    wave: 2,
    characters: ["ネロンガ","ベムスター","グドン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 8 },
      { name: "銅板", count: 8 }
    ]
  },
  {
    stage: "356",
    wave: 1,
    characters: ["ネロンガ","グドン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 9 },
      { name: "銅板", count: 9 }
    ]
  },
  {
    stage: "357",
    wave: 2,
    characters: ["ツインテール","ベムスター","シャゴン"],
    gimmicks: [
      { name: "ガラス", count: 10 },
      { name: "銅板", count: 10 }
    ]
  },
  {
    stage: "358",
    wave: 2,
    characters: ["ベムスター","シャゴン","グドン"],
    gimmicks: [
      { name: "ガラス", count: 11 },
      { name: "銅板", count: 11 }
    ]
  },
  {
    stage: "359",
    wave: 1,
    characters: ["ネロンガ","グドン","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 12 },
      { name: "銅板", count: 12 }
    ]
  },
  {
    stage: "360",
    wave: 1,
    characters: ["キングオブモンス"],
    gimmicks: [
      { name: "ガラス", count: 8 },
      { name: "銅板", count: 16 }
    ]
  },
  {
    stage: "361",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 4 },
      { name: "丸太", count: 4 }
    ]
  },
  {
    stage: "362",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 5 },
      { name: "丸太", count: 5 }
    ]
  },
  {
    stage: "363",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 6 },
      { name: "丸太", count: 6 }
    ]
  },
  {
    stage: "364",
    wave: 2,
    characters: ["ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 7 },
      { name: "丸太", count: 7 }
    ]
  },
  {
    stage: "365",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "丸太", count: 8 }
    ]
  },
  {
    stage: "366",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 9 },
      { name: "丸太", count: 9 }
    ]
  },
  {
    stage: "367",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "木の根", count: 10 },
      { name: "丸太", count: 10 }
    ]
  },
  {
    stage: "368",
    wave: 2,
    characters: ["ゴルザ","メルバ","シャゴン"],
    gimmicks: [
      { name: "木の根", count: 11 },
      { name: "丸太", count: 11 }
    ]
  },
  {
    stage: "369",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "木の根", count: 12 },
      { name: "丸太", count: 12 }
    ]
  },
  {
    stage: "370",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "丸太", count: 16 }
    ]
  },
  {
    stage: "371",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 4 },
      { name: "氷塊", count: 4 }
    ]
  },
  {
    stage: "372",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷結岩", count: 5 },
      { name: "氷塊", count: 5 }
    ]
  },
  {
    stage: "373",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 6 },
      { name: "氷塊", count: 6 }
    ]
  },
  {
    stage: "374",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 7 },
      { name: "氷塊", count: 7 }
    ]
  },
  {
    stage: "375",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 8 },
      { name: "氷塊", count: 8 }
    ]
  },
  {
    stage: "376",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 9 },
      { name: "氷塊", count: 9 }
    ]
  },
  {
    stage: "377",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷結岩", count: 10 },
      { name: "氷塊", count: 10 }
    ]
  },
  {
    stage: "378",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 11 },
      { name: "氷塊", count: 11 }
    ]
  },
  {
    stage: "379",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷結岩", count: 12 },
      { name: "氷塊", count: 12 }
    ]
  },
  {
    stage: "380",
    wave: 1,
    characters: ["タイラント"],
    gimmicks: [
      { name: "氷結岩", count: 8 },
      { name: "氷塊", count: 16 }
    ]
  },
  {
    stage: "381",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "岩", count: 4 }
    ]
  },
  {
    stage: "382",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "岩", count: 5 }
    ]
  },
  {
    stage: "383",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "岩", count: 6 }
    ]
  },
  {
    stage: "384",
    wave: 2,
    characters: ["ダダ","バルタン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "岩", count: 7 }
    ]
  },
  {
    stage: "385",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","バードン"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "岩", count: 8 }
    ]
  },
  {
    stage: "386",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "岩", count: 9 }
    ]
  },
  {
    stage: "387",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "岩", count: 10 }
    ]
  },
  {
    stage: "388",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "岩", count: 11 }
    ]
  },
  {
    stage: "389",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "岩", count: 12 }
    ]
  },
  {
    stage: "390",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "岩", count: 16 }
    ]
  },
  {
    stage: "391",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "神殿", count: 4 }
    ]
  },
  {
    stage: "392",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "神殿", count: 5 }
    ]
  },
  {
    stage: "393",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "神殿", count: 6 }
    ]
  },
  {
    stage: "394",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "神殿", count: 7 }
    ]
  },
  {
    stage: "395",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "神殿", count: 8 }
    ]
  },
  {
    stage: "396",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "神殿", count: 9 }
    ]
  },
  {
    stage: "397",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "神殿", count: 10 }
    ]
  },
  {
    stage: "398",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "神殿", count: 11 }
    ]
  },
  {
    stage: "399",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "神殿", count: 12 }
    ]
  },
  {
    stage: "400",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "神殿", count: 16 }
    ]
  },
  {
    stage: "401",
    wave: 1,
    characters: ["キングジョー","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 8 }
    ]
  },
  {
    stage: "402",
    wave: 2,
    characters: ["ノーバ","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "403",
    wave: 1,
    characters: ["キングジョー","ツインテール"],
    gimmicks: [
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "404",
    wave: 2,
    characters: ["キングジョー","ノーバ","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 14 }
    ]
  },
  {
    stage: "405",
    wave: 2,
    characters: ["キングジョー","ノーバ","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 16 }
    ]
  },
  {
    stage: "406",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 18 }
    ]
  },
  {
    stage: "407",
    wave: 2,
    characters: ["キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 20 }
    ]
  },
  {
    stage: "408",
    wave: 2,
    characters: ["キングジョー","ノーバ","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 22 }
    ]
  },
  {
    stage: "409",
    wave: 1,
    characters: ["ノーバ","キングジョー","ホロボロス"],
    gimmicks: [
      { name: "ガラス", count: 24 }
    ]
  },
  {
    stage: "410",
    wave: 1,
    characters: ["ゴモラ"],
    gimmicks: [
      { name: "ガラス", count: 24 }
    ]
  },
  {
    stage: "411",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 8 }
    ]
  },
  {
    stage: "412",
    wave: 2,
    characters: ["デマーガ","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 10 }
    ]
  },
  {
    stage: "413",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "414",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 14 }
    ]
  },
  {
    stage: "415",
    wave: 2,
    characters: ["ババルウ","タガヌラー","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 16 }
    ]
  },
  {
    stage: "416",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 18 }
    ]
  },
  {
    stage: "417",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 20 }
    ]
  },
  {
    stage: "418",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 22 }
    ]
  },
  {
    stage: "419",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 24 }
    ]
  },
  {
    stage: "420",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "木の根", count: 24 }
    ]
  },
  {
    stage: "421",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 8 }
    ]
  },
  {
    stage: "422",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "423",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "424",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 14 }
    ]
  },
  {
    stage: "425",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 16 }
    ]
  },
  {
    stage: "426",
    wave: 1,
    characters: ["バルタン星人","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 18 }
    ]
  },
  {
    stage: "427",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷結岩", count: 20 }
    ]
  },
  {
    stage: "428",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 22 }
    ]
  },
  {
    stage: "429",
    wave: 1,
    characters: ["バルタン星人","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷結岩", count: 24 }
    ]
  },
  {
    stage: "430",
    wave: 1,
    characters: ["レイキュバス"],
    gimmicks: [
      { name: "氷結岩", count: 24 }
    ]
  },
  {
    stage: "431",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "432",
    wave: 2,
    characters: ["スラン星人","デマーガ","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "433",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "434",
    wave: 2,
    characters: ["デマーガ","ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 14 }
    ]
  },
  {
    stage: "435",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 16 }
    ]
  },
  {
    stage: "436",
    wave: 1,
    characters: ["スラン星人","ダダ","モンスアーガー"],
    gimmicks: [
      { name: "化石岩", count: 18 }
    ]
  },
  {
    stage: "437",
    wave: 2,
    characters: ["ダダ","ダダ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 20 }
    ]
  },
  {
    stage: "438",
    wave: 2,
    characters: ["デマーガ","ダダ","モンスアーガー"],
    gimmicks: [
      { name: "化石岩", count: 22 }
    ]
  },
  {
    stage: "439",
    wave: 1,
    characters: ["スラン星人","ダダ","モンスアーガー"],
    gimmicks: [
      { name: "化石岩", count: 24 }
    ]
  },
  {
    stage: "440",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "化石岩", count: 24 }
    ]
  },
  {
    stage: "441",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "442",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "443",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "444",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 14 }
    ]
  },
  {
    stage: "445",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "化石岩", count: 16 }
    ]
  },
  {
    stage: "446",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 18 }
    ]
  },
  {
    stage: "447",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 20 }
    ]
  },
  {
    stage: "448",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 22 }
    ]
  },
  {
    stage: "449",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "化石岩", count: 24 }
    ]
  },
  {
    stage: "450",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "化石岩", count: 24 }
    ]
  },
  {
    stage: "451",
    wave: 1,
    characters: ["ガラオン","ギャラクトロン"],
    gimmicks: [
      { name: "銅板", count: 4 },
      { name: "木箱", count: 4 }
    ]
  },
  {
    stage: "452",
    wave: 2,
    characters: ["ギャラクトロン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 5 },
      { name: "木箱", count: 5 }
    ]
  },
  {
    stage: "453",
    wave: 1,
    characters: ["ガラオン","ギャラクトロン"],
    gimmicks: [
      { name: "銅板", count: 6 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "454",
    wave: 2,
    characters: ["ガラオン","ギャラクトロン","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 7 },
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "455",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 8 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "456",
    wave: 1,
    characters: ["スキューラ","バジリス","ギャラクトロン"],
    gimmicks: [
      { name: "銅板", count: 9 },
      { name: "木箱", count: 9 }
    ]
  },
  {
    stage: "457",
    wave: 2,
    characters: ["ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 10 },
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "458",
    wave: 2,
    characters: ["ガラオン","ギャラクトロン","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 11 },
      { name: "木箱", count: 11 }
    ]
  },
  {
    stage: "459",
    wave: 1,
    characters: ["バジリス","スキューラ","ギャラクトロン"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "460",
    wave: 1,
    characters: ["キングジョー"],
    gimmicks: [
      { name: "銅板", count: 18 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "461",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 4 },
      { name: "ラフレシア", count: 4 }
    ]
  },
  {
    stage: "462",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 5 },
      { name: "ラフレシア", count: 5 }
    ]
  },
  {
    stage: "463",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 6 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "464",
    wave: 2,
    characters: ["ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "丸太", count: 7 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "465",
    wave: 2,
    characters: ["ゴルザ","ダダ","メルバ","シャゴン"],
    gimmicks: [
      { name: "丸太", count: 8 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "466",
    wave: 1,
    characters: ["シャゴン","メルバ","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 9 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "467",
    wave: 2,
    characters: ["シャゴン","メルバ","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 10 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "468",
    wave: 2,
    characters: ["メルバ","ゴルザ","ダダ"],
    gimmicks: [
      { name: "丸太", count: 11 },
      { name: "ラフレシア", count: 11 }
    ]
  },
  {
    stage: "469",
    wave: 1,
    characters: ["シャゴン","メルバ","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "470",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "丸太", count: 18 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "471",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷塊", count: 4 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "472",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 5 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "473",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷塊", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "474",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷塊", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "475",
    wave: 2,
    characters: ["エレキング","レイキュバス","ババルウ","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "476",
    wave: 1,
    characters: ["レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "477",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "478",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷塊", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "479",
    wave: 1,
    characters: ["レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "480",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "氷塊", count: 18 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "481",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "岩", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "482",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "岩", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "483",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "岩", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "484",
    wave: 2,
    characters: ["ダダ","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "485",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","バードン"],
    gimmicks: [
      { name: "岩", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "486",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "487",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "岩", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "488",
    wave: 2,
    characters: ["バードン","スラン星人","バルタン星人"],
    gimmicks: [
      { name: "岩", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "489",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "490",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "岩", count: 18 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "491",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 4 },
      { name: "砂岩", count: 4 }
    ]
  },
  {
    stage: "492",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 5 },
      { name: "砂岩", count: 5 }
    ]
  },
  {
    stage: "493",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 6 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "494",
    wave: 2,
    characters: ["ベロクロン","ベムスター","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 7 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "495",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 8 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "496",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 9 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "497",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 10 },
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "498",
    wave: 2,
    characters: ["ベロクロン","ベムスター","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 11 },
      { name: "砂岩", count: 11 }
    ]
  },
  {
    stage: "499",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "500",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "神殿", count: 18 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "501",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 4 },
      { name: "ガラス", count: 4 }
    ]
  },
  {
    stage: "502",
    wave: 2,
    characters: ["ノーバ","ホロボロス","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 5 },
      { name: "ガラス", count: 5 }
    ]
  },
  {
    stage: "503",
    wave: 1,
    characters: ["ツインテール","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 6 },
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "504",
    wave: 2,
    characters: ["キングジョー","ノーバ","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 7 },
      { name: "ガラス", count: 7 }
    ]
  },
  {
    stage: "505",
    wave: 2,
    characters: ["ノーバ","キングジョー","ツインテール","ホロボロス"],
    gimmicks: [
      { name: "木箱", count: 8 },
      { name: "ガラス", count: 8 }
    ]
  },
  {
    stage: "506",
    wave: 1,
    characters: ["ホロボロス","ノーバ","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 9 },
      { name: "ガラス", count: 9 }
    ]
  },
  {
    stage: "507",
    wave: 2,
    characters: ["キングジョー","ホロボロス","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 10 },
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "508",
    wave: 2,
    characters: ["キングジョー","ノーバ","ツインテール"],
    gimmicks: [
      { name: "木箱", count: 11 },
      { name: "ガラス", count: 11 }
    ]
  },
  {
    stage: "509",
    wave: 1,
    characters: ["ホロボロス","ノーバ","キングジョー"],
    gimmicks: [
      { name: "木箱", count: 12 },
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "510",
    wave: 1,
    characters: ["デスフェイサー"],
    gimmicks: [
      { name: "木箱", count: 12 },
      { name: "ガラス", count: 14 }
    ]
  },
  {
    stage: "511",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 4 },
      { name: "ラフレシア", count: 4 }
    ]
  },
  {
    stage: "512",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 5 },
      { name: "ラフレシア", count: 5 }
    ]
  },
  {
    stage: "513",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 6 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "514",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 7 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "515",
    wave: 2,
    characters: ["ババルウ","タガヌラー","ガンQ","モンスアーガー"],
    gimmicks: [
      { name: "木の根", count: 8 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "516",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 9 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "517",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "木の根", count: 10 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "518",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "木の根", count: 11 },
      { name: "ラフレシア", count: 11 }
    ]
  },
  {
    stage: "519",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "木の根", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "520",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "木の根", count: 16 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "521",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "雪", count: 4 },
      { name: "氷結岩", count: 4 }
    ]
  },
  {
    stage: "522",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 5 },
      { name: "氷結岩", count: 5 }
    ]
  },
  {
    stage: "523",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "雪", count: 6 },
      { name: "氷結岩", count: 6 }
    ]
  },
  {
    stage: "524",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "雪", count: 7 },
      { name: "氷結岩", count: 7 }
    ]
  },
  {
    stage: "525",
    wave: 2,
    characters: ["エレキング","レイキュバス","ババルウ","ゼットン"],
    gimmicks: [
      { name: "雪", count: 8 },
      { name: "氷結岩", count: 8 }
    ]
  },
  {
    stage: "526",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 9 },
      { name: "氷結岩", count: 9 }
    ]
  },
  {
    stage: "527",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 10 },
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "528",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "氷結岩", count: 11 }
    ]
  },
  {
    stage: "529",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "530",
    wave: 1,
    characters: ["ダークルギエル"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷結岩", count: 14 }
    ]
  },
  {
    stage: "531",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "532",
    wave: 2,
    characters: ["スラン星人","ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "533",
    wave: 1,
    characters: ["ダダ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "534",
    wave: 2,
    characters: ["ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "535",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "536",
    wave: 1,
    characters: ["モンスアーガー","スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "537",
    wave: 2,
    characters: ["ダダ","ダダ","デマーガ"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "538",
    wave: 2,
    characters: ["ダダ","デマーガ","モンスアーガー"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "539",
    wave: 1,
    characters: ["モンスアーガー","スラン星人","ダダ"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "540",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "化石岩", count: 14 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "541",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 4 },
      { name: "砂岩", count: 4 }
    ]
  },
  {
    stage: "542",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 5 },
      { name: "砂岩", count: 5 }
    ]
  },
  {
    stage: "543",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 6 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "544",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 7 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "545",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 8 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "546",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 9 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "547",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 10 },
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "548",
    wave: 2,
    characters: ["ベロクロン","ベムスター","ガゾート"],
    gimmicks: [
      { name: "化石岩", count: 11 },
      { name: "砂岩", count: 11 }
    ]
  },
  {
    stage: "549",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "化石岩", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "550",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "化石岩", count: 14 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "551",
    wave: 1,
    characters: ["ギャラクトロン","ガラオン"],
    gimmicks: [
      { name: "木箱", count: 4 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "552",
    wave: 2,
    characters: ["ギャラクトロン","スキューラ","バジリス"],
    gimmicks: [
      { name: "木箱", count: 5 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "553",
    wave: 1,
    characters: ["ギャラクトロン","ガラオン"],
    gimmicks: [
      { name: "木箱", count: 6 },
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "554",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス"],
    gimmicks: [
      { name: "木箱", count: 7 },
      { name: "ガラス", count: 7 }
    ]
  },
  {
    stage: "555",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス","スキューラ"],
    gimmicks: [
      { name: "木箱", count: 8 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "556",
    wave: 1,
    characters: ["ギャラクトロン","スキューラ","バジリス"],
    gimmicks: [
      { name: "木箱", count: 9 },
      { name: "ガラス", count: 9 }
    ]
  },
  {
    stage: "557",
    wave: 2,
    characters: ["ガラオン","スキューラ","バジリス"],
    gimmicks: [
      { name: "木箱", count: 10 },
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "558",
    wave: 2,
    characters: ["ギャラクトロン","ガラオン","バジリス"],
    gimmicks: [
      { name: "木箱", count: 11 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "559",
    wave: 1,
    characters: ["ギャラクトロン","スキューラ","バジリス"],
    gimmicks: [
      { name: "木箱", count: 12 },
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "560",
    wave: 1,
    characters: ["キングオブモンス"],
    gimmicks: [
      { name: "木箱", count: 12 },
      { name: "ガラス", count: 8 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "561",
    wave: 1,
    characters: ["ゼットン","ゴモラ"],
    gimmicks: [
      { name: "ラフレシア", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "562",
    wave: 2,
    characters: ["バードン","ブルトン","バルタン星人"],
    gimmicks: [
      { name: "ラフレシア", count: 5 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "563",
    wave: 1,
    characters: ["ゼットン","ゴモラ"],
    gimmicks: [
      { name: "ラフレシア", count: 6 },
      { name: "木の根", count: 6 }
    ]
  },
  {
    stage: "564",
    wave: 2,
    characters: ["ブルトン","ゴモラ","バードン"],
    gimmicks: [
      { name: "ラフレシア", count: 7 },
      { name: "木の根", count: 7 }
    ]
  },
  {
    stage: "565",
    wave: 2,
    characters: ["ブルトン","ベムスター","ゴモラ","ゼットン"],
    gimmicks: [
      { name: "ラフレシア", count: 8 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "566",
    wave: 1,
    characters: ["ブルトン","バードン","ゴモラ"],
    gimmicks: [
      { name: "ラフレシア", count: 9 },
      { name: "木の根", count: 9 }
    ]
  },
  {
    stage: "567",
    wave: 2,
    characters: ["バードン","ブルトン","バルタン星人"],
    gimmicks: [
      { name: "ラフレシア", count: 10 },
      { name: "木の根", count: 10 }
    ]
  },
  {
    stage: "568",
    wave: 2,
    characters: ["ブルトン","ゴモラ","バードン"],
    gimmicks: [
      { name: "ラフレシア", count: 11 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "569",
    wave: 1,
    characters: ["ブルトン","バードン","ゴモラ"],
    gimmicks: [
      { name: "ラフレシア", count: 12 },
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "570",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "ラフレシア", count: 12 },
      { name: "木の根", count: 8 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "571",
    wave: 1,
    characters: ["レイキュバス","ダダ"],
    gimmicks: [
      { name: "雪", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "572",
    wave: 2,
    characters: ["ギャラクトロン","スラン星人","ババルウ"],
    gimmicks: [
      { name: "雪", count: 5 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "573",
    wave: 1,
    characters: ["レイキュバス","ダダ"],
    gimmicks: [
      { name: "雪", count: 6 },
      { name: "氷結岩", count: 6 }
    ]
  },
  {
    stage: "574",
    wave: 2,
    characters: ["スラン星人","ババルウ","ギャラクトロン"],
    gimmicks: [
      { name: "雪", count: 7 },
      { name: "氷結岩", count: 7 }
    ]
  },
  {
    stage: "575",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ダダ","エレキング"],
    gimmicks: [
      { name: "雪", count: 8 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "576",
    wave: 1,
    characters: ["スラン星人","ギャラクトロン","ガンQ"],
    gimmicks: [
      { name: "雪", count: 9 },
      { name: "氷結岩", count: 9 }
    ]
  },
  {
    stage: "577",
    wave: 2,
    characters: ["ギャラクトロン","スラン星人","ババルウ"],
    gimmicks: [
      { name: "雪", count: 10 },
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "578",
    wave: 2,
    characters: ["スラン星人","ババルウ","ギャラクトロン"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "579",
    wave: 1,
    characters: ["スラン星人","ギャラクトロン","ガンQ"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "580",
    wave: 1,
    characters: ["タイラント"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷結岩", count: 8 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "581",
    wave: 1,
    characters: ["パンドン","ガンQ"],
    gimmicks: [
      { name: "砂利", count: 4 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "582",
    wave: 2,
    characters: ["パンドン","スラン星人","マグマ星人"],
    gimmicks: [
      { name: "砂利", count: 5 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "583",
    wave: 1,
    characters: ["パンドン","ガンQ"],
    gimmicks: [
      { name: "砂利", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "584",
    wave: 2,
    characters: ["スラン星人","マグマ星人","パンドン"],
    gimmicks: [
      { name: "砂利", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "585",
    wave: 2,
    characters: ["デマーガ","バルタン星人","ゴルザ","メルバ"],
    gimmicks: [
      { name: "砂利", count: 8 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "586",
    wave: 1,
    characters: ["ゴルザ","メルバ","パンドン"],
    gimmicks: [
      { name: "砂利", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "587",
    wave: 2,
    characters: ["パンドン","スラン星人","マグマ星人"],
    gimmicks: [
      { name: "砂利", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "588",
    wave: 2,
    characters: ["スラン星人","マグマ星人","パンドン"],
    gimmicks: [
      { name: "砂利", count: 11 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "589",
    wave: 1,
    characters: ["ゴルザ","メルバ","パンドン"],
    gimmicks: [
      { name: "砂利", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "590",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "砂利", count: 12 },
      { name: "化石岩", count: 8 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "591",
    wave: 1,
    characters: ["デスドラゴ","ホロボロス"],
    gimmicks: [
      { name: "砂岩", count: 4 },
      { name: "埋め込みサークル", count: 1 }
    ]
  },
  {
    stage: "592",
    wave: 2,
    characters: ["ベムスター","レッドキング","パンドン"],
    gimmicks: [
      { name: "砂岩", count: 5 },
      { name: "埋め込みサークル", count: 1 }
    ]
  },
  {
    stage: "593",
    wave: 1,
    characters: ["デスドラゴ","ホロボロス"],
    gimmicks: [
      { name: "砂岩", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "594",
    wave: 2,
    characters: ["ベムスター","レッドキング","パンドン"],
    gimmicks: [
      { name: "砂岩", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "595",
    wave: 2,
    characters: ["レッドキング","ベムスター","デスドラゴ","ホロボロス"],
    gimmicks: [
      { name: "砂岩", count: 8 },
      { name: "埋め込みサークル", count: 1 }
    ]
  },
  {
    stage: "596",
    wave: 1,
    characters: ["パンドン","レッドキング","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "597",
    wave: 2,
    characters: ["ベムスター","レッドキング","パンドン"],
    gimmicks: [
      { name: "砂岩", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "598",
    wave: 2,
    characters: ["ベムスター","レッドキング","パンドン"],
    gimmicks: [
      { name: "砂岩", count: 11 },
      { name: "埋め込みサークル", count: 1 }
    ]
  },
  {
    stage: "599",
    wave: 1,
    characters: ["パンドン","レッドキング","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "600",
    wave: 1,
    characters: ["パンドン"],
    gimmicks: [
      { name: "砂岩", count: 12 },
      { name: "化石岩", count: 11 },
      { name: "埋め込みサークル", count: 1 }
    ]
  },
  {
    stage: "601",
    wave: 1,
    characters: ["バロッサ星人","モンスアーガー"],
    gimmicks: [
      { name: "木箱", count: 4 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "602",
    wave: 2,
    characters: ["ゾヴァラス","デマーガ","ゴモラ"],
    gimmicks: [
      { name: "木箱", count: 5 },
      { name: "埋め込みブーメラン", count: 5 }
    ]
  },
  {
    stage: "603",
    wave: 1,
    characters: ["バロッサ星人","タガヌラー"],
    gimmicks: [
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "604",
    wave: 2,
    characters: ["デマーガ","ゴモラ","ゾヴァラス"],
    gimmicks: [
      { name: "木箱", count: 14 }
    ]
  },
  {
    stage: "605",
    wave: 2,
    characters: ["バロッサ星人","ゾヴァラス","ゴモラ","タガヌラー"],
    gimmicks: [
      { name: "木箱", count: 16 }
    ]
  },
  {
    stage: "606",
    wave: 1,
    characters: ["タガヌラー","ゴモラ","デマーガ"],
    gimmicks: [
      { name: "木箱", count: 18 }
    ]
  },
  {
    stage: "607",
    wave: 2,
    characters: ["ゾヴァラス","タガヌラー","バロッサ星人"],
    gimmicks: [
      { name: "木箱", count: 20 }
    ]
  },
  {
    stage: "608",
    wave: 2,
    characters: ["ゴモラ","モンスアーガー","ゾヴァラス"],
    gimmicks: [
      { name: "木箱", count: 22 }
    ]
  },
  {
    stage: "609",
    wave: 1,
    characters: ["ゾヴァラス","バロッサ星人","モンスアーガー"],
    gimmicks: [
      { name: "木箱", count: 24 }
    ]
  },
  {
    stage: "610",
    wave: 1,
    characters: ["エルドギメラ"],
    gimmicks: [
      { name: "木箱", count: 24 }
    ]
  },
  {
    stage: "611",
    wave: 1,
    characters: ["シャゴン","ダダ"],
    gimmicks: [
      { name: "ラフレシア", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "612",
    wave: 2,
    characters: ["ゲネガーグ","ババルウ","ホロボロス"],
    gimmicks: [
      { name: "ラフレシア", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "613",
    wave: 1,
    characters: ["ブルトン","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "614",
    wave: 2,
    characters: ["ババルウ","ホロボロス","シャゴン"],
    gimmicks: [
      { name: "ラフレシア", count: 14 }
    ]
  },
  {
    stage: "615",
    wave: 2,
    characters: ["シャゴン","ダダ","ババルウ","ゲネガーグ"],
    gimmicks: [
      { name: "ラフレシア", count: 16 }
    ]
  },
  {
    stage: "616",
    wave: 1,
    characters: ["ホロボロス","ババルウ","ゲネガーグ"],
    gimmicks: [
      { name: "ラフレシア", count: 18 }
    ]
  },
  {
    stage: "617",
    wave: 2,
    characters: ["ブルトン","ホロボロス","ダダ"],
    gimmicks: [
      { name: "ラフレシア", count: 20 }
    ]
  },
  {
    stage: "618",
    wave: 2,
    characters: ["シャゴン","ババルウ","ダダ"],
    gimmicks: [
      { name: "ラフレシア", count: 22 }
    ]
  },
  {
    stage: "619",
    wave: 1,
    characters: ["ブルトン","ゲネガーグ","ババルウ"],
    gimmicks: [
      { name: "ラフレシア", count: 24 }
    ]
  },
  {
    stage: "620",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "ラフレシア", count: 24 }
    ]
  },
  {
    stage: "621",
    wave: 1,
    characters: ["ギャラクトロン","ダークロプスゼロ"],
    gimmicks: [
      { name: "雪", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "622",
    wave: 2,
    characters: ["ゲネガーグ","エレキング","ギャラクトロン"],
    gimmicks: [
      { name: "雪", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "623",
    wave: 1,
    characters: ["ダークロプスゼロ","レイキュバス"],
    gimmicks: [
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "624",
    wave: 2,
    characters: ["ベムスター","エレキング","レイキュバス"],
    gimmicks: [
      { name: "雪", count: 14 }
    ]
  },
  {
    stage: "625",
    wave: 2,
    characters: ["ゲネガーグ","ギャラクトロン","ダークロプスゼロ","レイキュバス"],
    gimmicks: [
      { name: "雪", count: 16 }
    ]
  },
  {
    stage: "626",
    wave: 1,
    characters: ["ダークロプスゼロ","エレキング","ギャラクトロン"],
    gimmicks: [
      { name: "雪", count: 18 }
    ]
  },
  {
    stage: "627",
    wave: 2,
    characters: ["ゲネガーグ","レイキュバス","ダークロプスゼロ"],
    gimmicks: [
      { name: "雪", count: 20 }
    ]
  },
  {
    stage: "628",
    wave: 2,
    characters: ["ゲネガーグ","ギャラクトロン","エレキング"],
    gimmicks: [
      { name: "雪", count: 22 }
    ]
  },
  {
    stage: "629",
    wave: 1,
    characters: ["ダークロプスゼロ","レイキュバス","ギャラクトロン"],
    gimmicks: [
      { name: "雪", count: 24 }
    ]
  },
  {
    stage: "630",
    wave: 1,
    characters: ["レイキュバス"],
    gimmicks: [
      { name: "雪", count: 24 }
    ]
  },
  {
    stage: "631",
    wave: 1,
    characters: ["バルタン星人","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 4 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "632",
    wave: 2,
    characters: ["メフィラス星人","パンドン","バードン"],
    gimmicks: [
      { name: "砂利", count: 5 },
      { name: "埋め込みナパーム", count: 5 }
    ]
  },
  {
    stage: "633",
    wave: 1,
    characters: ["ゲネガーグ","バードン"],
    gimmicks: [
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "634",
    wave: 2,
    characters: ["ゲネガーグ","バルタン星人","メフィラス星人"],
    gimmicks: [
      { name: "砂利", count: 14 }
    ]
  },
  {
    stage: "635",
    wave: 2,
    characters: ["ダークロプスゼロ","スラン星人","ゴルザ","メルバ"],
    gimmicks: [
      { name: "砂利", count: 16 }
    ]
  },
  {
    stage: "636",
    wave: 1,
    characters: ["パンドン","バードン","ガンQ"],
    gimmicks: [
      { name: "砂利", count: 18 }
    ]
  },
  {
    stage: "637",
    wave: 2,
    characters: ["メフィラス星人","スラン星人","パンドン"],
    gimmicks: [
      { name: "砂利", count: 20 }
    ]
  },
  {
    stage: "638",
    wave: 2,
    characters: ["スラン星人","バルタン星人","メフィラス星人"],
    gimmicks: [
      { name: "砂利", count: 22 }
    ]
  },
  {
    stage: "639",
    wave: 1,
    characters: ["ゴルザ","メルバ","ガンQ"],
    gimmicks: [
      { name: "砂利", count: 24 }
    ]
  },
  {
    stage: "640",
    wave: 1,
    characters: ["ゴモラ"],
    gimmicks: [
      { name: "砂利", count: 24 }
    ]
  },
  {
    stage: "641",
    wave: 1,
    characters: ["マグマ星人","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 4 },
      { name: "埋め込みサークル", count: 4 }
    ]
  },
  {
    stage: "642",
    wave: 2,
    characters: ["レッドキング","ゼットン","ガゾート"],
    gimmicks: [
      { name: "砂岩", count: 5 },
      { name: "埋め込みサークル", count: 5 }
    ]
  },
  {
    stage: "643",
    wave: 1,
    characters: ["エルドギメラ","メフィラス星人"],
    gimmicks: [
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "644",
    wave: 2,
    characters: ["マグマ星人","レッドキング","デスドラゴ"],
    gimmicks: [
      { name: "砂岩", count: 14 }
    ]
  },
  {
    stage: "645",
    wave: 2,
    characters: ["メフィラス星人","ベロクロン","エルドギメラ","ゼットン"],
    gimmicks: [
      { name: "砂岩", count: 16 }
    ]
  },
  {
    stage: "646",
    wave: 1,
    characters: ["メフィラス星人","ゼットン","レッドキング"],
    gimmicks: [
      { name: "砂岩", count: 18 }
    ]
  },
  {
    stage: "647",
    wave: 2,
    characters: ["メフィラス星人","ゼットン","レッドキング"],
    gimmicks: [
      { name: "砂岩", count: 20 }
    ]
  },
  {
    stage: "648",
    wave: 2,
    characters: ["メフィラス星人","ゾヴァラス","エルドギメラ"],
    gimmicks: [
      { name: "砂岩", count: 22 }
    ]
  },
  {
    stage: "649",
    wave: 1,
    characters: ["エルドギメラ","メフィラス星人","ゼットン"],
    gimmicks: [
      { name: "砂岩", count: 24 }
    ]
  },
  {
    stage: "650",
    wave: 1,
    characters: ["ゾメラ"],
    gimmicks: [
      { name: "砂岩", count: 24 }
    ]
  },
  {
    stage: "651",
    wave: 1,
    characters: ["ゾヴァラス","キリエロイド"],
    gimmicks: [
      { name: "銅板", count: 4 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "652",
    wave: 2,
    characters: ["ノーバ","グドン","バロッサ星人"],
    gimmicks: [
      { name: "銅板", count: 5 },
      { name: "埋め込みブーメラン", count: 5 }
    ]
  },
  {
    stage: "653",
    wave: 1,
    characters: ["ガラオン","ネロンガ"],
    gimmicks: [
      { name: "銅板", count: 12 }
    ]
  },
  {
    stage: "654",
    wave: 2,
    characters: ["ツインテール","バロッサ星人","ゾヴァラス"],
    gimmicks: [
      { name: "銅板", count: 14 }
    ]
  },
  {
    stage: "655",
    wave: 2,
    characters: ["キリエロイド","グドン","バロッサ星人","ゾヴァラス"],
    gimmicks: [
      { name: "銅板", count: 16 }
    ]
  },
  {
    stage: "656",
    wave: 1,
    characters: ["グドン","バロッサ星人","キングジョー"],
    gimmicks: [
      { name: "銅板", count: 18 }
    ]
  },
  {
    stage: "657",
    wave: 2,
    characters: ["ノーバ","キングジョー","ゾヴァラス"],
    gimmicks: [
      { name: "銅板", count: 20 }
    ]
  },
  {
    stage: "658",
    wave: 2,
    characters: ["ガラオン","ツインテール","ネロンガ"],
    gimmicks: [
      { name: "銅板", count: 22 }
    ]
  },
  {
    stage: "659",
    wave: 1,
    characters: ["ゾヴァラス","キリエロイド","キングジョー"],
    gimmicks: [
      { name: "銅板", count: 24 }
    ]
  },
  {
    stage: "660",
    wave: 1,
    characters: ["キングジョー"],
    gimmicks: [
      { name: "銅板", count: 24 }
    ]
  },
  {
    stage: "661",
    wave: 1,
    characters: ["ゲネガーグ","ゲバルガ"],
    gimmicks: [
      { name: "丸太", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "662",
    wave: 2,
    characters: ["タガヌラー","メフィラス星人","ブルトン"],
    gimmicks: [
      { name: "丸太", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "663",
    wave: 1,
    characters: ["ゲバルガ","ダークロプスゼロ"],
    gimmicks: [
      { name: "丸太", count: 12 }
    ]
  },
  {
    stage: "664",
    wave: 2,
    characters: ["ダダ","モンスアーガー","ゲネガーグ"],
    gimmicks: [
      { name: "丸太", count: 14 }
    ]
  },
  {
    stage: "665",
    wave: 2,
    characters: ["ゲバルガ","ババルウ","メフィラス星人","ブルトン"],
    gimmicks: [
      { name: "丸太", count: 16 }
    ]
  },
  {
    stage: "666",
    wave: 1,
    characters: ["ダークロプスゼロ","ブルトン","ゲネガーグ"],
    gimmicks: [
      { name: "丸太", count: 18 }
    ]
  },
  {
    stage: "667",
    wave: 2,
    characters: ["デマーガ","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "丸太", count: 20 }
    ]
  },
  {
    stage: "668",
    wave: 2,
    characters: ["ダークロプスゼロ","ゲネガーグ","ブルトン"],
    gimmicks: [
      { name: "丸太", count: 22 }
    ]
  },
  {
    stage: "669",
    wave: 1,
    characters: ["モンスアーガー","ゲバルガ","メフィラス星人"],
    gimmicks: [
      { name: "丸太", count: 24 }
    ]
  },
  {
    stage: "670",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "丸太", count: 24 }
    ]
  },
  {
    stage: "671",
    wave: 1,
    characters: ["ゼットン","ゾヴァラス"],
    gimmicks: [
      { name: "氷塊", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "672",
    wave: 2,
    characters: ["ゲバルガ","エレキング","メフィラス星人"],
    gimmicks: [
      { name: "氷塊", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "673",
    wave: 1,
    characters: ["キリエロイド","レイキュバス"],
    gimmicks: [
      { name: "氷塊", count: 12 }
    ]
  },
  {
    stage: "674",
    wave: 2,
    characters: ["ベムスター","ゾヴァラス","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 14 }
    ]
  },
  {
    stage: "675",
    wave: 2,
    characters: ["バルタン星人","レイキュバス","メフィラス星人","ゲバルガ"],
    gimmicks: [
      { name: "氷塊", count: 16 }
    ]
  },
  {
    stage: "676",
    wave: 1,
    characters: ["エレキング","ゼットン","キリエロイド"],
    gimmicks: [
      { name: "氷塊", count: 18 }
    ]
  },
  {
    stage: "677",
    wave: 2,
    characters: ["ゾヴァラス","ベムスター","レイキュバス"],
    gimmicks: [
      { name: "氷塊", count: 20 }
    ]
  },
  {
    stage: "678",
    wave: 2,
    characters: ["メフィラス星人","エレキング","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 22 }
    ]
  },
  {
    stage: "679",
    wave: 1,
    characters: ["ゾヴァラス","ゲバルガ","バルタン星人"],
    gimmicks: [
      { name: "氷塊", count: 24 }
    ]
  },
  {
    stage: "680",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "氷塊", count: 24 }
    ]
  },
  {
    stage: "681",
    wave: 1,
    characters: ["ディゲロス","マグマ星人"],
    gimmicks: [
      { name: "岩", count: 4 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "682",
    wave: 2,
    characters: ["ゲネガーグ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "岩", count: 5 },
      { name: "埋め込みナパーム", count: 5 }
    ]
  },
  {
    stage: "683",
    wave: 1,
    characters: ["パンドン","ディゲロス"],
    gimmicks: [
      { name: "岩", count: 12 }
    ]
  },
  {
    stage: "684",
    wave: 2,
    characters: ["バードン","マグマ星人","ダークロプスゼロ"],
    gimmicks: [
      { name: "岩", count: 14 }
    ]
  },
  {
    stage: "685",
    wave: 2,
    characters: ["ゴルザ","メルバ","パンドン","ディゲロス"],
    gimmicks: [
      { name: "岩", count: 16 }
    ]
  },
  {
    stage: "686",
    wave: 1,
    characters: ["ディゲロス","パンドン","ゲネガーグ"],
    gimmicks: [
      { name: "岩", count: 18 }
    ]
  },
  {
    stage: "687",
    wave: 2,
    characters: ["バードン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "岩", count: 20 }
    ]
  },
  {
    stage: "688",
    wave: 2,
    characters: ["ゲネガーグ","パンドン","マグマ星人"],
    gimmicks: [
      { name: "岩", count: 22 }
    ]
  },
  {
    stage: "689",
    wave: 1,
    characters: ["パンドン","ディゲロス","ダークロプスゼロ"],
    gimmicks: [
      { name: "岩", count: 24 }
    ]
  },
  {
    stage: "690",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "岩", count: 24 }
    ]
  },
  {
    stage: "691",
    wave: 1,
    characters: ["エルドギメラ","ホロボロス"],
    gimmicks: [
      { name: "神殿", count: 4 },
      { name: "埋め込みサークル", count: 4 }
    ]
  },
  {
    stage: "692",
    wave: 2,
    characters: ["ゲバルガ","メフィラス星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 5 },
      { name: "埋め込みサークル", count: 5 }
    ]
  },
  {
    stage: "693",
    wave: 1,
    characters: ["レッドキング","ガンQ"],
    gimmicks: [
      { name: "神殿", count: 12 }
    ]
  },
  {
    stage: "694",
    wave: 2,
    characters: ["エルドギメラ","キリエロイド","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 14 }
    ]
  },
  {
    stage: "695",
    wave: 2,
    characters: ["ゲバルガ","メフィラス星人","レッドキング","ホロボロス"],
    gimmicks: [
      { name: "神殿", count: 16 }
    ]
  },
  {
    stage: "696",
    wave: 1,
    characters: ["エルドギメラ","ガンQ","キリエロイド"],
    gimmicks: [
      { name: "神殿", count: 18 }
    ]
  },
  {
    stage: "697",
    wave: 2,
    characters: ["ベロクロン","ゾヴァラス","メフィラス星人"],
    gimmicks: [
      { name: "神殿", count: 20 }
    ]
  },
  {
    stage: "698",
    wave: 2,
    characters: ["キリエロイド","ガンQ","レッドキング"],
    gimmicks: [
      { name: "神殿", count: 22 }
    ]
  },
  {
    stage: "699",
    wave: 1,
    characters: ["ゲバルガ","エルドギメラ","メフィラス星人"],
    gimmicks: [
      { name: "神殿", count: 24 }
    ]
  },
  {
    stage: "700",
    wave: 1,
    characters: ["ヒッポリト星人"],
    gimmicks: [
      { name: "神殿", count: 24 }
    ]
  },
  {
    stage: "701",
    wave: 1,
    characters: ["メトロン星人","ホロボロス"],
    gimmicks: [
      { name: "銅板", count: 4 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "702",
    wave: 2,
    characters: ["ギャラクトロン","ガンQ","ベムスター"],
    gimmicks: [
      { name: "銅板", count: 5 },
      { name: "埋め込みブーメラン", count: 5 }
    ]
  },
  {
    stage: "703",
    wave: 1,
    characters: ["タガヌラー","バロッサ星人"],
    gimmicks: [
      { name: "銅板", count: 6 },
      { name: "木箱", count: 6 }
    ]
  },
  {
    stage: "704",
    wave: 2,
    characters: ["ゴモラ","メトロン星人","タガヌラー"],
    gimmicks: [
      { name: "銅板", count: 7 },
      { name: "木箱", count: 7 }
    ]
  },
  {
    stage: "705",
    wave: 2,
    characters: ["メトロン星人","バロッサ星人","ガンQ","ゴモラ"],
    gimmicks: [
      { name: "銅板", count: 8 },
      { name: "木箱", count: 8 }
    ]
  },
  {
    stage: "706",
    wave: 1,
    characters: ["タガヌラー","ギャラクトロン","バロッサ星人"],
    gimmicks: [
      { name: "銅板", count: 9 },
      { name: "木箱", count: 9 }
    ]
  },
  {
    stage: "707",
    wave: 2,
    characters: ["ホロボロス","メトロン星人","ベムスター"],
    gimmicks: [
      { name: "銅板", count: 10 },
      { name: "木箱", count: 10 }
    ]
  },
  {
    stage: "708",
    wave: 2,
    characters: ["ギャラクトロン","タガヌラー","ゴモラ"],
    gimmicks: [
      { name: "銅板", count: 11 },
      { name: "木箱", count: 11 }
    ]
  },
  {
    stage: "709",
    wave: 1,
    characters: ["メトロン星人","ガンQ","ベムスター"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "710",
    wave: 1,
    characters: ["デスフェイサー"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "木箱", count: 12 }
    ]
  },
  {
    stage: "711",
    wave: 1,
    characters: ["シャゴン","ダダ"],
    gimmicks: [
      { name: "丸太", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "712",
    wave: 2,
    characters: ["デマーガ","ババルウ","ガンQ"],
    gimmicks: [
      { name: "丸太", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "713",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 6 },
      { name: "ラフレシア", count: 6 }
    ]
  },
  {
    stage: "714",
    wave: 2,
    characters: ["ゲバルガ","シャゴン","ブルトン"],
    gimmicks: [
      { name: "丸太", count: 7 },
      { name: "ラフレシア", count: 7 }
    ]
  },
  {
    stage: "715",
    wave: 2,
    characters: ["ダダ","ガンQ","ババルウ","デマーガ"],
    gimmicks: [
      { name: "丸太", count: 8 },
      { name: "ラフレシア", count: 8 }
    ]
  },
  {
    stage: "716",
    wave: 1,
    characters: ["シャゴン","ゲバルガ","ババルウ"],
    gimmicks: [
      { name: "丸太", count: 9 },
      { name: "ラフレシア", count: 9 }
    ]
  },
  {
    stage: "717",
    wave: 2,
    characters: ["デマーガ","ダダ","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 10 },
      { name: "ラフレシア", count: 10 }
    ]
  },
  {
    stage: "718",
    wave: 2,
    characters: ["ゲバルガ","ババルウ","シャゴン"],
    gimmicks: [
      { name: "丸太", count: 11 },
      { name: "ラフレシア", count: 11 }
    ]
  },
  {
    stage: "719",
    wave: 1,
    characters: ["ゴルザ","ガンQ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "720",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "ラフレシア", count: 12 }
    ]
  },
  {
    stage: "721",
    wave: 1,
    characters: ["メトロン星人","メフィラス星人"],
    gimmicks: [
      { name: "氷塊", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "722",
    wave: 2,
    characters: ["キリエロイド","ベロクロン","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "723",
    wave: 1,
    characters: ["ギャラクトロン","エレキング"],
    gimmicks: [
      { name: "氷塊", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "724",
    wave: 2,
    characters: ["レイキュバス","メフィラス星人","ゾヴァラス"],
    gimmicks: [
      { name: "氷塊", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "725",
    wave: 2,
    characters: ["メトロン星人","キリエロイド","ゼットン","エレキング"],
    gimmicks: [
      { name: "氷塊", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "726",
    wave: 1,
    characters: ["ベロクロン","メフィラス星人","ギャラクトロン"],
    gimmicks: [
      { name: "氷塊", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "727",
    wave: 2,
    characters: ["レイキュバス","ゾヴァラス","キリエロイド"],
    gimmicks: [
      { name: "氷塊", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "728",
    wave: 2,
    characters: ["エレキング","ベロクロン","メフィラス星人"],
    gimmicks: [
      { name: "氷塊", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "729",
    wave: 1,
    characters: ["キリエロイド","メトロン星人","ゼットン"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "730",
    wave: 1,
    characters: ["ガッツ星人"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "731",
    wave: 1,
    characters: ["ディゲロス","ダークロプスゼロ"],
    gimmicks: [
      { name: "岩", count: 4 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "732",
    wave: 2,
    characters: ["バードン","スラン星人","バルタン星人"],
    gimmicks: [
      { name: "岩", count: 5 },
      { name: "埋め込みナパーム", count: 5 }
    ]
  },
  {
    stage: "733",
    wave: 1,
    characters: ["パンドン","モンスアーガー"],
    gimmicks: [
      { name: "岩", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "734",
    wave: 2,
    characters: ["ゲネガーグ","ダークロプスゼロ","バードン"],
    gimmicks: [
      { name: "岩", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "735",
    wave: 2,
    characters: ["ディゲロス","ゲネガーグ","モンスアーガー","ダークロプスゼロ"],
    gimmicks: [
      { name: "岩", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "736",
    wave: 1,
    characters: ["スラン星人","ディゲロス","バルタン星人"],
    gimmicks: [
      { name: "岩", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "737",
    wave: 2,
    characters: ["バードン","モンスアーガー","バルタン星人"],
    gimmicks: [
      { name: "岩", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "738",
    wave: 2,
    characters: ["ゲネガーグ","パンドン","スラン星人"],
    gimmicks: [
      { name: "岩", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "739",
    wave: 1,
    characters: ["モンスアーガー","ディゲロス","ダークロプスゼロ"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "740",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "741",
    wave: 1,
    characters: ["メトロン星人","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 4 },
      { name: "埋め込みサークル", count: 4 }
    ]
  },
  {
    stage: "742",
    wave: 2,
    characters: ["レッドキング","ゼットン","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 5 },
      { name: "埋め込みサークル", count: 5 }
    ]
  },
  {
    stage: "743",
    wave: 1,
    characters: ["エルドギメラ","ゼットン"],
    gimmicks: [
      { name: "神殿", count: 6 },
      { name: "砂岩", count: 6 }
    ]
  },
  {
    stage: "744",
    wave: 2,
    characters: ["マグマ星人","レッドキング","デスドラゴ"],
    gimmicks: [
      { name: "神殿", count: 7 },
      { name: "砂岩", count: 7 }
    ]
  },
  {
    stage: "745",
    wave: 2,
    characters: ["メトロン星人","メフィラス星人","エルドギメラ","ゼットン"],
    gimmicks: [
      { name: "神殿", count: 8 },
      { name: "砂岩", count: 8 }
    ]
  },
  {
    stage: "746",
    wave: 1,
    characters: ["レッドキング","メフィラス星人","ゼットン"],
    gimmicks: [
      { name: "神殿", count: 9 },
      { name: "砂岩", count: 9 }
    ]
  },
  {
    stage: "747",
    wave: 2,
    characters: ["メトロン星人","エルドギメラ","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 10 },
      { name: "砂岩", count: 10 }
    ]
  },
  {
    stage: "748",
    wave: 2,
    characters: ["ゾヴァラス","メフィラス星人","エルドギメラ"],
    gimmicks: [
      { name: "神殿", count: 11 },
      { name: "砂岩", count: 11 }
    ]
  },
  {
    stage: "749",
    wave: 1,
    characters: ["メトロン星人","メフィラス星人","ゼットン"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "750",
    wave: 1,
    characters: ["カルミラ"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "砂岩", count: 12 }
    ]
  },
  {
    stage: "751",
    wave: 1,
    characters: ["バキシム","ギャラクトロン"],
    gimmicks: [
      { name: "銅板", count: 4 },
      { name: "埋め込みブーメラン", count: 4 }
    ]
  },
  {
    stage: "752",
    wave: 2,
    characters: ["ガゾート","ゾヴァラス","ゼットン"],
    gimmicks: [
      { name: "銅板", count: 5 },
      { name: "埋め込みブーメラン", count: 5 }
    ]
  },
  {
    stage: "753",
    wave: 1,
    characters: ["バロッサ星人","ゾヴァラス"],
    gimmicks: [
      { name: "銅板", count: 6 },
      { name: "ガラス", count: 6 }
    ]
  },
  {
    stage: "754",
    wave: 2,
    characters: ["スキューラ","バジリス","ゼットン"],
    gimmicks: [
      { name: "銅板", count: 7 },
      { name: "ガラス", count: 7 }
    ]
  },
  {
    stage: "755",
    wave: 2,
    characters: ["ガゾート","ネロンガ","ゴモラ","バジリス"],
    gimmicks: [
      { name: "銅板", count: 8 },
      { name: "ガラス", count: 8 }
    ]
  },
  {
    stage: "756",
    wave: 1,
    characters: ["スキューラ","バロッサ星人","バキシム"],
    gimmicks: [
      { name: "銅板", count: 9 },
      { name: "ガラス", count: 9 }
    ]
  },
  {
    stage: "757",
    wave: 2,
    characters: ["ゼットン","ネロンガ","バロッサ星人"],
    gimmicks: [
      { name: "銅板", count: 10 },
      { name: "ガラス", count: 10 }
    ]
  },
  {
    stage: "758",
    wave: 2,
    characters: ["ギャラクトロン","ゾヴァラス","ゴモラ"],
    gimmicks: [
      { name: "銅板", count: 11 },
      { name: "ガラス", count: 11 }
    ]
  },
  {
    stage: "759",
    wave: 1,
    characters: ["バジリス","バキシム","スキューラ"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "760",
    wave: 1,
    characters: ["キングオブモンス"],
    gimmicks: [
      { name: "銅板", count: 12 },
      { name: "ガラス", count: 12 }
    ]
  },
  {
    stage: "761",
    wave: 1,
    characters: ["ダークロプスゼロ","ゲネガーグ"],
    gimmicks: [
      { name: "丸太", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "762",
    wave: 2,
    characters: ["ブルトン","ババルウ","グライム"],
    gimmicks: [
      { name: "丸太", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "763",
    wave: 1,
    characters: ["モンスアーガー","メフィラス星人"],
    gimmicks: [
      { name: "丸太", count: 6 },
      { name: "木の根", count: 6 }
    ]
  },
  {
    stage: "764",
    wave: 2,
    characters: ["タガヌラー","ダークロプスゼロ","ブルトン"],
    gimmicks: [
      { name: "丸太", count: 7 },
      { name: "木の根", count: 7 }
    ]
  },
  {
    stage: "765",
    wave: 2,
    characters: ["グライム","ゲバルガ","ババルウ","ゲネガーグ"],
    gimmicks: [
      { name: "丸太", count: 8 },
      { name: "木の根", count: 8 }
    ]
  },
  {
    stage: "766",
    wave: 1,
    characters: ["ゲバルガ","グライム","メフィラス星人"],
    gimmicks: [
      { name: "丸太", count: 9 },
      { name: "木の根", count: 9 }
    ]
  },
  {
    stage: "767",
    wave: 2,
    characters: ["ゲネガーグ","モンスアーガー","ダークロプスゼロ"],
    gimmicks: [
      { name: "丸太", count: 10 },
      { name: "木の根", count: 10 }
    ]
  },
  {
    stage: "768",
    wave: 2,
    characters: ["グライム","ダークロプスゼロ","ゲネガーグ"],
    gimmicks: [
      { name: "丸太", count: 11 },
      { name: "木の根", count: 11 }
    ]
  },
  {
    stage: "769",
    wave: 1,
    characters: ["ゲバルガ","グライム","ババルウ"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "770",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "木の根", count: 12 }
    ]
  },
  {
    stage: "771",
    wave: 1,
    characters: ["バキシム","メトロン星人"],
    gimmicks: [
      { name: "氷塊", count: 4 },
      { name: "埋め込みロケット", count: 4 }
    ]
  },
  {
    stage: "772",
    wave: 2,
    characters: ["キリエロイド","レイキュバス","ベムスター"],
    gimmicks: [
      { name: "氷塊", count: 5 },
      { name: "埋め込みロケット", count: 5 }
    ]
  },
  {
    stage: "773",
    wave: 1,
    characters: ["バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷塊", count: 6 },
      { name: "氷結岩", count: 6 }
    ]
  },
  {
    stage: "774",
    wave: 2,
    characters: ["バキシム","ダダ","メトロン星人"],
    gimmicks: [
      { name: "氷塊", count: 7 },
      { name: "氷結岩", count: 7 }
    ]
  },
  {
    stage: "775",
    wave: 2,
    characters: ["バキシム","ベムスター","キリエロイド","ベロクロン"],
    gimmicks: [
      { name: "氷塊", count: 8 },
      { name: "氷結岩", count: 8 }
    ]
  },
  {
    stage: "776",
    wave: 1,
    characters: ["ベロクロン","バルタン星人","ガンQ"],
    gimmicks: [
      { name: "氷塊", count: 9 },
      { name: "氷結岩", count: 9 }
    ]
  },
  {
    stage: "777",
    wave: 2,
    characters: ["ダダ","レイキュバス","キリエロイド"],
    gimmicks: [
      { name: "氷塊", count: 10 },
      { name: "氷結岩", count: 10 }
    ]
  },
  {
    stage: "778",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","メトロン星人"],
    gimmicks: [
      { name: "氷塊", count: 11 },
      { name: "氷結岩", count: 11 }
    ]
  },
  {
    stage: "779",
    wave: 1,
    characters: ["メトロン星人","キリエロイド","ガンQ"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "780",
    wave: 1,
    characters: ["ダークルギエル"],
    gimmicks: [
      { name: "氷塊", count: 12 },
      { name: "氷結岩", count: 12 }
    ]
  },
  {
    stage: "781",
    wave: 1,
    characters: ["グライム","マグマ星人"],
    gimmicks: [
      { name: "岩", count: 4 },
      { name: "埋め込みナパーム", count: 4 }
    ]
  },
  {
    stage: "782",
    wave: 2,
    characters: ["ディゲロス","ゴルザ","メルバ"],
    gimmicks: [
      { name: "岩", count: 5 },
      { name: "埋め込みナパーム", count: 5 }
    ]
  },
  {
    stage: "783",
    wave: 1,
    characters: ["ダークロプスゼロ","スラン星人"],
    gimmicks: [
      { name: "岩", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "784",
    wave: 2,
    characters: ["ゴルザ","マグマ星人","グライム"],
    gimmicks: [
      { name: "岩", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "785",
    wave: 2,
    characters: ["デマーガ","ダークロプスゼロ","メルバ","モンスアーガー"],
    gimmicks: [
      { name: "岩", count: 8 },
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "786",
    wave: 1,
    characters: ["ゴルザ","マグマ星人","ディゲロス"],
    gimmicks: [
      { name: "岩", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "787",
    wave: 2,
    characters: ["グライム","モンスアーガー","メルバ"],
    gimmicks: [
      { name: "岩", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "788",
    wave: 2,
    characters: ["スラン星人","ダークロプスゼロ","デマーガ"],
    gimmicks: [
      { name: "岩", count: 11 },
      { name: "化石岩", count: 11 }
    ]
  },
  {
    stage: "789",
    wave: 1,
    characters: ["ダークロプスゼロ","グライム","ディゲロス"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "790",
    wave: 1,
    characters: ["パンドン"],
    gimmicks: [
      { name: "岩", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "791",
    wave: 1,
    characters: ["ゼットン","バキシム"],
    gimmicks: [
      { name: "神殿", count: 4 },
      { name: "埋め込みサークル", count: 4 }
    ]
  },
  {
    stage: "792",
    wave: 2,
    characters: ["ガゾート","レッドキング","メフィラス星人"],
    gimmicks: [
      { name: "神殿", count: 5 },
      { name: "埋め込みサークル", count: 5 }
    ]
  },
  {
    stage: "793",
    wave: 1,
    characters: ["ゲバルガ","グライム"],
    gimmicks: [
      { name: "神殿", count: 6 },
      { name: "化石岩", count: 6 }
    ]
  },
  {
    stage: "794",
    wave: 2,
    characters: ["ゼットン","ホロボロス","バキシム"],
    gimmicks: [
      { name: "神殿", count: 7 },
      { name: "化石岩", count: 7 }
    ]
  },
  {
    stage: "795",
    wave: 2,
    characters: ["グライム","ホロボロス","メフィラス星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 8 },
      { name: "化石岩", count: 8 }
    ]
  },
  {
    stage: "796",
    wave: 1,
    characters: ["グライム","ホロボロス","ゼットン"],
    gimmicks: [
      { name: "神殿", count: 9 },
      { name: "化石岩", count: 9 }
    ]
  },
  {
    stage: "797",
    wave: 2,
    characters: ["レッドキング","ゲバルガ","ホロボロス"],
    gimmicks: [
      { name: "神殿", count: 10 },
      { name: "化石岩", count: 10 }
    ]
  },
  {
    stage: "798",
    wave: 2,
    characters: ["ガゾート","メフィラス星人","デスドラゴ"],
    gimmicks: [
      { name: "神殿", count: 11 },
      { name: "化石岩", count: 11 }
    ]
  },
  {
    stage: "799",
    wave: 1,
    characters: ["メフィラス星人","バキシム","ゲバルガ"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  },
  {
    stage: "800",
    wave: 1,
    characters: ["ウルトラマントレギア"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "化石岩", count: 12 }
    ]
  }
];

// ===== 状態 =====
let selectedChars = [];
let selectedGimmicks = [];
let currentPage = 1;
const perPage = 10;
let timer;

// ===== 一覧生成 =====
const allChars = [...new Set(data.flatMap(d => d.characters))].sort((a, b) => a.localeCompare(b, "ja", { sensitivity: "base" }));
const allGimmicks = [...new Set(data.flatMap(d => d.gimmicks.map(g => g.name)))].sort((a, b) => a.localeCompare(b, "ja", { sensitivity: "base" }));

// ===== タグ生成 =====
function createTags(id, list, type) {
  const container = document.getElementById(id);

  list.forEach(item => {
    const tag = document.createElement("span");
    tag.textContent = item;
    tag.className = "tag";

    tag.onclick = () => toggleTag(tag, item, type);

    container.appendChild(tag);
  });
}

// ===== タグ操作 =====
function toggleTag(el, val, type) {
  let arr = type === "char" ? selectedChars : selectedGimmicks;
  const max = type === "char" ? 3 : 2;

  if (arr.includes(val)) {
    arr = arr.filter(v => v !== val);
    el.classList.remove("active");
  } else {
    if (arr.length >= max) {
      alert(`最大${max}まで`);
      return;
    }
    arr.push(val);
    el.classList.add("active");
  }

  if (type === "char") selectedChars = arr;
  else selectedGimmicks = arr;

  currentPage = 1;
  triggerSearch();
}

// ===== 即時検索 =====
function triggerSearch() {
  clearTimeout(timer);
  timer = setTimeout(runSearch, 100);
}

// ===== 検索 =====
function runSearch() {
  const resultDiv = document.getElementById("result");

  let result = (selectedChars.length === 0 && selectedGimmicks.length === 0)
    ? data
    : data.filter(s =>
        selectedChars.every(c => s.characters.includes(c)) &&
        selectedGimmicks.every(g => s.gimmicks.some(x => x.name === g))
      );

  if (result.length === 0) {
    resultDiv.innerHTML = "該当なし";
    return;
  }

  result.sort((a, b) => Number(a.stage) - Number(b.stage));

  const total = Math.ceil(result.length / perPage);
  const start = (currentPage - 1) * perPage;
  const pageData = result.slice(start, start + perPage);

  resultDiv.innerHTML = `
    <p>${result.length}件中 ${start+1}〜${start+pageData.length}</p>


    ${pageData.map(r=>`
      <div class="card">
        <strong>Stage ${r.stage} - Wave ${r.wave}</strong><br>
        キャラ: ${[...r.characters].sort((a, b) => a.localeCompare(b, "ja", { sensitivity: "base" })).map(c =>`<span class="char" onclick="quickChar('${c}')">${c}</span>`).join(" / ")}<br>
        ギミック: ${[...r.gimmicks].sort((a, b) => a.name.localeCompare(b.name, "ja", { sensitivity: "base" })).map(g =>`<span class="gimmick" onclick="quickGimmick('${g.name}')">${g.name}(${g.count})</span>`).join(" / ")}
      </div>
    `).join("")}

    <div class="pagination">
      <button onclick="prev()" ${currentPage===1?"disabled":""}>前へ</button>
      ${currentPage} / ${total}
      <button onclick="next()" ${currentPage===total?"disabled":""}>次へ</button>
    </div>
  `;

  updateURL();
}

// ===== ページ操作 =====
function next(){ currentPage++; runSearch(); }
function prev(){ currentPage--; runSearch(); }

// ===== 逆引き =====
function quickChar(name){
  selectedChars=[name];
  selectedGimmicks=[];
  resetTags();
  runSearch();
}

function quickGimmick(name){
  selectedChars=[];
  selectedGimmicks=[name];
  resetTags();
  runSearch();
}

// ===== タグ同期 =====
function resetTags(){
  document.querySelectorAll(".tag").forEach(tag=>{
    tag.classList.remove("active");
    if(selectedChars.includes(tag.textContent) || selectedGimmicks.includes(tag.textContent)){
      tag.classList.add("active");
    }
  });
}

// ===== URL =====
function updateURL(){
  const p=new URLSearchParams();
  if(selectedChars.length)p.set("char",selectedChars.join(","));
  if(selectedGimmicks.length)p.set("gimmick",selectedGimmicks.join(","));
  history.replaceState(null,"","?"+p.toString());
}

function loadURL(){
  const p=new URLSearchParams(location.search);
  selectedChars=p.get("char")?.split(",")||[];
  selectedGimmicks=p.get("gimmick")?.split(",")||[];
  resetTags();
}

// ===== 初期化 =====
window.onload=()=>{
  createTags("charTags",allChars,"char");
  createTags("gimmickTags",allGimmicks,"gimmick");
  loadURL();
  runSearch();
};