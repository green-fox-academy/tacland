'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const numberOfLines = 16;

function drawLine (fromX: number, fromY: number, toX:number, toY:number) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}

for(let i =0; i<= numberOfLines; i++) {
    drawLine(0, canvas.width/numberOfLines*i ,canvas.width/numberOfLines*i, 400)
}

for(let i =0; i<= numberOfLines; i++) {
    drawLine(canvas.width/numberOfLines*i , 0, 400, canvas.width/numberOfLines*i )
}

drawLine(50, 50, 150, 150)