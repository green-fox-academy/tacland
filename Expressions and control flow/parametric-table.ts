'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let a: number = 5; //input number here
let sum: number = 0

for (let i = 1; i <= a; i++){
    sum = sum + i
}
console.log(sum)
console.log(sum/a)

