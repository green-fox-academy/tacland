import {StringedInstrument} from "./StringedInstrument"

export class Violin extends StringedInstrument{
    constructor(numberOfStrings: number = 4, name: string = 'Violin'){
        super(name, numberOfStrings)
    }

    sound() {
        return 'Screech'
    }
}