'use strict';

let massInKg: number = 81.2;
let heightInM: number = 1.78;

// Print the Body mass index (BMI) based on these values

/*Metric BMI Formula
BMI = weight (kg) / [height (m)]2*/

let BMI: number = massInKg/(heightInM*heightInM);

console.log(BMI);