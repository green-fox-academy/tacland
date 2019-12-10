'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)



const boxCoordinates = [[15, 304],[50, 25],[39, 32],[496, 330],[321, 231],[29, 236],[523, 49],[401, 193],[223, 12],[124, 330],[100, 5]]

const numberOfSquares = boxCoordinates.length;

function generateStars(numberOfSquares, coordinates) {

    for(let i = 0; i<=numberOfSquares; i++) {
        let color = `rgb(${i*20+150},${i*20+150},${i*20+150})`;
        ctx.fillStyle = color;
        ctx.fillRect(coordinates[i][0], coordinates[i][1], 2, 2)
    }

}

generateStars(numberOfSquares, boxCoordinates)