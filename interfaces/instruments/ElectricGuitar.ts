import {StringedInstrument} from "./StringedInstrument"

export class ElectricGuitar extends StringedInstrument{

    constructor(numberOfStrings: number = 6, name: string = "Electric Guitar"){
        super(name, numberOfStrings)
    }

    sound() {
        return "Twangg"
    }
}

//