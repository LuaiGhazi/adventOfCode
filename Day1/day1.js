// Load the data
const fs = require("fs");
const { networkInterfaces, version } = require("os");
const inputs = fs.readFileSync("./inputs.txt", "utf-8").split("\n");

// inputs are now an array containing strings rather than integers 
// The next block of codes solves this issue 
let listOfNumbers = inputs.map(function (x) {
    return parseInt(x, 10);
});


//Going to solve this question by deducting the target number given to us,
// which in this case is 2020, from a number in the list to get x and then check if 
// x is in our list. 

let target = 2020

for (let i = 0; i < listOfNumbers.length; i += 1) {
    let x = target - listOfNumbers[i];
    if (listOfNumbers.indexOf(x) != -1) {
        console.log(`The first number is ${listOfNumbers[i]} and the second is ${x}`);
        console.log(`The answer is =  ${x} * ${listOfNumbers[i]} = ${x * listOfNumbers[i]}`);
    };
}

// Result:
// The first number is 1128 and the second is 892
// The answer is =  892 * 1128 = 1006176


// For part 2 we'll use the same exact methodology
// The only difference is that this time we will loop an additional time 

for (let i = 0; i < listOfNumbers.length; i += 1) {
    for (let j = 1; j < listOfNumbers.length - 1; j += 1) {
        let x = target - listOfNumbers[i] - listOfNumbers[j];
        if (listOfNumbers.indexOf(x) != -1) {
            console.log(`The first number is ${listOfNumbers[i]}, the second is ${listOfNumbers[j]}, and the third is ${x}`);
            console.log(`The answer is =  ${x} * ${listOfNumbers[i]} * ${listOfNumbers[j]} = ${x * listOfNumbers[i] * listOfNumbers[j]}`);
        };
    }
}

// Result: 
// The first number is 890, the second is 256, and the third is 874
// The answer is =  874 * 890 * 256 = 199132160