'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentTimeTotalInSeconds: number = currentSeconds + 60 * currentMinutes + 60 * 60 * currentHours

if ( 86400 % currentTimeTotalInSeconds === 0) {

    console.log('No remaining seconds');

} else if (86400 > currentTimeTotalInSeconds){

    console.log (86400 - currentTimeTotalInSeconds + ' seconds left of a completed day');

} else {

    console.log (86400 - (currentTimeTotalInSeconds % 86400) + ' seconds left of a completed day');

};