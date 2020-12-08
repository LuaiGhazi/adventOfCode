// Reading the text file that contains our inputs
// and storing its contents in the variable called inputs
const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')


// Set up variables containing our row and column numbers 

airplaneRows = Array.from({ length: 128 }, (x, i) => i)
airplaneColumns = Array.from({ length: 8 }, (x, i) => i)



// How to get upper half or lower half of rows 
const half1 = Math.ceil(airplaneRows.length / 2);
const firstHalf = airplaneRows.slice(0, half1)
const secondHalf = airplaneRows.slice(-half1)

// How to get upper half or lower half of columns 
const colhalf1 = Math.ceil(airplaneColumns.length / 2);
const colfirstHalf = airplaneColumns.slice(0, half1)
const colsecondHalf = airplaneColumns.slice(-half1)




//Solve for the row 

let firstLetter = []
let secondLetter = []
let thirdLetter = []
let fourthLetter = []
let fifthLetter = []
let sixthLetter = []
let seventhLetter = []
let rowNumber = []
let rowScore = []
let colNumber = []
let finalScore = []



for (i = 0; i < input.length; i += 1) {

    if (input[i][0] == 'F') {
        firstLetter = airplaneRows.slice(0, half1)
    } else if (input[i][0] == 'B') {
        firstLetter = airplaneRows.slice(-half1)
    }

    let half2 = Math.ceil(firstLetter.length / 2);

    if (input[i][1] == 'F') {
        secondLetter = firstLetter.slice(0, half2)
    } else {
        secondLetter = firstLetter.slice(-half2)
    }

    let half3 = Math.ceil(secondLetter.length / 2);

    if (input[i][2] == 'F') {
        thirdLetter = secondLetter.slice(0, half3)
    } else if (input[i][2] == 'B') {
        thirdLetter = secondLetter.slice(-half3)
    }


    let half4 = Math.ceil(thirdLetter.length / 2);

    if (input[i][3] == 'F') {
        fourthLetter = thirdLetter.slice(0, half4)
    } else if (input[i][3] == 'B') {
        fourthLetter = thirdLetter.slice(-half4)
    }

    let half5 = Math.ceil(fourthLetter.length / 2);

    if (input[i][4] == 'F') {
        fifthLetter = fourthLetter.slice(0, half5)
    } else if (input[i][4] == 'B') {
        fifthLetter = fourthLetter.slice(-half5)
    }


    let half6 = Math.ceil(fifthLetter.length / 2);

    if (input[i][5] == 'F') {
        sixthLetter = fifthLetter.slice(0, half6)
    } else if (input[i][5] == 'B') {
        sixthLetter = fifthLetter.slice(-half6)
    }

    let half7 = Math.ceil(sixthLetter.length / 2);

    if (input[i][6] == 'F') {
        seventhLetter = sixthLetter.slice(0, half7)
        rowNumber.push(seventhLetter)
        rowScore.push(seventhLetter * 8)

    } else if (input[i][6] == 'B') {
        seventhLetter = sixthLetter.slice(-half7)
        rowNumber.push(seventhLetter)
        rowScore.push(seventhLetter * 8)
    }

    // Code for finding column # starts here 
    let half8 = Math.ceil(airplaneColumns.length / 2);

    if (input[i][7] == 'L') {
        eighthLetter = airplaneColumns.slice(0, half8)
    } else if (input[i][7] == 'R') {
        eighthLetter = airplaneColumns.slice(-half8)
    }

    let half9 = Math.ceil(eighthLetter.length / 2);

    if (input[i][8] == 'L') {
        ninthLetter = eighthLetter.slice(0, half9)
    } else if (input[i][8] == 'R') {
        ninthLetter = eighthLetter.slice(-half9)
    }

    let half10 = Math.ceil(ninthLetter.length / 2);
    if (input[i][9] == 'L') {
        tenthLetter = ninthLetter.slice(0, half10)
        colNumber.push(tenthLetter)
        finalScore.push(seventhLetter * 8 + parseFloat(tenthLetter))
    } else if (input[i][9] == 'R') {
        tenthLetter = ninthLetter.slice(-half10)
        colNumber.push(tenthLetter)
        finalScore.push(seventhLetter * 8 + parseFloat(tenthLetter))
    }
}



let largest = finalScore[0];

for (let i = 1; i < finalScore.length; i++) {
    if (finalScore[i] > largest) {
        largest = finalScore[i];
    }
}

console.log(largest)

// Result 
// 822 


// Part2
let sorted = finalScore.sort(function (a, b) { return a - b; });

let missing = [];

for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] != 1) {
        let x = sorted[i] - sorted[i - 1];
        let j = 1;
        while (j < x) {
            missing.push(sorted[i - 1] + j);
            j++;
        }
    }
}

console.log(missing)

// Result
// 705