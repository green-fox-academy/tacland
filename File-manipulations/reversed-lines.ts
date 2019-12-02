// Create a method that decrypts reversed-lines.txt

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