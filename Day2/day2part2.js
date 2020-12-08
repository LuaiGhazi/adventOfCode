// Reading the text file that contains our inputs
// and storing its contents in the variable called inputs
const fs = require("fs");
const { networkInterfaces, version } = require("os");
const input = fs.readFileSync("./inputs.txt", "utf-8");

// // Now we take the contents of the  variable labeled 'input' and split them 
// based on the back slashes The back slashes represent the start of the next password 
const passwordData = input.split("\n");

// Our target is to isolate the input data into 4 different variables. 
// The min value, the max value, the letter, and the password
let validPasswordCounter = 0

for (let pwd in passwordData) {
    let splitData = passwordData[pwd].split(' ')

    // We are closer to what we need now. Let's start by getting our min and max value 
    let pwdRange = splitData[0].split('-')
    let minValue = pwdRange[0]
    let maxValue = pwdRange[1]


    //Now we can focus on getting our letter 
    let pwdLetter = splitData[1][0]


    //And finally, let's split all the letter in the password that we need to verify/check
    //We could also leave the password 'intact' but that seems like it'd make things more complex. 
    let charsToCheck = splitData[2].split('')

    // Now we find the letter located at specific indexes for each password 
    // THE FIRST TRICK HERE WAS THAT WE DIDNT NEED ANOTHER FOR LOOP LIKE IN THE LAST EXAMPLE
    // SECOND: MUCH EASIER TO DIRECLY COMPARE THE CHAR AS = or not = TO A SPECIFC CHAR IN THE PASSWORD
    // VS EXTRACTING TWO CHARACTERS IN SPECIFIC SPOTS OF THE PSWD INTO VARIABLES AND THEN TRYING TO COMPARE
    if ((charsToCheck[minValue - 1] == pwdLetter &&
        charsToCheck[maxValue - 1] != pwdLetter) ||
        (charsToCheck[minValue - 1] != pwdLetter
            & charsToCheck[maxValue - 1] == pwdLetter)) {
        validPasswordCounter += 1
    }
}
console.log("Valid passwords: " + validPasswordCounter)

// RESULT
// Number of valid passwords: 745