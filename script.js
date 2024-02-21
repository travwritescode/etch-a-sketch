generateGrid()

const gridSquares = document.querySelectorAll(".gridSquare");
gridSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        const squareStyle = getComputedStyle(square);
        const backgroundColor = squareStyle.backgroundColor;
        console.log(backgroundColor);
        if (backgroundColor === "rgb(100, 149, 237)") {
            console.log("It's totally cornflower blue");
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