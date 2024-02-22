const btnNewGrid = document.querySelector(".btnNewGrid");
btnNewGrid.addEventListener('click', () => {
    let gridSize = prompt("Please enter new grid size, no larger than 100.")
    if (gridSize <= 100) {
        generateGrid(gridSize);
        createEtchASketch();
    }
})

function createEtchASketch() {
    const gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            const squareStyle = getComputedStyle(square);
            const backgroundColor = squareStyle.backgroundColor;
            if (backgroundColor === "rgb(100, 149, 237)") {
                square.style.backgroundColor = "rgb(0, 0, 139)";
            }
        })
    })
}

function generateGrid(gridSize) {
    const grid = document.querySelector(".grid");

    for (i = 0; i < gridSize ** 2; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        gridSquare.style.width = 960 / gridSize + "px";
        gridSquare.style.height = 960 / gridSize + "px";
        grid.appendChild(gridSquare);
    }
}