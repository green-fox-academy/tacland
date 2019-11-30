const fs = require('fs');

let originFile:string = fs.readFileSync('./assets/duplicated-chars.txt', 'utf-8')
let splitByLine = originFile.split('\n')
let newArray:string = ''

// console.log(splitByLine)


// console.log(newArray = newArray.concat(splitByLine[0].charAt(0)))

for(let i = 0; i < splitByLine.length - 1; i++){

    for(let j = 0; j < splitByLine[i].length; j++){

        if( j % 2 === 0){
        newArray = newArray.concat(splitByLine[i].charAt(j))
        }        
    }
}

console.log(newArray)

// console.log(newArray)

// for(let i = 0; i < splitByLine.length - 1; i++)
// if ( splitByLine[i].charAt(i)    ){

// }

//let splitBySpace = splitByLine.split(' '),

//soronkent split
//elemekre bontas
//kivenni masodik elemeket
// paros-e => 6%2 === 0



// for(let i = 0; i < originFile.length - 1; i+2 ) {
//     originFile.splice(i, 1)
// }

// console.log(result)

// console.log(result)

export{}