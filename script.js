generateGrid()

const gridSquares = document.querySelectorAll(".gridSquare");
gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const squareStyle = getComputedStyle(square);
        const backgroundColor = squareStyle.backgroundColor;
        if (backgroundColor === "rgb(100, 149, 237)") {
            square.style.backgroundColor = "rgb(0, 0, 139)";
        }
        else {
            square.style.backgroundColor = "rgb(100, 149, 237)";
        }
    })
})

function generateGrid() {
    const grid = document.querySelector(".grid");

    for (i = 0; i < 16; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.className = "gridSquare";
        grid.appendChild(gridSquare);
    }
}