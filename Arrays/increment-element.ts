// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList = [1, 2, 3, 4, 5];

//write the numList index of the number you'd like to change 
let index = 2;

let add1 = numList.map(function(e) {
    return numList[index] + 1;
  });
  console.log(add1[index]);

export{}