'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]
//  a.k.a. draw 19 purple squares touching each other

function drawRectangle(x: number, y: number) {
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'purple'
    ctx.strokeRect (x, y, 10, 10)
    ctx.fillRect(x, y, 10, 10);
}

for (let i = 0; i<= 190; i++){
    if (i%10 === 0) {
    drawRectangle(i, i);
    }
}