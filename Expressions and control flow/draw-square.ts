'use strict';

let lineCount: number = 6;


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is





for (let i: number = 0; i <= lineCount; i++){
    let eachLine: string = '';
    if (i === 0 || i === lineCount) {
        for (let j=1; j<=lineCount; j++){
            eachLine += '%';
        }
        console.log(eachLine);
    } else {
        eachLine = '%' 
        for (let j=1; j<=lineCount-2; j++){
            eachLine += ' ';}
        console.log(eachLine+ '%');
        }
    }



