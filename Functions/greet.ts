// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

const nameToGreet = 'Green Fox';

function greet(input: string) {
    console.log('Greetings, dear ' + input)
};

greet(nameToGreet);