let firstSolveBtn = document.querySelector("#first-solve-button");
let secondSolveBtn = document.querySelector("#second-solve-button");

firstSolveBtn.addEventListener('click', function firstSolve() {
    let total = 0;
    const RED = 12;
    const GREEN = 13;
    const BLUE =  14;
    let puzzleInput = [];
    let oneGameLine = [];
    let round = [];
    let pulls = [];

    let puzzle = document.querySelector("#puzzle").value;
    puzzleInput = puzzle.split("\n");
    console.log(`first split ` + puzzleInput);
    
    for (let i = 1; i <= puzzleInput.length; i++) {
        oneGameLine = puzzleInput[i - 1].split(': ');
        console.log(oneGameLine);
        console.log(`Should be split at Game: `);
        console.log(`${i} is i`);

        round = oneGameLine[1].split('; ');
        let roundCount = 0;
        console.log(round);
        console.log(`Should be split  at ; `);
        let keepGoing = true;

        if(keepGoing) {
            for(let j = 1; j <= round.length; j++) {
                pulls = round[j - 1].split(', ');
                console.log(pulls)
                console.log(`Round ${j} of ${round.length}`);
        
                if(keepGoing) {
                    for(let k = 1; k <= pulls.length; k++) {
                        numColorCombo = pulls[k - 1].split(' ');
                        console.log(numColorCombo)
                        console.log(`Pick ${k} of ${pulls.length}`);
                        
                        if((numColorCombo[1] == "red" && numColorCombo[0] > RED) || 
                            (numColorCombo[1] == "green" && numColorCombo[0] > GREEN) || 
                            (numColorCombo[1] == "blue" && numColorCombo[0] > BLUE)) {
                                console.log(`FAIL`);
                                keepGoing = false;
                                break;
                        }
                        else if(k == pulls.length) {
                            roundCount++;
                            console.log(`PICKS PASS`);
                        }                 
                    }
                }
            }
        }
        if(roundCount == round.length) {
            total += i;
        }
    }
    document.querySelector('#solution').textContent = `Solution: ${total}`;
});

secondSolveBtn.addEventListener('click', function secondSolve() {
    let puzzleInput = [];
    let oneGameLine = [];
    let round = [];
    let pulls = [];
    let total = 0;
    
    let puzzle = document.querySelector("#puzzle").value;
    puzzleInput = puzzle.split("\n");
    console.log(`first split ` + puzzleInput);
    
    for (let i = 1; i <= puzzleInput.length; i++) {
        oneGameLine = puzzleInput[i - 1].split(': ');
        console.log(oneGameLine);
        console.log(`Should be split at Game: `);
        console.log(`${i} is i`);

        round = oneGameLine[1].split('; ');
        let roundCount = 0;
        console.log(round);
        console.log(`Should be split  at ; `);

        let redCount = 0;
        let blueCount = 0;
        let greenCount = 0;

        for(let j = 1; j <= round.length; j++) {
            pulls = round[j - 1].split(', ');
            console.log(pulls)
            console.log(`Round ${j} of ${round.length}`);
        

            for(let k = 1; k <= pulls.length; k++) {
                numColorCombo = pulls[k - 1].split(' ');
                console.log(numColorCombo)
                console.log(`Pick ${k} of ${pulls.length}`);
                        
                if(numColorCombo[1] == "red" && numColorCombo[0] > redCount) {
                    redCount = Number(numColorCombo[0]);
                }
                else if(numColorCombo[1] == "green" && numColorCombo[0] > greenCount) {
                    greenCount = Number(numColorCombo[0]);
                }
                else if(numColorCombo[1] == "blue" && numColorCombo[0] > blueCount) {
                    blueCount = Number(numColorCombo[0]);
                }             
            }
                
        }
        total += (redCount * blueCount * greenCount);
    }
    document.querySelector('#solution').textContent = `Solution: ${total}`;
});

