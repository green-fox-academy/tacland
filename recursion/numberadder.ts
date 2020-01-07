//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n:number) {
    let localNumber = 1;
    if (localNumber === n) {
        return localNumber
        }
    else {
        return n + numberAdder(n-localNumber);
    }
}
console.log(numberAdder(5))