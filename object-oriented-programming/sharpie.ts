import { COPYFILE_FICLONE_FORCE } from "constants";

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
    color: string;
    width: number;
    inkAmount = 100;

    constructor(_color: string, _width: number) {
        this.color = _color;
        this.width = _width;
    }
    
    public use(){
        this.inkAmount -= 1;
    }
}

const blueSharpie = new Sharpie('blue', 50)

blueSharpie.use()
console.log(blueSharpie)
