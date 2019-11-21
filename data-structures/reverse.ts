'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

//with for loop

// let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

// function reverse(a: string) {
//     let temp = '';
    
//     for (let i:number = a.length - 1; i >= 0; i--)
//         { temp += a[i]
//         }
//     return temp
// }

// console.log(reverse(reversed));

// export{}

// built in method

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(a:string) {
    let split = a.split('')
    let reverse = split.reverse()
    let join = reverse.join('')
    return join
}

console.log(reverse(reversed));

export{}