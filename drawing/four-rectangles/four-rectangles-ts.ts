'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 50, 150);

ctx.fillStyle = 'grey';
ctx.fillRect(400, 50, 120, 34);

ctx.fillStyle = 'rgb(0, 0, 100)'
ctx.fillRect(250, 243, 32, 152);

ctx.strokeStyle = 'red';
ctx.strokeRect(124, 200, 69, 96)
