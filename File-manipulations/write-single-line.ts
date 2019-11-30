// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');

try {
    let myName = "Tomi"
    fs.writeFileSync('./my-file.txt', myName)
    console.log(fs.readFileSync('./my-file.txt', "utf-8"))
}

catch(err){
    if (err instanceof Error) {
    console.log("Unable to write file: my-file.txt")
    } 
}

export{}