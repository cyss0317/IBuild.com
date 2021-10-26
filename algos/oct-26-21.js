const devtimeCup = (matches, outcome) => {
    let score = {};
    let currentWinningPoint = 0;
    let currentWinner;
    //iterate through outcome, and store the currentWinning team and compare the current point for the number 
    for (let i = 0; i < outcome.length; i++) {
        let winner = matches[i][outcome[i] - 1];

        if (!score[winner]) {
            score[winner] = 1;
            currentWinningPoint++;
            if (!currentWinner) {
                currentWinner = winner;
            }
        } else {
            score[winner]++;
            if (score[winner] > currentWinningPoint) {
                currentWinningPoint = score[winner];
                currentWinner = winner;
            }
        }
    }
    return currentWinner;

}

const matches = [['germany', 'spain'], ['spain', "england"], ['england', 'germany']]
const outcome = [2, 2, 1];

console.log(devtimeCup(matches, outcome));


// first = [0,2,6,5,2,3,1,3,3,9]
// first = [1,8,7,3,1,3,4,2,3,1]
let first = [11, 2];

let second = [12, 1];
const cupPhoto = (first, second) => {
    //two separate iterations 
    // iterate over the first row and find out if all condition is true; then return true
    let isPossible = false;
    first.sort((a, b) => a - b);
    second.sort((a, b) => a - b);
    for (let i = 0; i < first.length; i++) {
        first[i] > second[i] ? isPossible = true : isPossible = false;
    }
    if (isPossible) return true;
    for (let i = 0; i < first.length; i++) {
        first[i] < second[i] ? isPossible = true : isPossible = false;
    }

    return isPossible;

}


console.log(cupPhoto(first, second))