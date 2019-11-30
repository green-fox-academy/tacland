// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

const spending = [500, 1000, 1250, 175, 800, 120];

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

console.log("We spent: " + spending.reduce(sumReducer));

function maxMinExpense (arrayname: number[]) {
    function descendingSort(a:number, b:number) {
        return b - a;
    };
    console.log("The biggest expense is: " + arrayname.sort(descendingSort)[0]);
    console.log("The lowest expense is: " + arrayname.sort(descendingSort)[arrayname.length-1]);
}

maxMinExpense(spending)

console.log("The average spend is " + (spending.reduce(sumReducer))/spending.length)