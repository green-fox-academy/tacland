// Shopping list
// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?

const shoppingList = ["Eggs", "milk", "fish", "apples", "bread", "chicken"]

function searchForItem (searchThis, item) {
    if(searchThis.indexOf(item) > -1){
        console.log("We have " + item + " on the list.")
    } else {
        console.log("We don't have " + item + " on the list.")
    }
}

searchForItem(shoppingList, "milk")
searchForItem(shoppingList, "bananas")


