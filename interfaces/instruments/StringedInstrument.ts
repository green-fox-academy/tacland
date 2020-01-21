import {Instrument} from "./Instrument"

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor (name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound();
    play(){
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`)
    }
}