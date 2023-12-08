let solveBtn = document.querySelector('#solve-button');
let puzzle = document.querySelector("#puzzle");

solveBtn.addEventListener('click', function solve() {
    let puzzleArr = puzzle.value.split('\n');
    console.log(puzzleArr[0]);

    for(let i = 1; i <= puzzleArr.length; i++) {
        for(let j = 0; j < puzzleArr[i].length; j++) {
            if(typeof puzzleArr[i][j] != "number" && puzzleArr[i][j] != ".") {

            }
        }
    }
})