'use strict';

let number: number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let multiplyThisNumber: number = 3 
let multiplyBy: number = 1

while (multiplyBy <= 10) {
    console.log(
        multiplyBy + '*' + multiplyThisNumber + '=' + multiplyBy * multiplyThisNumber
);
    multiplyBy++;
}