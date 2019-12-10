'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine (x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
for(let i = 0; i<= canvas.height; i = i+10) {
drawLine(0, i)
drawLine(canvas.width, i)
}

for(let i = 0; i<= canvas.width; i = i+10) {
    drawLine(i, 0)
    drawLine(i, canvas.height)
}