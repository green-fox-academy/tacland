// We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.

// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982
// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

const phoneBook = {
"William A. Lathan":	"405-709-1865",
"John K. Miller":	"402-247-8568",
"Hortensia E. Foster":	"606-481-6467",
"Amanda D. Newland":	"319-243-5613",
"Brooke P. Askew":	"307-687-2982",
}

function findPhoneNumber(searchThis: object, name: string){
console.log(name + "'s Phone Number is: " + phoneBook[name])
}

findPhoneNumber(phoneBook, "John K. Miller")

function findName(searchThis:object, phoneNumber: string) {
    let nameArray = Object.keys(searchThis)  
    let numberArray = Object.values(searchThis)  
    console.log("The phone number's owner is " + nameArray[numberArray.indexOf(phoneNumber)])
}

findName(phoneBook, "307-687-2982")

function doesItExist (searchThis: object, name:string) {
    let nameArray = Object.keys(searchThis)  
    if (nameArray.indexOf(name) > -1){
        console.log("The name " + name + " has a number assigned to it")
    } else {
        console.log("There is now phone number assigned to the name " + name)
    }
}

doesItExist(phoneBook, "Chris E. Myers")