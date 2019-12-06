// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.

//ASK LEVI ABOUT WHY THE STRINGSL '/\nMon' ARE NOT BROKEN UP

const fs = require('fs');

let fileContent = fs.readFileSync('./assets/log.txt', 'utf-8');

function findByIp (searchThisArray, IP) {

    let splitBySpace = searchThisArray.split(' '||'\n'||'/');

    if (splitBySpace.indexOf(IP) > - 1) {
        return (
        splitBySpace[splitBySpace.indexOf(IP)- 8]
        + ' '
        + splitBySpace[splitBySpace.indexOf(IP)- 7] 
        + ' '
        + splitBySpace[splitBySpace.indexOf(IP)- 6] 
        + splitBySpace[splitBySpace.indexOf(IP)- 5] 
        + splitBySpace[splitBySpace.indexOf(IP)- 4]
        + ' ' 
        + splitBySpace[splitBySpace.indexOf(IP)- 3]
        + ' ' + splitBySpace[splitBySpace.indexOf(IP)-2] 
        + splitBySpace[splitBySpace.indexOf(IP)-1] 
        + splitBySpace[splitBySpace.indexOf(IP)]
        + splitBySpace[splitBySpace.indexOf(IP)+ 1]
        + splitBySpace[splitBySpace.indexOf(IP)+ 2]
        + ' '
        + splitBySpace[splitBySpace.indexOf(IP)+ 3]
        )
    }
}

console.log(findByIp (fileContent, '57.20.27.67'));

// Write a function that returns the GET / POST request ratio.

let getCounter = 0;
let postCounter = 0

function ratio (searchThisArray, IP, compareThis, toThis) {

    let splitBySpace = searchThisArray.split(' '||'\n'||'/');

    if (splitBySpace.indexOf(compareThis) > - 1) {
        getCounter = getCounter + 1;
    }
    if (splitBySpace.indexOf(toThis) > - 1) {
        postCounter = postCounter + 1;
    }
}
ratio(fileContent, '57.20.27.67', 'GET', 'POST')

console.log('getCounter = ' + getCounter + 'PostCounter = ' + postCounter);


export{}