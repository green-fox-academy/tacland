'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

// I've added console.logs to log what the code does. The code will only run if the ht

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function urlfixer (a:string) {

    console.log('- url fixer function ran successfully - ')

    function validateformat(a:string){

        console.log('- validateformat function ran successfully -')

        let split = a.split("")

        if (a[0] == 'h' && a[1] == 't' && a[2] == 't' && a[3] == 'p' && a[4] === 's' && a[5] === ':' && a[6] === '/' && a[7] === '/'){

            console.log('status: https format is correct - no action was taken')

        } else {
            console.log ('- https string is being corrected -')

            let extracthttps = a.slice(0 , 5)
            let restofurl = a.slice(6, a.length)
            let newurl = '';

            extracthttps = extracthttps.concat(':')

            a = newurl.concat(extracthttps + restofurl)

            let extractodds = a.slice(0 , -4)
            let odds = 'odds'

            a = extractodds.concat(odds)
        }
        return a   
    }
    return validateformat(a)
}

url = urlfixer(url)

console.log('*** The correct domain address is: ' + url + ' ***');
