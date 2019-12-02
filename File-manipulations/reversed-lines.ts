// Create a method that decrypts reversed-lines.txt
// var sentence = 'The quick brown fox jumps over the lazy dog.';

// var index = 4;

// console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// expected output: "The character at index 4 is q"


const fs = require('fs');

let originFile:string = fs.readFileSync('./assets/reversed-lines.txt', 'utf-8')

let splitByLine = originFile.split('\n')

let newArray:string = ''

for(let i = 0; i < splitByLine.length - 1; i++){

    for(let j = splitByLine[i].length; j > -1 ; j--){

        newArray = newArray.concat(splitByLine[i].charAt(j))
    }

    newArray = newArray.concat('\n')

}

fs.writeFileSync('./assets/reversed-lines.txt', newArray)

export{}