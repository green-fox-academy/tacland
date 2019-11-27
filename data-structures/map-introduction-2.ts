let object: {[key: string]: string} = {
"978-1-60309-452-8":	"A Letter to Jo",
"978-1-60309-459-7":	"Lupus",
"978-1-60309-444-3":	"Red Panda and Moon Bear",
"978-1-60309-461-0":	"The Lab"
}

//console.log(Object.values(object)+ '(ISBN:'+ Object.keys(object)+ ')')

let keys = Object.keys(object);
let values = Object.values(object);

function printall(a: string[], b: string[]){
    for(let i = 0; i < a.length; i++) {
        console.log(a[i] + '(ISBN: ' + b[i] + ')' )
    }
}

printall(values, keys)

delete object["978-1-60309-444-3"]

function deletePro(keys, toBeDeleted, object) {
    keys.forEach(key => {
        if (object[key] === toBeDeleted)
            delete object[key]
    })
}

deletePro(keys, "The Lab", object)

object["978-1-60309-450-4"] = "They Called Us Enemy";
object["978-1-60309-453-5"] = "Why Did We Trust Him?";

function printIf(object, searchForThis) {
    if(object.hasOwnProperty(searchForThis) === true){
            console.log("the object contains a value for key 478-0-61159-424-8 and it is: " + object[searchForThis])
        } else {
            console.log("there is no value with key 478-0-61159-424-8")
        }
}

printIf(object, "978-1-60309-452-8")

console.log(object["978-1-60309-453-5"])