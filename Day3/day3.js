// Reading the text file that contains our inputs
// and storing its contents in the variable called inputs
const fs = require("fs");
const { networkInterfaces, version } = require("os");
const input = fs.readFileSync("./inputs.txt", "utf-8").split("\n");

// We have to be able to track the number of trees
// that we hit
let numTreesCounter = 0

// Uh-huh moment: We always have to be able to move 
// three indexes to the right in the following row.
// We start on index zero in the first row and then 
// move to  index three of the second row and then 
// index 6 of the third and index 9 of the fourth. 
// We can take advantage of mod to return to the 
// start of the row once we reach the end of the row.  

let k = 3


for (let i = 1; i < input.length; i += 1) {
    let lineLength = input[i].length
    let startingSpot = input[i][k]

    if (startingSpot == '#') {
        numTreesCounter += 1
    }
    k = (3 + k) % lineLength;
    console.log(k)
}

console.log(numTreesCounter)

// RESULT for part 1
// 198 

// Part 2

// Right 1, Down 1 

let numTreesCounterSlope1 = 0

let a = 1
for (let i = 1; i < input.length; i += 1) {
    let lineLength = input[i].length
    let startingSpot = input[i][a]

    if (startingSpot == '#') {
        numTreesCounterSlope1 += 1
    }
    a = (1 + a) % lineLength;
}

console.log(numTreesCounterSlope1)

// Right 5, Down 1 

let numTreesCounterSlope2 = 0

let b = 5
for (let i = 1; i < input.length; i += 1) {
    let lineLength = input[i].length
    let startingSpot = input[i][b]

    if (startingSpot == '#') {
        numTreesCounterSlope2 += 1
    }
    b = (5 + b) % lineLength;
}

console.log(numTreesCounterSlope2)

// Right 7, Down 1 

let numTreesCounterSlope3 = 0

let c = 7
for (let i = 1; i < input.length; i += 1) {
    let lineLength = input[i].length
    let startingSpot = input[i][c]

    if (startingSpot == '#') {
        numTreesCounterSlope3 += 1
    }
    c = (7 + c) % lineLength;
}

console.log(numTreesCounterSlope3)

// Right 1, Down 2 
// This is the first slop where we do not go down a single row 
// Have to adjust by changing how we iterate i in our loop

let numTreesCounterSlope4 = 0

let d = 1
for (let i = 2; i < input.length; i += 2) {
    let lineLength = input[i].length
    let startingSpot = input[i][d]

    if (startingSpot == '#') {
        numTreesCounterSlope4 += 1
    }
    d = (1 + d) % lineLength;
}

console.log(numTreesCounterSlope4)

result = numTreesCounter * numTreesCounterSlope1 * numTreesCounterSlope2 * numTreesCounterSlope3 * numTreesCounterSlope4

console.log(result)

// RESULT for part 2
// 5,140,884,672
