// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.

//ASK LEVI ABOUT WHY THE STRINGSL '/\nMon' ARE NOT BROKEN UP

const fs = require('fs');

let fileContent = fs.readFileSync('./assets/log.txt', 'utf-8');

function findByIp (searchThisArray, IP) {

    let splitBySpace = searchThisArray.split(' '||'\n'||'/');
    //regex

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
        + ' ' 
        + splitBySpace[splitBySpace.indexOf(IP)-2] 
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

function ratio (searchThisArray, compareThis, toThis) {

    let splitBySpace = searchThisArray.split(' '||'\n'||'/');

    for (let i = 0; i < splitBySpace.length - 1; i++){

        if (splitBySpace[i] === compareThis) {
            getCounter = getCounter + 1;
        }
        if (splitBySpace[i] === toThis) {
            postCounter = postCounter + 1;
        }
    }
}
ratio(fileContent, 'GET', 'POST')

console.log('number of times GET was used = ' + getCounter + '; ' + 'number of times POST was used = ' + postCounter + '; ' + 'Request Ratio = ' + getCounter/postCounter);

export{}