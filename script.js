const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.className = "gridSquare";
    grid.appendChild(gridSquare);
}