// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printParams(a: number, b: number, ...rest: number[]): void {

    console.log("stuff");
    
}

printParams(1, 2, 3, 4, 1, 2, 3);

console.log(printParams);

// 1
// 2
// 3
// 4
// ...