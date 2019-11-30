const fs = require('fs');

function copy (path:string, copyTo: string){

    try {

        const copyThis = fs.readFileSync(path, "utf-8")

        fs.writeFileSync(copyTo, copyThis)

        console.log('File copied successfully: ' + true )

    } catch(err){

        console.log('File copied successfully: ' + false )

    }
}

copy('./copyme.txt', './copyto.txt')

export{}