// Recupero gli elementi HTML
const grid = document.getElementById("grid");
const playButton = document.querySelector("button");

// Determino la quantità di celle da inserire
const cellsRow = 10;
const cellsColumn = 10;
const cellsTotal = cellsRow * cellsColumn;

// event listener al click del pulsante play
playButton.addEventListener("click", function() {

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild)
    };

// Genero le celle
for (let i = 1; i <= cellsTotal; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    // inserisco il numero
    newCell.innerText = i;
    // stampo in pagina
    grid.appendChild(newCell);

    // aggiungo event listener per il click colorando di azzurro con stampa in console
    newCell.addEventListener("click", function(){
        newCell.classList.toggle("clicked");
        console.log(i);
    });

}
});



