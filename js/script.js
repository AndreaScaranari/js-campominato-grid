// Recupero gli elementi HTML
const grid = document.getElementById("grid");
const playButton = document.querySelector("button");

// Determino la quantità di celle da inserire
const cellsRow = 10;
const cellsColumn = 10;
const cellsTotal = cellsRow * cellsColumn;

// event listener al click del pulsante play
playButton.addEventListener("click", function() {

// Genero le celle
for (let i = 1; i <= cellsTotal; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    grid.appendChild(newCell);
}
});



