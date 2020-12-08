// Reading the text file that contains our inputs
// and storing its contents in the variable called inputs
const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n\n')



// We need to be able to check the key values of each passport
// and keep it open to checking the information that comes with it
// Therefore, fix the formating of the inputs 

formattedInputsPart1 = []
for (let i = 0; i < input.length; i += 1) {
    // console.log(input.length)
    let passportToCheck = input[i].replace(/\n/g, ' ')
    formattedInputsPart1.push(passportToCheck);
}

// Now we can set up an if statement that checks if ALL the necessary categories 
// are located within each document 

validPassportCount = 0

for (let i = 0; i < formattedInputsPart1.length; i += 1) {
    if (formattedInputsPart1[i].includes("byr") && formattedInputsPart1[i].includes("hgt") && formattedInputsPart1[i].includes('eyr') && formattedInputsPart1[i].includes("iyr") && formattedInputsPart1[i].includes("hcl") && formattedInputsPart1[i].includes('ecl') && formattedInputsPart1[i].includes("pid")) {
        validPassportCount += 1
    }
}
console.log(validPassportCount)

// Result 
256