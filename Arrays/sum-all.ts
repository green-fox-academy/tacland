// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai = [3, 4, 5, 6, 7];

let myNumber = ai[4];

function findSum(c: number) {

    let result = ai[0];

    for(let i = 0; i <= ai[4]; i++) {
      result = result + i;
      return result;
    }

    
    return result;
  }
  
findSum(ai[4])
console.log(findSum(ai[4]));
