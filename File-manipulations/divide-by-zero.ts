// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTenBy(divideByThis: number) {

    if(divideByThis === 0) {

    throw Error('Can\'t divide by zero');

    } else {

    console.log((10/divideByThis))

    }
}
try {

    divideTenBy(0);

} catch (err) {

    console.log(err.message)

} 
