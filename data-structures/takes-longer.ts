'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let concatto = quote.slice(0, 20);

let concatthis = " always takes longer than";

quote = concatto.concat(concatthis) + quote.slice(20 , quote.length)

console.log(quote);

export{}