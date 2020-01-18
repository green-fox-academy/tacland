import {Instrument} from "./Instrument"

export abstract class StringedInstrument extends Instrument {
    numberOfStrings:number;
    abstract sound();

    constructor () {
        super()
    }
}