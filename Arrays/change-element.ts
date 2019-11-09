// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let index = 2;

let half2 = numList.map(function(e) {
    return numList[index] / 2;
  });
  console.log(half2[index]);