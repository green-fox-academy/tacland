'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath()
ctx.moveTo(300, 200);
ctx.lineTo(300, 300)
ctx.stroke();

ctx.strokeStyle = 'purple';
ctx.beginPath()
ctx.moveTo(200, 200);
ctx.lineTo(200, 300)
ctx.stroke();