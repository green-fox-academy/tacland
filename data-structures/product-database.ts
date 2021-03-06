// Product database
// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
// Create an application which solves the following problems.

// How much is the fish?
// What is the most expensive product?
// What is the average price?
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?

const productDatabase: {[key: string]: number} = {
    "Eggs":	200,
    "Milk":	200,
    "Fish":	400,
    "Apples":	150,
    "Bread":	50,
    "Chicken":	550,
}

function howMuch(objectname: object, key: string) {
    console.log("The fish costs: " + objectname[key])
}

const spending = Object.values(productDatabase)

const reducer = (accumulator, currentValue) => accumulator + currentValue;


function averagePrice(spending: number [], reducer) {
    console.log("The average spend is " + (spending.reduce(reducer))/spending.length)
}

howMuch (productDatabase, "Fish");

averagePrice(spending, reducer);

export{}