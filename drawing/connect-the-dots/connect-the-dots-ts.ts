'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function dotConnector(coordinates) {
    for (let i = 0; i <= coordinates.length - 2; i++){
        ctx.beginPath();
        ctx.moveTo(coordinates[i][0], coordinates[i][1]);
        ctx.lineTo(coordinates[i+1][0], coordinates[i+1][1]);
        ctx.stroke();
    }   
    ctx.beginPath();
    ctx.moveTo(coordinates[coordinates.length - 1][0], coordinates[coordinates.length - 1][1]);
    ctx.lineTo(coordinates[0][0], coordinates[0][1]);
    ctx.stroke();
}

let boxCoordinates = [[10, 10], [290,  10], [290, 290], [10, 290]];

let otherCoordinates = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]]

dotConnector(boxCoordinates)
dotConnector(otherCoordinates)

// function goToCenter (x: number, y: number) {
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(300, 200);
//     ctx.stroke();
// }

// goToCenter(300, 23)
// goToCenter(200, 273)
// goToCenter(420, 200)