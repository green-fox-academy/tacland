'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// ******* 4.sor - 7*
//  ***** 5.sor - 5*
//   *** 6.sor - 3*
//    * 7.sor - 1*
//
// The diamond should have as many lines as lineCount is

for (let i: number = 0; i < Math.ceil(lineCount/2); i++) {
    let eachLine: string = '';
        for (let j:number = 1; j < lineCount-i; j++) {
        eachLine = eachLine + ' ';
          }
        for (let k:number = 1; k <= (2*i+1); k++) {
        eachLine = eachLine + '*';
          }
    console.log(eachLine);
};

for (let i:number = Math.ceil(lineCount/2); i >= 0; i--) {
    let eachLine: string = '';
        for (let j:number = 1; j < lineCount-i; j++) {
        eachLine = eachLine + ' ';
          }
        for (let k:number = 1; k <= (2*i+1); k++) {
        eachLine = eachLine + '*';
          }
    console.log(eachLine);
};
