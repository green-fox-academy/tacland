// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


const matrixWidth = 4
const emptyElement = "0";
const filledElement: string = "1";
const array: number [][] = [];

function createMatrix(width: number, empty: string, filled: string) {

    const diagonalMatrix: number [] [] = []

    for (let i = 0; i < width + 1; i++) {
        const row = []

        for (let j = 0; j < width + 1; j++){

            if (i + j === width) {
                row.push(filled)

            } else {
                row.push(empty)
            }
        }
    diagonalMatrix.push(row)

    }

    return diagonalMatrix
}

console.log(createMatrix(matrixWidth, emptyElement, filledElement))

export{}