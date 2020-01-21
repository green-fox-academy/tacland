import {StringedInstrument} from "./StringedInstrument"

export class BassGuitar extends StringedInstrument{

    constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar'){
        super(name, numberOfStrings)
    }
    
    sound() {
        return 'Duum-duum-duum';
    }
}