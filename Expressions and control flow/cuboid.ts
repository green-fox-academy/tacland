'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cubeSideA: number
let cubeSideB: number
let cubeSideC: number
let cubeSurfaceArea: number = 2 * (cubeSideA + cubeSideB + cubeSideC)
let cubeSurfaceVolume: number = cubeSideA * cubeSideB * cubeSideC

if(cubeSideA == undefined || cubeSideB == undefined || cubeSideC == undefined) {
    console.log('You have not added all the sides.');
} else {
    console.log('Surface area: ' + cubeSurfaceArea);
    console.log('Volume: ' + cubeSurfaceVolume);
};