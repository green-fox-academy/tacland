'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

const squareSize = 40;
const doubleSize = squareSize * 2;

function drawRectangle(color: string, x: number, y: number, z: number, a:number) {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
    ctx.strokeRect (x, y, z, a);
    ctx.fillRect(x, y, z, a);
}

for (let j = 0; j <= canvas.height/squareSize; j++){
    for (let i = 0; i <= canvas.width/squareSize; i++ ){
        if (j%2 === 0){
        drawRectangle('black', i * doubleSize, j * squareSize, squareSize, squareSize)
        drawRectangle('white', i * doubleSize + squareSize, j*squareSize, squareSize, squareSize)
        } else {
        drawRectangle('black', i * doubleSize - squareSize, j * squareSize, squareSize, squareSize)
        drawRectangle('white', i * doubleSize, j * squareSize, squareSize, squareSize)
        }
    }
}