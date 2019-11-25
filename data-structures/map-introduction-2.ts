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

console.log(object)

function deleteByValue(a: string[], b:string, c:object) {
    for ( let i = 0; i < a.length; i++){
        if(a[i] === b) {
            delete object[i]
            console.log('if statement ran')
        }
    }
}

deleteByValue(values, "The Lab", object)

console.log(values)
console.log(object)



//console.log(object)

