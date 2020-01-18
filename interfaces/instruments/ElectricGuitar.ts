import {StringedInstrument} from "./StringedInstrument"

export class ElectricGuitar extends StringedInstrument{
    name = ''
    numberOfStrings: number;

    constructor() {
        super(name)
        this.name = name
    }

    sound(){
        console.log("Electric Guitar, a 6-stringed instrument that goes Twang")
    }
    play() {
        this.sound()
    }

}