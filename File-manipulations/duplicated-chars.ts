const fs = require('fs');

let originFile:string = fs.readFileSync('./assets/duplicated-chars.txt', 'utf-8')
let splitByLine = originFile.split('\n')
let newArray:string = ''

for(let i = 0; i < splitByLine.length - 1; i++){

    for(let j = 0; j < splitByLine[i].length; j++){

        if( j % 2 === 0){
            newArray = newArray.concat(splitByLine[i].charAt(j))
        }    
    }
    newArray = newArray.concat('\n')
}

fs.writeFileSync('./assets/duplicated-chars.txt', newArray)

export{}