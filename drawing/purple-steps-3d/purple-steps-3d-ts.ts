'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawRectangle(x: number, y: number, z: number, a:number) {
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'purple'
        ctx.strokeRect (x, y, z, a)
        ctx.fillRect(x, y, z, a);
    }

for (let i = 0; i<= 19; i++){
        drawRectangle(i*i, i*i, i+i, i+i);
}