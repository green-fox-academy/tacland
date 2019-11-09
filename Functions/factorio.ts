// -  Create a function called `factorio`
//    that returns it's input's factorial

let myNumber: number;

function findSum(myNumber) {

    let result = 1;

    for(let i = 1; i <= myNumber; i++) {
      result = result * i;
    }

    return result
  }
  
myNumber = 4;

console.log(findSum(myNumber));

export{}