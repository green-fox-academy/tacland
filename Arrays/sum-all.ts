// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai = [];

function findSum(myNumbers) {

  let result= 0;

      for(let i = 0; i < myNumbers.length; i++) {
        result = result + myNumbers[i];
      }
      return result;    
}

ai = [3, 4, 5, 6, 7];

console.log(findSum(ai));

export{}