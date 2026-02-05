const pieces = {
  r:"♜", n:"♞", b:"♝", q:"♛", k:"♚", p:"♟",
  R:"♖", N:"♘", B:"♗", Q:"♕", K:"♔", P:"♙"
};

let board = [];

function initBoard() {
  board = [
    ["r","n","b","q","k","b","n","r"],
    ["p","p","p","p","p","p","p","p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P","P","P","P","P","P","P","P"],
    ["R","N","B","Q","K","B","N","R"]
  ];
  renderBoard();
}

function renderBoard() {
  const e = document.getElementById("echiquier");
  e.innerHTML = "";
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const d = document.createElement("div");
      d.className = "case " + ((x + y) % 2 === 0 ? "claire" : "foncee");
      if (board[y][x]) d.textContent = pieces[board[y][x]];
      e.appendChild(d);
    }
  }
}
