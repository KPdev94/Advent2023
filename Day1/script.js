const solveBtn = document.querySelector("#solve-button");

solveBtn.addEventListener('click', function solvePuzzle() {
    const puzzle = document.querySelector('#puzzle').value;
    console.log("clicked")
    let arrayText = [];
    arrayText = puzzle.split('\n');
    console.log(arrayText.length);
    console.log(arrayText);
    let firstNum;
    let secondNum;
    let inputText = "";
    let total = 0;

    function matchNum(num) {
        if(num.includes('one'))
            return "1";
        else if(num.includes('two'))
            return "2";
        else if(num.includes('three'))
            return "3";
        else if(num.includes('four'))
            return "4";
        else if(num.includes('five'))
            return "5";
        else if(num.includes('six'))
            return "6";
        else if(num.includes('seven'))
            return "7";
        else if(num.includes('eight'))
            return "8";
        else if(num.includes('nine'))
            return "9";
        }
    

    if(puzzle) {
        console.log('puzzle!');
        for (let i = 0; i < arrayText.length; i++) {
            for(let j = 0; j < arrayText[i].length; j++) {
                console.log(inputText);
                if (arrayText[i][j] >= 0) {
                    firstNum = arrayText[i][j];
                    console.log(firstNum);
                    break;
                }
                else if (j == arrayText.length && arrayText[i][j] == NaN) {
                    break;
                }
                else {
                    inputText += arrayText[i][j];
                    firstNum = matchNum(inputText);
                    if(firstNum) {
                        inputText = "";
                        break;
                    }
                }
            }
            for(let k = arrayText[i].length - 1; k >= 0; k--) {
                console.log(inputText);
                if (arrayText[i][k] >= 0) {
                    secondNum = arrayText[i][k];
                    console.log(secondNum);
                    break;
                }
                else if (k == arrayText.length && arrayText[i][k] == NaN) {
                    break;
                }
                else {
                    inputText = arrayText[i][k] + inputText;
                    secondNum = matchNum(inputText);
                    if(secondNum) {
                        inputText = ""
                        break;
                    }
                }
            }
            let sum = firstNum + secondNum;
            total += Number(sum);
    }
        const solution = document.querySelector('#solution');
        solution.textContent = `Solution: ${total}`;
    }
});
