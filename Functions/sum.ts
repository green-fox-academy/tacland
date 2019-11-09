// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function findSum(myNumber) {

    let result = 0;

    for(let i = 0; i <= myNumber; i++) {
      result = result + i;
    }

    return result
  }
  
let myNumber = 5;

console.log(findSum(myNumber));