// Sum Digits
// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

// Java, C++, C#, Python
// Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).

// JavaScript, TypeScript
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumDigits(n:number) {
    let toString = n.toString()
    //console.log(toString)
    let length = toString.length
    // console.log(length)
    let sum = 0;
    if (n < 0) {
        return 'negative number'
    } else if (length <= 1) {
        return sum
    } else {
        if (length <= 1) {
            return sum
        } else {
            length = length - 1
            sum = sum + (n % 10) 
            return  sumDigits( n = Math.floor(n / 10) )
        } 
    }
}
console.log(sumDigits(532))

// function numberAdder(n:number) {
//     if (1 === n) {
//         return 1
//     } else {
//         return n + numberAdder(n-1);
//     }
// }
// console.log(numberAdder(5)