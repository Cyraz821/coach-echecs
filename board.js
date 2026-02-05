// board.js
// ===============================
// Échiquier simple et fiable
// ===============================

const boardInitial = [
  ["♜","♞","♝","♛","♚","♝","♞","♜"],
  ["♟","♟","♟","♟","♟","♟","♟","♟"],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["♙","♙","♙","♙","♙","♙","♙","♙"],
  ["♖","♘","♗","♕","♔","♗","♘","♖"]
];

function initBoard() {
  const container = document.getElementById("echiquier");
  if (!container) return;

  container.innerHTML = "";

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("case");

      const isLight = (row + col) % 2 === 0;
      square.classList.add(isLight ? "claire" : "foncee");

      square.textContent = boardInitial[row][col];

      container.appendChild(square);
    }
  }
}
