'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let replace = example.replace("dishwasher", "galaxy");

example = replace

console.log(example);

export{}