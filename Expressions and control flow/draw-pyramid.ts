'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
    let eachLine = '';
        for (let j = 1; j < lineCount-i; j++) {
        eachLine = eachLine + ' ';
          }
        for (let k = 1; k <= (2*i+1); k++) {
        eachLine = eachLine + '*';
      }
    console.log(eachLine);
};