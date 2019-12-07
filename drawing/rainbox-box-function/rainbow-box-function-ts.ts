'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.


// function drawSquare(size: number, color: string) {
//     ctx.strokeStyle = color;
//     ctx.strokeRect((300 - size/2), (200 - size/2), size, size);
// }

// Create a loop that fills the canvas with a rainbow of colored squares.


function advancedDraw (size:number, color:string) {
    ctx.strokeStyle = color;
    ctx.strokeRect((300 - size/2), (200 - size/2), size, size);
}

for(let i = 0; i<=600; i++) {
    let color = `rgb(${i/3},${i},${i/2})`;
    advancedDraw(i, color);
}
