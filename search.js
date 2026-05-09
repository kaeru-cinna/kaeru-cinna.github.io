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
      { name: "巨大植物", count: 8 }
    ]
  },
  {
    stage: "12",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 10 }
    ]
  },
  {
    stage: "13",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "巨大植物", count: 12 }
    ]
  },
  {
    stage: "14",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "巨大植物", count: 14 }
    ]
  },
  {
    stage: "15",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "巨大植物", count: 16 }
    ]
  },
  {
    stage: "16",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "巨大植物", count: 18 }
    ]
  },
  {
    stage: "17",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 20 }
    ]
  },
  {
    stage: "18",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "巨大植物", count: 22 }
    ]
  },
  {
    stage: "19",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "巨大植物", count: 24 }
    ]
  },
  {
    stage: "20",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "巨大植物", count: 26 }
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
      { name: "砂", count: 8 }
    ]
  },
  {
    stage: "42",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 10 }
    ]
  },
  {
    stage: "43",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 12 }
    ]
  },
  {
    stage: "44",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 14 }
    ]
  },
  {
    stage: "45",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 16 }
    ]
  },
  {
    stage: "46",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 18 }
    ]
  },
  {
    stage: "47",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 20 }
    ]
  },
  {
    stage: "48",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 22 }
    ]
  },
  {
    stage: "49",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 24 }
    ]
  },
  {
    stage: "50",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "砂", count: 26 }
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
      { name: "ツル", count: 4 }
    ]
  },
  {
    stage: "62",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 6 }
    ]
  },
  {
    stage: "63",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 8 }
    ]
  },
  {
    stage: "64",
    wave: 2,
    characters: ["ダダ","シャゴン","ゴルザ"],
    gimmicks: [
      { name: "ツル", count: 10 }
    ]
  },
  {
    stage: "65",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 12 }
    ]
  },
  {
    stage: "66",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 14 }
    ]
  },
  {
    stage: "67",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 16 }
    ]
  },
  {
    stage: "68",
    wave: 2,
    characters: ["ゴルザ","メルバ","ダダ"],
    gimmicks: [
      { name: "ツル", count: 18 }
    ]
  },
  {
    stage: "69",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 20 }
    ]
  },
  {
    stage: "70",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "ツル", count: 22 }
    ]
  },
  {
    stage: "71",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷", count: 4 }
    ]
  },
  {
    stage: "72",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷", count: 6 }
    ]
  },
  {
    stage: "73",
    wave: 1,
    characters: ["エレキング","ババルウ"],
    gimmicks: [
      { name: "氷", count: 8 }
    ]
  },
  {
    stage: "74",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷", count: 10 }
    ]
  },
  {
    stage: "75",
    wave: 2,
    characters: ["エレキング","レイキュバス","ババルウ","ゼットン"],
    gimmicks: [
      { name: "氷", count: 12 }
    ]
  },
  {
    stage: "76",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷", count: 14 }
    ]
  },
  {
    stage: "77",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷", count: 16 }
    ]
  },
  {
    stage: "78",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷", count: 18 }
    ]
  },
  {
    stage: "79",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷", count: 20 }
    ]
  },
  {
    stage: "80",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "氷", count: 22 }
    ]
  },
  {
    stage: "81",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 4 }
    ]
  },
  {
    stage: "82",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "石化", count: 6 }
    ]
  },
  {
    stage: "83",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 8 }
    ]
  },
  {
    stage: "84",
    wave: 2,
    characters: ["バルタン星人","ダダ","スラン星人"],
    gimmicks: [
      { name: "石化", count: 10 }
    ]
  },
  {
    stage: "85",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "石化", count: 12 }
    ]
  },
  {
    stage: "86",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "石化", count: 14 }
    ]
  },
  {
    stage: "87",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "石化", count: 16 }
    ]
  },
  {
    stage: "88",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 18 }
    ]
  },
  {
    stage: "89",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "石化", count: 20 }
    ]
  },
  {
    stage: "90",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "石化", count: 22 }
    ]
  },
  {
    stage: "91",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 4 }
    ]
  },
  {
    stage: "92",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 6 }
    ]
  },
  {
    stage: "93",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 8 }
    ]
  },
  {
    stage: "94",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "石化", count: 10 }
    ]
  },
  {
    stage: "95",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 12 }
    ]
  },
  {
    stage: "96",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 14 }
    ]
  },
  {
    stage: "97",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 16 }
    ]
  },
  {
    stage: "98",
    wave: 2,
    characters: ["ベロクロン","ベムスター","ガゾート"],
    gimmicks: [
      { name: "石化", count: 18 }
    ]
  },
  {
    stage: "99",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 20 }
    ]
  },
  {
    stage: "100",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "石化", count: 22 }
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
      { name: "ツル", count: 4 },
      { name: "巨大植物", count: 4 }
    ]
  },
  {
    stage: "112",
    wave: 2,
    characters: ["デマーガ","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 5 },
      { name: "巨大植物", count: 5 }
    ]
  },
  {
    stage: "113",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ツル", count: 6 },
      { name: "巨大植物", count: 6 }
    ]
  },
  {
    stage: "114",
    wave: 2,
    characters: ["タガヌラー","ババルウ","デマーガ"],
    gimmicks: [
      { name: "ツル", count: 7 },
      { name: "巨大植物", count: 7 }
    ]
  },
  {
    stage: "115",
    wave: 2,
    characters: ["ババルウ","タガヌラー","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ツル", count: 8 },
      { name: "巨大植物", count: 8 }
    ]
  },
  {
    stage: "116",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 9 },
      { name: "巨大植物", count: 9 }
    ]
  },
  {
    stage: "117",
    wave: 2,
    characters: ["タガヌラー","ババルウ","タガヌラー"],
    gimmicks: [
      { name: "ツル", count: 10 },
      { name: "巨大植物", count: 10 }
    ]
  },
  {
    stage: "118",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "ツル", count: 11 },
      { name: "巨大植物", count: 11 }
    ]
  },
  {
    stage: "119",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 12 },
      { name: "巨大植物", count: 12 }
    ]
  },
  {
    stage: "120",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "ツル", count: 18 },
      { name: "巨大植物", count: 6 }
    ]
  },
  {
    stage: "121",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷", count: 4 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "122",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷", count: 5 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "123",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "124",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "125",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "126",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "127",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "128",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "129",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "130",
    wave: 1,
    characters: ["ダークルギエル"],
    gimmicks: [
      { name: "氷", count: 18 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "131",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "132",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "133",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "134",
    wave: 2,
    characters: ["ダダ","デマーガ","モンスアーガー"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "135",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","デマーガ"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "136",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "137",
    wave: 2,
    characters: ["スラン星人","ダダ","デマーガ"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "138",
    wave: 2,
    characters: ["ダダ","デマーガ","デマーガ"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "139",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "140",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "石化", count: 18 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "141",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "砂", count: 4 }
    ]
  },
  {
    stage: "142",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "砂", count: 5 }
    ]
  },
  {
    stage: "143",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "砂", count: 6 }
    ]
  },
  {
    stage: "144",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "砂", count: 7 }
    ]
  },
  {
    stage: "145",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂", count: 8 }
    ]
  },
  {
    stage: "146",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "砂", count: 9 }
    ]
  },
  {
    stage: "147",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "砂", count: 10 }
    ]
  },
  {
    stage: "148",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "砂", count: 11 }
    ]
  },
  {
    stage: "149",
    wave: 1,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "砂", count: 12 }
    ]
  },
  {
    stage: "150",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "石化", count: 18 },
      { name: "砂", count: 6 }
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
      { name: "巨大植物", count: 1 }
    ]
  },
  {
    stage: "163",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 6 },
      { name: "巨大植物", count: 2 }
    ]
  },
  {
    stage: "164",
    wave: 2,
    characters: ["ダダ","シャゴン","ゴルザ"],
    gimmicks: [
      { name: "丸太", count: 7 },
      { name: "巨大植物", count: 3 }
    ]
  },
  {
    stage: "165",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ","シャゴン"],
    gimmicks: [
      { name: "丸太", count: 8 },
      { name: "巨大植物", count: 4 }
    ]
  },
  {
    stage: "166",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "丸太", count: 9 },
      { name: "巨大植物", count: 5 }
    ]
  },
  {
    stage: "167",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 10 },
      { name: "巨大植物", count: 6 }
    ]
  },
  {
    stage: "168",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "丸太", count: 11 },
      { name: "巨大植物", count: 7 }
    ]
  },
  {
    stage: "169",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "丸太", count: 12 },
      { name: "巨大植物", count: 8 }
    ]
  },
  {
    stage: "170",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "丸太", count: 13 },
      { name: "巨大植物", count: 9 }
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
      { name: "岩石", count: 4 }
    ]
  },
  {
    stage: "182",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "岩石", count: 5 },
      { name: "砂利", count: 1 }
    ]
  },
  {
    stage: "183",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "岩石", count: 6 },
      { name: "砂利", count: 2 }
    ]
  },
  {
    stage: "184",
    wave: 2,
    characters: ["バルタン星人","ダダ","スラン星人"],
    gimmicks: [
      { name: "岩石", count: 7 },
      { name: "砂利", count: 3 }
    ]
  },
  {
    stage: "185",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "岩石", count: 8 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "186",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩石", count: 9 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "187",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "岩石", count: 10 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "188",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "岩石", count: 11 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "189",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "岩石", count: 12 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "190",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "岩石", count: 13 },
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
      { name: "砂", count: 1 }
    ]
  },
  {
    stage: "193",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 6 },
      { name: "砂", count: 2 }
    ]
  },
  {
    stage: "194",
    wave: 2,
    characters: ["ベロクロン","ベムスター","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 7 },
      { name: "砂", count: 3 }
    ]
  },
  {
    stage: "195",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 8 },
      { name: "砂", count: 4 }
    ]
  },
  {
    stage: "196",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 9 },
      { name: "砂", count: 5 }
    ]
  },
  {
    stage: "197",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "神殿", count: 10 },
      { name: "砂", count: 6 }
    ]
  },
  {
    stage: "198",
    wave: 2,
    characters: ["ベロクロン","ベムスター","マグマ星人"],
    gimmicks: [
      { name: "神殿", count: 11 },
      { name: "砂", count: 7 }
    ]
  },
  {
    stage: "199",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "神殿", count: 12 },
      { name: "砂", count: 8 }
    ]
  },
  {
    stage: "200",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "神殿", count: 13 },
      { name: "砂", count: 9 }
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
      { name: "ツル", count: 4 },
      { name: "巨大植物", count: 4 }
    ]
  },
  {
    stage: "212",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 5 },
      { name: "巨大植物", count: 5 }
    ]
  },
  {
    stage: "213",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "ツル", count: 6 },
      { name: "巨大植物", count: 6 }
    ]
  },
  {
    stage: "214",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "ツル", count: 7 },
      { name: "巨大植物", count: 7 }
    ]
  },
  {
    stage: "215",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "ツル", count: 8 },
      { name: "巨大植物", count: 8 }
    ]
  },
  {
    stage: "216",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 9 },
      { name: "巨大植物", count: 9 }
    ]
  },
  {
    stage: "217",
    wave: 2,
    characters: ["デマーガ","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 10 },
      { name: "巨大植物", count: 10 }
    ]
  },
  {
    stage: "218",
    wave: 2,
    characters: ["タガヌラー","ババルウ","モンスアーガー"],
    gimmicks: [
      { name: "ツル", count: 11 },
      { name: "巨大植物", count: 11 }
    ]
  },
  {
    stage: "219",
    wave: 1,
    characters: ["モンスアーガー","ガンQ","ババルウ"],
    gimmicks: [
      { name: "ツル", count: 12 },
      { name: "巨大植物", count: 12 }
    ]
  },
  {
    stage: "220",
    wave: 1,
    characters: ["巨大ヤプール"],
    gimmicks: [
      { name: "ツル", count: 8 },
      { name: "巨大植物", count: 16 }
    ]
  },
  {
    stage: "221",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷", count: 4 },
      { name: "雪", count: 4 }
    ]
  },
  {
    stage: "222",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷", count: 5 },
      { name: "雪", count: 5 }
    ]
  },
  {
    stage: "223",
    wave: 1,
    characters: ["バルタン星人","エレキング"],
    gimmicks: [
      { name: "氷", count: 6 },
      { name: "雪", count: 6 }
    ]
  },
  {
    stage: "224",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷", count: 7 },
      { name: "雪", count: 7 }
    ]
  },
  {
    stage: "225",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","ガンQ","エレキング"],
    gimmicks: [
      { name: "氷", count: 8 },
      { name: "雪", count: 8 }
    ]
  },
  {
    stage: "226",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷", count: 9 },
      { name: "雪", count: 9 }
    ]
  },
  {
    stage: "227",
    wave: 2,
    characters: ["エレキング","バルタン星人","ベロクロン"],
    gimmicks: [
      { name: "氷", count: 10 },
      { name: "雪", count: 10 }
    ]
  },
  {
    stage: "228",
    wave: 2,
    characters: ["バルタン星人","ベロクロン","エレキング"],
    gimmicks: [
      { name: "氷", count: 11 },
      { name: "雪", count: 11 }
    ]
  },
  {
    stage: "229",
    wave: 1,
    characters: ["バルタン星人","エレキング","ガンQ"],
    gimmicks: [
      { name: "氷", count: 12 },
      { name: "雪", count: 12 }
    ]
  },
  {
    stage: "230",
    wave: 1,
    characters: ["レイキュバス"],
    gimmicks: [
      { name: "氷", count: 8 },
      { name: "雪", count: 16 }
    ]
  },
  {
    stage: "231",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "砂利", count: 4 }
    ]
  },
  {
    stage: "232",
    wave: 2,
    characters: ["デマーガ","デマーガ","ダダ"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "砂利", count: 5 }
    ]
  },
  {
    stage: "233",
    wave: 1,
    characters: ["スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "砂利", count: 6 }
    ]
  },
  {
    stage: "234",
    wave: 2,
    characters: ["デマーガ","デマーガ","ダダ"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "砂利", count: 7 }
    ]
  },
  {
    stage: "235",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ","スラン星人"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂利", count: 8 }
    ]
  },
  {
    stage: "236",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "砂利", count: 9 }
    ]
  },
  {
    stage: "237",
    wave: 2,
    characters: ["モンスアーガー","ダダ","デマーガ"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "砂利", count: 10 }
    ]
  },
  {
    stage: "238",
    wave: 2,
    characters: ["デマーガ","ダダ","ダダ"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "砂利", count: 11 }
    ]
  },
  {
    stage: "239",
    wave: 1,
    characters: ["スラン星人","モンスアーガー","ダダ"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "砂利", count: 12 }
    ]
  },
  {
    stage: "240",
    wave: 1,
    characters: ["バードン"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂利", count: 16 }
    ]
  },
  {
    stage: "241",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "砂", count: 4 }
    ]
  },
  {
    stage: "242",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "砂", count: 5 }
    ]
  },
  {
    stage: "243",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "砂", count: 6 }
    ]
  },
  {
    stage: "244",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "砂", count: 7 }
    ]
  },
  {
    stage: "245",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂", count: 8 }
    ]
  },
  {
    stage: "246",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "砂", count: 9 }
    ]
  },
  {
    stage: "247",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "砂", count: 10 }
    ]
  },
  {
    stage: "248",
    wave: 2,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "砂", count: 11 }
    ]
  },
  {
    stage: "249",
    wave: 1,
    characters: ["デスドラゴ","ベムスター","ゴモラ"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "砂", count: 12 }
    ]
  },
  {
    stage: "250",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "砂", count: 16 }
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
      { name: "巨大植物", count: 4 },
      { name: "ツル", count: 4 }
    ]
  },
  {
    stage: "262",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 5 },
      { name: "ツル", count: 5 }
    ]
  },
  {
    stage: "263",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 6 },
      { name: "ツル", count: 6 }
    ]
  },
  {
    stage: "264",
    wave: 2,
    characters: ["ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 7 },
      { name: "ツル", count: 7 }
    ]
  },
  {
    stage: "265",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 8 },
      { name: "ツル", count: 8 }
    ]
  },
  {
    stage: "266",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 9 },
      { name: "ツル", count: 9 }
    ]
  },
  {
    stage: "267",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 10 },
      { name: "ツル", count: 10 }
    ]
  },
  {
    stage: "268",
    wave: 2,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 11 },
      { name: "ツル", count: 11 }
    ]
  },
  {
    stage: "269",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "巨大植物", count: 12 },
      { name: "ツル", count: 12 }
    ]
  },
  {
    stage: "270",
    wave: 1,
    characters: ["ニジカガチ"],
    gimmicks: [
      { name: "巨大植物", count: 11 },
      { name: "ツル", count: 13 }
    ]
  },
  {
    stage: "271",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "雪", count: 4 },
      { name: "氷", count: 4 }
    ]
  },
  {
    stage: "272",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 5 },
      { name: "氷", count: 5 }
    ]
  },
  {
    stage: "273",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "雪", count: 6 },
      { name: "氷", count: 6 }
    ]
  },
  {
    stage: "274",
    wave: 2,
    characters: ["ババルウ","エレキング","ゼットン"],
    gimmicks: [
      { name: "雪", count: 7 },
      { name: "氷", count: 7 }
    ]
  },
  {
    stage: "275",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "雪", count: 8 },
      { name: "氷", count: 8 }
    ]
  },
  {
    stage: "276",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 9 },
      { name: "氷", count: 9 }
    ]
  },
  {
    stage: "277",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 10 },
      { name: "氷", count: 10 }
    ]
  },
  {
    stage: "278",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "氷", count: 11 }
    ]
  },
  {
    stage: "279",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "雪", count: 12 },
      { name: "氷", count: 12 }
    ]
  },
  {
    stage: "280",
    wave: 1,
    characters: ["エースキラー"],
    gimmicks: [
      { name: "雪", count: 11 },
      { name: "氷", count: 13 }
    ]
  },
  {
    stage: "281",
    wave: 1,
    characters: ["バードン","バルタン星人"],
    gimmicks: [
      { name: "砂利", count: 4 },
      { name: "石化", count: 4 }
    ]
  },
  {
    stage: "282",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 5 },
      { name: "石化", count: 5 }
    ]
  },
  {
    stage: "283",
    wave: 1,
    characters: ["バードン","バルタン星人"],
    gimmicks: [
      { name: "砂利", count: 6 },
      { name: "石化", count: 6 }
    ]
  },
  {
    stage: "284",
    wave: 2,
    characters: ["ダダ","バルタン星人","バードン"],
    gimmicks: [
      { name: "砂利", count: 7 },
      { name: "石化", count: 7 }
    ]
  },
  {
    stage: "285",
    wave: 2,
    characters: ["モンスアーガー","ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 8 },
      { name: "石化", count: 8 }
    ]
  },
  {
    stage: "286",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 9 },
      { name: "石化", count: 9 }
    ]
  },
  {
    stage: "287",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 10 },
      { name: "石化", count: 10 }
    ]
  },
  {
    stage: "288",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "砂利", count: 11 },
      { name: "石化", count: 11 }
    ]
  },
  {
    stage: "289",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "砂利", count: 12 },
      { name: "石化", count: 12 }
    ]
  },
  {
    stage: "290",
    wave: 1,
    characters: ["マグマ星人"],
    gimmicks: [
      { name: "砂利", count: 11 },
      { name: "石化", count: 13 }
    ]
  },
  {
    stage: "291",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "砂", count: 4 },
      { name: "石化", count: 4 }
    ]
  },
  {
    stage: "292",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂", count: 5 },
      { name: "石化", count: 5 }
    ]
  },
  {
    stage: "293",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "砂", count: 6 },
      { name: "石化", count: 6 }
    ]
  },
  {
    stage: "294",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人"],
    gimmicks: [
      { name: "砂", count: 7 },
      { name: "石化", count: 7 }
    ]
  },
  {
    stage: "295",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂", count: 8 },
      { name: "石化", count: 8 }
    ]
  },
  {
    stage: "296",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "砂", count: 9 },
      { name: "石化", count: 9 }
    ]
  },
  {
    stage: "297",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "砂", count: 10 },
      { name: "石化", count: 10 }
    ]
  },
  {
    stage: "298",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人"],
    gimmicks: [
      { name: "砂", count: 11 },
      { name: "石化", count: 11 }
    ]
  },
  {
    stage: "299",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "砂", count: 12 },
      { name: "石化", count: 12 }
    ]
  },
  {
    stage: "300",
    wave: 1,
    characters: ["グランドキング"],
    gimmicks: [
      { name: "砂", count: 11 },
      { name: "石化", count: 13 }
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
      { name: "巨大植物", count: 8 }
    ]
  },
  {
    stage: "312",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 10 }
    ]
  },
  {
    stage: "313",
    wave: 1,
    characters: ["ババルウ","デマーガ"],
    gimmicks: [
      { name: "巨大植物", count: 12 }
    ]
  },
  {
    stage: "314",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 14 }
    ]
  },
  {
    stage: "315",
    wave: 2,
    characters: ["ババルウ","タガヌラー","ガンQ","モンスアーガー"],
    gimmicks: [
      { name: "巨大植物", count: 16 }
    ]
  },
  {
    stage: "316",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "巨大植物", count: 18 }
    ]
  },
  {
    stage: "317",
    wave: 2,
    characters: ["モンスアーガー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 20 }
    ]
  },
  {
    stage: "318",
    wave: 2,
    characters: ["タガヌラー","タガヌラー","ババルウ"],
    gimmicks: [
      { name: "巨大植物", count: 22 }
    ]
  },
  {
    stage: "319",
    wave: 1,
    characters: ["ババルウ","モンスアーガー","ガンQ"],
    gimmicks: [
      { name: "巨大植物", count: 24 }
    ]
  },
  {
    stage: "320",
    wave: 1,
    characters: ["ダークメフィスト"],
    gimmicks: [
      { name: "巨大植物", count: 26 }
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
      { name: "砂", count: 8 }
    ]
  },
  {
    stage: "342",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 10 }
    ]
  },
  {
    stage: "343",
    wave: 1,
    characters: ["ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 12 }
    ]
  },
  {
    stage: "344",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 14 }
    ]
  },
  {
    stage: "345",
    wave: 2,
    characters: ["ベムスター","ベムスター","デスドラゴ","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 16 }
    ]
  },
  {
    stage: "346",
    wave: 1,
    characters: ["ベムスター","ゴモラ","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 18 }
    ]
  },
  {
    stage: "347",
    wave: 2,
    characters: ["ゴモラ","ベムスター","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 20 }
    ]
  },
  {
    stage: "348",
    wave: 2,
    characters: ["ベムスター","デスドラゴ","ゴモラ"],
    gimmicks: [
      { name: "砂", count: 22 }
    ]
  },
  {
    stage: "349",
    wave: 1,
    characters: ["ベムスター","ゴモラ","デスドラゴ"],
    gimmicks: [
      { name: "砂", count: 24 }
    ]
  },
  {
    stage: "350",
    wave: 1,
    characters: ["ゼットン"],
    gimmicks: [
      { name: "砂", count: 26 }
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
      { name: "ツル", count: 4 },
      { name: "丸太", count: 4 }
    ]
  },
  {
    stage: "362",
    wave: 2,
    characters: ["シャゴン","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 5 },
      { name: "丸太", count: 5 }
    ]
  },
  {
    stage: "363",
    wave: 1,
    characters: ["ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 6 },
      { name: "丸太", count: 6 }
    ]
  },
  {
    stage: "364",
    wave: 2,
    characters: ["ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 7 },
      { name: "丸太", count: 7 }
    ]
  },
  {
    stage: "365",
    wave: 2,
    characters: ["ゴルザ","ダダ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 8 },
      { name: "丸太", count: 8 }
    ]
  },
  {
    stage: "366",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 9 },
      { name: "丸太", count: 9 }
    ]
  },
  {
    stage: "367",
    wave: 2,
    characters: ["ダダ","ゴルザ","メルバ"],
    gimmicks: [
      { name: "ツル", count: 10 },
      { name: "丸太", count: 10 }
    ]
  },
  {
    stage: "368",
    wave: 2,
    characters: ["ゴルザ","メルバ","シャゴン"],
    gimmicks: [
      { name: "ツル", count: 11 },
      { name: "丸太", count: 11 }
    ]
  },
  {
    stage: "369",
    wave: 1,
    characters: ["ゴルザ","シャゴン","メルバ"],
    gimmicks: [
      { name: "ツル", count: 12 },
      { name: "丸太", count: 12 }
    ]
  },
  {
    stage: "370",
    wave: 1,
    characters: ["デストルドス"],
    gimmicks: [
      { name: "ツル", count: 8 },
      { name: "丸太", count: 16 }
    ]
  },
  {
    stage: "371",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷", count: 4 },
      { name: "氷塊", count: 4 }
    ]
  },
  {
    stage: "372",
    wave: 2,
    characters: ["ババルウ","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷", count: 5 },
      { name: "氷塊", count: 5 }
    ]
  },
  {
    stage: "373",
    wave: 1,
    characters: ["ババルウ","エレキング"],
    gimmicks: [
      { name: "氷", count: 6 },
      { name: "氷塊", count: 6 }
    ]
  },
  {
    stage: "374",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷", count: 7 },
      { name: "氷塊", count: 7 }
    ]
  },
  {
    stage: "375",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン","ババルウ"],
    gimmicks: [
      { name: "氷", count: 8 },
      { name: "氷塊", count: 8 }
    ]
  },
  {
    stage: "376",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷", count: 9 },
      { name: "氷塊", count: 9 }
    ]
  },
  {
    stage: "377",
    wave: 2,
    characters: ["エレキング","レイキュバス","ゼットン"],
    gimmicks: [
      { name: "氷", count: 10 },
      { name: "氷塊", count: 10 }
    ]
  },
  {
    stage: "378",
    wave: 2,
    characters: ["ババルウ","エレキング","レイキュバス"],
    gimmicks: [
      { name: "氷", count: 11 },
      { name: "氷塊", count: 11 }
    ]
  },
  {
    stage: "379",
    wave: 1,
    characters: ["ゼットン","レイキュバス","ババルウ"],
    gimmicks: [
      { name: "氷", count: 12 },
      { name: "氷塊", count: 12 }
    ]
  },
  {
    stage: "380",
    wave: 1,
    characters: ["タイラント"],
    gimmicks: [
      { name: "氷", count: 8 },
      { name: "氷塊", count: 16 }
    ]
  },
  {
    stage: "381",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "岩石", count: 4 }
    ]
  },
  {
    stage: "382",
    wave: 2,
    characters: ["ダダ","バードン","スラン星人"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "岩石", count: 5 }
    ]
  },
  {
    stage: "383",
    wave: 1,
    characters: ["バルタン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "岩石", count: 6 }
    ]
  },
  {
    stage: "384",
    wave: 2,
    characters: ["ダダ","バルタン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "岩石", count: 7 }
    ]
  },
  {
    stage: "385",
    wave: 2,
    characters: ["モンスアーガー","ダダ","スラン星人","バードン"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "岩石", count: 8 }
    ]
  },
  {
    stage: "386",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "岩石", count: 9 }
    ]
  },
  {
    stage: "387",
    wave: 2,
    characters: ["バルタン星人","バードン","スラン星人"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "岩石", count: 10 }
    ]
  },
  {
    stage: "388",
    wave: 2,
    characters: ["バードン","スラン星人","ダダ"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "岩石", count: 11 }
    ]
  },
  {
    stage: "389",
    wave: 1,
    characters: ["バードン","バルタン星人","スラン星人"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "岩石", count: 12 }
    ]
  },
  {
    stage: "390",
    wave: 1,
    characters: ["ギャラクトロン"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "岩石", count: 16 }
    ]
  },
  {
    stage: "391",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 4 },
      { name: "神殿", count: 4 }
    ]
  },
  {
    stage: "392",
    wave: 2,
    characters: ["ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 5 },
      { name: "神殿", count: 5 }
    ]
  },
  {
    stage: "393",
    wave: 1,
    characters: ["ベムスター","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 6 },
      { name: "神殿", count: 6 }
    ]
  },
  {
    stage: "394",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "石化", count: 7 },
      { name: "神殿", count: 7 }
    ]
  },
  {
    stage: "395",
    wave: 2,
    characters: ["ベムスター","ベロクロン","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "神殿", count: 8 }
    ]
  },
  {
    stage: "396",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 9 },
      { name: "神殿", count: 9 }
    ]
  },
  {
    stage: "397",
    wave: 2,
    characters: ["ベムスター","マグマ星人","ガゾート"],
    gimmicks: [
      { name: "石化", count: 10 },
      { name: "神殿", count: 10 }
    ]
  },
  {
    stage: "398",
    wave: 2,
    characters: ["ベムスター","ベロクロン","ガゾート"],
    gimmicks: [
      { name: "石化", count: 11 },
      { name: "神殿", count: 11 }
    ]
  },
  {
    stage: "399",
    wave: 1,
    characters: ["ガゾート","マグマ星人","ベロクロン"],
    gimmicks: [
      { name: "石化", count: 12 },
      { name: "神殿", count: 12 }
    ]
  },
  {
    stage: "400",
    wave: 1,
    characters: ["ホロボロス"],
    gimmicks: [
      { name: "石化", count: 8 },
      { name: "神殿", count: 16 }
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