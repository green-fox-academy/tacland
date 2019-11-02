'use strict';

let lineCount: number = 6;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
    let eachLine: string = ''

      for (let j=1; j<=i; j++)
      {
        eachLine += '*' + " "
      }
      eachLine = eachLine.trim();
      console.log(eachLine);
  }

