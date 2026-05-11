const ROWS = 8;
const COLS = 8;

const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple"
];

let board = [];
let editorBoard = [];

let isEditorMode = true;

let selected = null;

let moves = 20;

/* =========================
   初期化
========================= */

function createEmptyBoard(){
    let arr = [];

    for(let r=0;r<ROWS;r++){

        let row = [];

        for(let c=0;c<COLS;c++){
            row.push(null);
        }

        arr.push(row);
    }

    return arr;
}

editorBoard = createEmptyBoard();
board = structuredClone(editorBoard);

renderBoard();

/* =========================
   描画
========================= */

function renderBoard(){

    const boardDiv = document.getElementById("board");

    boardDiv.innerHTML = "";

    for(let r=0;r<ROWS;r++){

        for(let c=0;c<COLS;c++){

            const cell = document.createElement("div");

            cell.className = "cell";

            const color = board[r][c];

            if(color){
                cell.classList.add(color);
            }

            if(selected &&
               selected.r === r &&
               selected.c === c){
                cell.classList.add("selected");
            }

            cell.onclick = () => {
                handleCellClick(r,c);
            };

            boardDiv.appendChild(cell);
        }
    }

    document.getElementById("moves").textContent =
        "手数:" + moves;
}

/* =========================
   クリック
========================= */

function handleCellClick(r,c){

    if(isEditorMode){
        handleEditorClick(r,c);
        return;
    }

    handleGameClick(r,c);
}

/* =========================
   エディタ
========================= */

function handleEditorClick(r,c){

    const current = board[r][c];

    if(current === null){
        board[r][c] = COLORS[0];
    }
    else{

        const index = COLORS.indexOf(current);

        if(index === COLORS.length - 1){
            board[r][c] = null;
        }
        else{
            board[r][c] = COLORS[index + 1];
        }
    }

    editorBoard = structuredClone(board);

    renderBoard();
}

/* =========================
   ゲーム
========================= */

function handleGameClick(r,c){

    if(moves <= 0){
        return;
    }

    if(!selected){

        selected = {r,c};

        renderBoard();

        return;
    }

    const dr = Math.abs(selected.r - r);
    const dc = Math.abs(selected.c - c);

    if(dr + dc !== 1){

        selected = null;

        renderBoard();

        return;
    }

    swap(
        selected.r,
        selected.c,
        r,
        c
    );

    const matches = findMatches();

    if(matches.length === 0){

        swap(
            selected.r,
            selected.c,
            r,
            c
        );

        selected = null;

        renderBoard();

        return;
    }

    moves--;

    processMatches(matches);

    selected = null;

    renderBoard();
}

/* =========================
   スワップ
========================= */

function swap(r1,c1,r2,c2){

    const temp = board[r1][c1];

    board[r1][c1] = board[r2][c2];

    board[r2][c2] = temp;
}

/* =========================
   マッチ検出
========================= */

function findMatches(){

    let matches = [];

    // 横
    for(let r=0;r<ROWS;r++){

        let count = 1;

        for(let c=1;c<COLS;c++){

            if(board[r][c] &&
               board[r][c] === board[r][c-1]){

                count++;
            }
            else{

                if(count >= 3){

                    for(let k=0;k<count;k++){

                        matches.push({
                            r:r,
                            c:c-1-k
                        });
                    }
                }

                count = 1;
            }
        }

        if(count >= 3){

            for(let k=0;k<count;k++){

                matches.push({
                    r:r,
                    c:COLS-1-k
                });
            }
        }
    }

    // 縦
    for(let c=0;c<COLS;c++){

        let count = 1;

        for(let r=1;r<ROWS;r++){

            if(board[r][c] &&
               board[r][c] === board[r-1][c]){

                count++;
            }
            else{

                if(count >= 3){

                    for(let k=0;k<count;k++){

                        matches.push({
                            r:r-1-k,
                            c:c
                        });
                    }
                }

                count = 1;
            }
        }

        if(count >= 3){

            for(let k=0;k<count;k++){

                matches.push({
                    r:ROWS-1-k,
                    c:c
                });
            }
        }
    }

    return matches;
}

/* =========================
   消去
========================= */

async function processMatches(matches){

    // 光る
    const cells = document.querySelectorAll(".cell");

    for(const m of matches){

        const index = m.r * COLS + m.c;

        cells[index].style.outline =
            "4px solid white";
    }

    await sleep(300);

    for(const m of matches){

        board[m.r][m.c] = null;
    }

    renderBoard();

    await sleep(200);

    await applyGravity();

    const chain = findMatches();

    if(chain.length > 0){

        processMatches(chain);
    }
}

/* =========================
   逆重力
========================= */

async function applyGravity(){

    for(let c=0;c<COLS;c++){

        for(let r=0;r<ROWS;r++){

            if(board[r][c] === null){

                for(let k=r+1;k<ROWS;k++){

                    if(board[k][c] !== null){

                        board[r][c] =
                            board[k][c];

                        board[k][c] = null;

                        renderBoard();

                        await sleep(50);

                        break;
                    }
                }
            }
        }
    }

    // 最下段補充
    for(let c=0;c<COLS;c++){

        for(let r=ROWS-1;r>=0;r--){

            if(board[r][c] === null){

                board[r][c] =
                    COLORS[
                        Math.floor(
                            Math.random()
                            * COLORS.length
                        )
                    ];
            }
        }
    }

    renderBoard();
}

/* =========================
   保存
========================= */

document.getElementById("saveBtn")
.onclick = () => {

    localStorage.setItem(
        "A1",
        JSON.stringify(editorBoard)
    );
};

/* =========================
   読込
========================= */

document.getElementById("loadBtn")
.onclick = () => {

    const data =
        localStorage.getItem("A1");

    if(!data){
        return;
    }

    editorBoard = JSON.parse(data);

    board =
        structuredClone(editorBoard);

    isEditorMode = true;

    renderBoard();
};

/* =========================
   スタート
========================= */

document.getElementById("startBtn")
.onclick = () => {

    board =
        structuredClone(editorBoard);

    // null埋め
    for(let r=0;r<ROWS;r++){

        for(let c=0;c<COLS;c++){

            if(board[r][c] === null){

                board[r][c] =
                    COLORS[
                        Math.floor(
                            Math.random()
                            * COLORS.length
                        )
                    ];
            }
        }
    }

    isEditorMode = false;

    selected = null;

    moves = 20;

    renderBoard();

    const matches = findMatches();

    if(matches.length > 0){
        processMatches(matches);
    }
};

/* =========================
   エディタボタン
========================= */

document.getElementById("editorBtn")
.onclick = () => {

    isEditorMode = true;
};

/* ========================= */

function sleep(ms){

    return new Promise(resolve => {
        setTimeout(resolve,ms);
    });
}