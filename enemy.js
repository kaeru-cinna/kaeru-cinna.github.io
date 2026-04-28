const params = new URLSearchParams(location.search);
const id = params.get("id");

const enemies = {
  エースキラー: {
    name: "エースキラー",
    locations: [
      {
        stage: "80",
        wave: 1,
        obstacles: ["ガラス20個"],
        partners: ["エースキラー"]
      },
      {
        stage: "280",
        wave: 1,
        obstacles: ["雪11個","氷13個"],
        partners: ["エースキラー"]
      },
      {
        stage: "480",
        wave: 1,
        obstacles: ["雪8個","氷塊18個"],
        partners: ["エースキラー"]
      },
      {
        stage: "680",
        wave: 1,
        obstacles: ["氷塊24個"],
        partners: ["エースキラー"]
      }
    ]
  },
  
  エルドギメラ: {
    name: "エルドギメラ",
    locations: [
      {
        stage: "610",
        wave: 1,
        obstacles: ["木箱24個"],
        partners: ["エルドギメラ"]
      },
      {
        stage: "643",
        wave: 1,
        obstacles: ["砂12個"],
        partners: ["メフィラス星人","エルドギメラ"]
      },
      {
        stage: "645",
        wave: 2,
        obstacles: ["砂16個"],
        partners: ["メフィラス星人","ベロクロン","ゼットン","エルドギメラ"]
      },
      {
        stage: "647",
        wave: 2,
        obstacles: ["砂20個"],
        partners: ["マグマ星人","ベロクロン","エルドギメラ"]
      },
      {
        stage: "648",
        wave: 2,
        obstacles: ["砂22個"],
        partners: ["メフィラス星人","ゾヴァラス","エルドギメラ"]
      },
      {
        stage: "649",
        wave: 2,
        obstacles: ["砂24個"],
        partners: ["メフィラス星人","ゼットン","エルドギメラ"]
      },
      {
        stage: "691",
        wave: 1,
        obstacles: ["神殿4個","土サー4個"],
        partners: ["ホロボロス","エルドギメラ"]
      },
      {
        stage: "694",
        wave: 2,
        obstacles: ["神殿14個"],
        partners: ["キリエロイド","ガゾート","エルドギメラ"]
      },
      {
        stage: "696",
        wave: 1,
        obstacles: ["神殿18個"],
        partners: ["キリエロイド","ガンQ","エルドギメラ"]
      },
      {
        stage: "699",
        wave: 1,
        obstacles: ["神殿24個"],
        partners: ["ゲバルガ","メフィラス星人","エルドギメラ"]
      },
      {
        stage: "743",
        wave: 1,
        obstacles: ["神殿6個","砂6個"],
        partners: ["ゼットン","エルドギメラ"]
      },
      {
        stage: "745",
        wave: 2,
        obstacles: ["神殿8個","砂8個"],
        partners: ["ゼットン","メフィラス星人","メトロン星人","エルドギメラ"]
      },
      {
        stage: "747",
        wave: 2,
        obstacles: ["神殿10個","砂10個"],
        partners: ["マグマ星人","メトロン星人","エルドギメラ"]
      },
      {
        stage: "748",
        wave: 2,
        obstacles: ["神殿11個","砂11個"],
        partners: ["ゾヴァラス","メフィラス星人","エルドギメラ"]
      }
    ]
  },
  
  エレキング: {
    name: "エレキング",
    locations: [
      {
        stage: "9",
        wave: 2,
        obstacles: ["木箱12個"],
        partners: ["ベムスター","エレキング"]
      },
      {
        stage: "21",
        wave: 1,
        obstacles: ["雪8個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "22",
        wave: 2,
        obstacles: ["雪10個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "23",
        wave: 1,
        obstacles: ["雪12個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "24",
        wave: 2,
        obstacles: ["雪14個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "25",
        wave: 2,
        obstacles: ["雪16個"],
        partners: ["バルタン星人","ベロクロン","ガンQ","エレキング"]
      },
      {
        stage: "26",
        wave: 1,
        obstacles: ["雪18個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      },
      {
        stage: "27",
        wave: 2,
        obstacles: ["雪20個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "28",
        wave: 2,
        obstacles: ["雪22個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "29",
        wave: 1,
        obstacles: ["雪24個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      },
      {
        stage: "71",
        wave: 1,
        obstacles: ["ガラス4個"],
        partners: ["ババルウ","エレキング"]
      },
      {
        stage: "73",
        wave: 1,
        obstacles: ["ガラス8個"],
        partners: ["ババルウ","エレキング"]
      },
      {
        stage: "74",
        wave: 2,
        obstacles: ["ガラス10個"],
        partners: ["ババルウ","レイキュバス","エレキング"]
      },
      {
        stage: "75",
        wave: 2,
        obstacles: ["ガラス12個"],
        partners: ["ババルウ","レイキュバス","ゼットン","エレキング"]
      },
      {
        stage: "77",
        wave: 2,
        obstacles: ["ガラス16個"],
        partners: ["レイキュバス","ゼットン","エレキング"]
      },
      {
        stage: "78",
        wave: 2,
        obstacles: ["ガラス18個"],
        partners: ["ババルウ","レイキュバス","エレキング"]
      },
      {
        stage: "121",
        wave: 1,
        obstacles: ["氷4個","雪4個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "122",
        wave: 2,
        obstacles: ["氷5個","雪5個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "123",
        wave: 1,
        obstacles: ["氷6個","雪6個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "124",
        wave: 2,
        obstacles: ["氷7個","雪7個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "125",
        wave: 2,
        obstacles: ["氷8個","雪8個"],
        partners: ["バルタン星人","ベロクロン","ガンQ","エレキング"]
      },
      {
        stage: "126",
        wave: 1,
        obstacles: ["氷9個","雪9個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      },
      {
        stage: "127",
        wave: 2,
        obstacles: ["氷10個","雪10個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "128",
        wave: 2,
        obstacles: ["氷11個","雪11個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "129",
        wave: 1,
        obstacles: ["氷12個","雪12個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      },
      {
        stage: "171",
        wave: 1,
        obstacles: ["氷塊4個"],
        partners: ["ババルウ","エレキング"]
      },
      {
        stage: "172",
        wave: 2,
        obstacles: ["氷塊5個","雪1個"],
        partners: ["レイキュバス","ゼットン","エレキング"]
      },
      {
        stage: "173",
        wave: 1,
        obstacles: ["氷塊6個","雪2個"],
        partners: ["ババルウ","エレキング"]
      },
      {
        stage: "174",
        wave: 2,
        obstacles: ["氷塊7個","雪3個"],
        partners: ["ババルウ","ゼットン","エレキング"]
      },
      {
        stage: "175",
        wave: 2,
        obstacles: ["氷塊8個","雪4個"],
        partners: ["ババルウ","ゼットン","レイキュバス","エレキング"]
      },
      {
        stage: "178",
        wave: 2,
        obstacles: ["氷塊11個","雪7個"],
        partners: ["ババルウ","ゼットン","エレキング"]
      },
      {
        stage: "221",
        wave: 1,
        obstacles: ["氷4個","雪4個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "222",
        wave: 2,
        obstacles: ["氷5個","雪5個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "223",
        wave: 1,
        obstacles: ["氷6個","雪6個"],
        partners: ["バルタン星人","エレキング"]
      },
      {
        stage: "224",
        wave: 2,
        obstacles: ["氷7個","雪7個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "225",
        wave: 2,
        obstacles: ["氷8個","雪8個"],
        partners: ["バルタン星人","ベロクロン","ガンQ","エレキング"]
      },
      {
        stage: "226",
        wave: 1,
        obstacles: ["氷9個","雪9個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      },
      {
        stage: "227",
        wave: 2,
        obstacles: ["氷10個","雪10個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "228",
        wave: 2,
        obstacles: ["氷11個","雪11個"],
        partners: ["バルタン星人","ベロクロン","エレキング"]
      },
      {
        stage: "229",
        wave: 1,
        obstacles: ["氷12個","雪12個"],
        partners: ["バルタン星人","ガンQ","エレキング"]
      }
    ]
  },
  
  NAME: {
    name: "NAME",
    locations: [
      {
        stage: "2",
        wave: 1,
        obstacles: ["個"],
        partners: ["",""]
      },
      {
        stage: "410",
        wave: 1,
        obstacles: ["個"],
        partners: ["",""]
      }
    ]
  },

  デマーガ: {
    name: "デマーガ",
    locations: [
      {
        stage: "1",
        wave: 1,
        obstacles: [],
        partners: []
      },
      {
        stage: "11",
        wave: 1,
        obstacles: ["巨大植物8個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "13",
        wave: 1,
        obstacles: ["巨大植物12個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "14",
        wave: 2,
        obstacles: ["巨大植物14個"],
        partners: ["タガヌラー","ババルウ","デマーガ"]
      },
      {
        stage: "18",
        wave: 2,
        obstacles: ["巨大植物22個"],
        partners: ["タガヌラー","ババルウ","デマーガ"]
      },
      {
        stage: "32",
        wave: 2,
        obstacles: ["砂利10個"],
        partners: ["スラン星人","ダダ","デマーガ"]
      },
      {
        stage: "34",
        wave: 2,
        obstacles: ["砂利14個"],
        partners: ["スラン星人","ダダ","デマーガ"]
      },
      {
        stage: "35",
        wave: 2,
        obstacles: ["砂利16個"],
        partners: ["モンスアーガー","ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "37",
        wave: 2,
        obstacles: ["砂利20個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "38",
        wave: 2,
        obstacles: ["砂利22個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "111",
        wave: 1,
        obstacles: ["ツル4個","巨大植物4個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "112",
        wave: 2,
        obstacles: ["ツル5個","巨大植物5個"],
        partners: ["タガヌラー","ババルウ","デマーガ"]
      },
      {
        stage: "113",
        wave: 1,
        obstacles: ["ツル6個","巨大植物6個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "114",
        wave: 2,
        obstacles: ["ツル7個","巨大植物7個"],
        partners: ["タガヌラー","ババルウ","デマーガ"]
      },
      {
        stage: "132",
        wave: 2,
        obstacles: ["石化5個","砂利5個"],
        partners: ["モンスアーガー","ダダ","デマーガ"]
      },
      {
        stage: "134",
        wave: 2,
        obstacles: ["石化7個","砂利7個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "135",
        wave: 2,
        obstacles: ["石化8個","砂利8個"],
        partners: ["ダダ","モンスアーガー","スラン星人","デマーガ"]
      },
      {
        stage: "137",
        wave: 2,
        obstacles: ["石化10個","砂利10個"],
        partners: ["ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "138",
        wave: 2,
        obstacles: ["石化11個","砂利11個"],
        partners: ["ダダ","デマーガ"]
      },
      {
        stage: "211",
        wave: 1,
        obstacles: ["ツル4個","巨大植物4個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "213",
        wave: 1,
        obstacles: ["ツル6個","巨大植物6個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "217",
        wave: 2,
        obstacles: ["ツル10個","巨大植物10個"],
        partners: ["タガヌラー","ババルウ","デマーガ"]
      },
      {
        stage: "232",
        wave: 2,
        obstacles: ["石化5個","砂利5個"],
        partners: ["ダダ","デマーガ","デマーガ"]
      },
      {
        stage: "234",
        wave: 2,
        obstacles: ["石化7個","砂利7個"],
        partners: ["ダダ","デマーガ","デマーガ"]
      },
      {
        stage: "235",
        wave: 2,
        obstacles: ["石化8個","砂利8個"],
        partners: ["ダダ","モンスアーガー","スラン星人","デマーガ"]
      },
      {
        stage: "237",
        wave: 2,
        obstacles: ["石化10個","砂利10個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "238",
        wave: 2,
        obstacles: ["石化11個","砂利11個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "311",
        wave: 1,
        obstacles: ["巨大植物8個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "313",
        wave: 1,
        obstacles: ["巨大植物12個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "332",
        wave: 2,
        obstacles: ["砂利10個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "334",
        wave: 2,
        obstacles: ["砂利14個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "335",
        wave: 2,
        obstacles: ["砂利16個"],
        partners: ["ダダ","モンスアーガー","スラン星人","デマーガ"]
      },
      {
        stage: "337",
        wave: 2,
        obstacles: ["砂利20個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "338",
        wave: 2,
        obstacles: ["砂利22個"],
        partners: ["ダダ","デマーガ"]
      },
      {
        stage: "411",
        wave: 1,
        obstacles: ["ツル8個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "412",
        wave: 2,
        obstacles: ["ツル10個"],
        partners: ["ババルウ","タガヌラー","デマーガ"]
      },
      {
        stage: "413",
        wave: 1,
        obstacles: ["ツル12個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "432",
        wave: 2,
        obstacles: ["石化10個"],
        partners: ["ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "434",
        wave: 2,
        obstacles: ["石化14個"],
        partners: ["ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "435",
        wave: 2,
        obstacles: ["石化16個"],
        partners: ["ダダ","スラン星人","モンスアーガー","デマーガ"]
      },
      {
        stage: "437",
        wave: 2,
        obstacles: ["石化20個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "438",
        wave: 2,
        obstacles: ["石化22個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "511",
        wave: 1,
        obstacles: ["ツル4個","巨大植物4個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "513",
        wave: 1,
        obstacles: ["ツル6個","巨大植物6個"],
        partners: ["ババルウ","デマーガ"]
      },
      {
        stage: "514",
        wave: 2,
        obstacles: ["ツル7個","巨大植物7個"],
        partners: ["ババルウ","タガヌラー","デマーガ"]
      },
      {
        stage: "518",
        wave: 2,
        obstacles: ["ツル11個","巨大植物11個"],
        partners: ["ババルウ","タガヌラー","デマーガ"]
      },
      {
        stage: "532",
        wave: 2,
        obstacles: ["石化5個","砂利5個"],
        partners: ["ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "534",
        wave: 2,
        obstacles: ["石化7個","砂利7個"],
        partners: ["ダダ","スラン星人","デマーガ"]
      },
      {
        stage: "535",
        wave: 2,
        obstacles: ["石化8個","砂利8個"],
        partners: ["ダダ","モンスアーガー","スラン星人","デマーガ"]
      },
      {
        stage: "537",
        wave: 2,
        obstacles: ["石化10個","砂利10個"],
        partners: ["ダダ","ダダ","デマーガ"]
      },
      {
        stage: "538",
        wave: 2,
        obstacles: ["石化11個","砂利11個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "585",
        wave: 2,
        obstacles: ["砂利8個","土ナパ4個"],
        partners: ["バルタン星人","ゴルザ","メルバ","デマーガ"]
      },
      {
        stage: "602",
        wave: 2,
        obstacles: ["木箱5個","土ブメ5個"],
        partners: ["ゴモラ","ゾヴァラス","デマーガ"]
      },
      {
        stage: "604",
        wave: 2,
        obstacles: ["木箱14個"],
        partners: ["ゴモラ","ゾヴァラス","デマーガ"]
      },
      {
        stage: "606",
        wave: 1,
        obstacles: ["木箱18個"],
        partners: ["ゴモラ","タガヌラー","デマーガ"]
      },
      {
        stage: "667",
        wave: 2,
        obstacles: ["丸太20個"],
        partners: ["ダダ","モンスアーガー","デマーガ"]
      },
      {
        stage: "712",
        wave: 2,
        obstacles: ["丸太5個","土ロケ5個"],
        partners: ["ババルウ","ガンQ","デマーガ"]
      },
      {
        stage: "715",
        wave: 2,
        obstacles: ["丸太8個","巨大植物8個"],
        partners: ["ダダ","ババルウ","ガンQ","デマーガ"]
      },
      {
        stage: "717",
        wave: 2,
        obstacles: ["丸太10個","巨大植物10個"],
        partners: ["ダダ","ゴルザ","デマーガ"]
      }
    ]
  },

  ババルウ: {
    name: "ババルウ",
    locations: [
      {
        stage: "555",
        wave: 2,
        obstacles: ["巨大植物"],
        partners: ["デマーガ"]
      }
    ]
  },

  タガヌラー: {
    name: "タガヌラー",
    locations: [
      {
        stage: "1",
        wave: 1,
        obstacles: [],
        partners: []
      },
      {
        stage: "11",
        wave: 1,
        obstacles: ["巨大植物8個"],
        partners: ["ババルウ","デマーガ"]
      }
    ]
  }
};

if (enemies[id]) {
  const enemy = enemies[id];

  document.getElementById("enemyName").textContent = enemy.name;
  document.title = enemy.name + "｜敵情報";

  const table = document.getElementById("enemyTable");

  enemy.locations.forEach(loc => {
    const row = table.insertRow();

    row.insertCell(0).textContent = loc.stage;
    row.insertCell(1).textContent = loc.wave ?? "-";

    const obstacleCell = row.insertCell(2);
    obstacleCell.textContent = loc.obstacles && loc.obstacles.length
      ? loc.obstacles.join(" / ")
      : "-";

    const partnerCell = row.insertCell(3);

   if (loc.partners && loc.partners.length) {
      loc.partners.forEach((partnerId, index) => {

        // 自分自身はリンクなしで表示
        if (partnerId === id) {
          const span = document.createElement("span");
          span.textContent = enemies[partnerId].name;
          partnerCell.appendChild(span);

        // 他の敵はリンク
        } else if (enemies[partnerId]) {
          const link = document.createElement("a");
          link.href = "Enemy.html?id=" + partnerId;
          link.textContent = enemies[partnerId].name;
          partnerCell.appendChild(link);
        }

        // 区切り
        if (index < loc.partners.length - 1) {
          partnerCell.appendChild(document.createTextNode(" / "));
        }
      });

    } else {
      partnerCell.textContent = "-";
    }
  });

} else {
  document.getElementById("enemyName").textContent = "敵が見つかりません";
}