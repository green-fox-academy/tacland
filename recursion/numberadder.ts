//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n:number) {
    if (1 === n) {
        return 1
    } else {
        return n + numberAdder(n - 1);
    }
}
console.log(numberAdder(5))