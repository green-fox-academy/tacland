import { StringedInstrument } from "./StringedInstrument"

export abstract class Instrument {
    name: string;
    instrumentList: StringedInstrument [];
    
    constructor(name: string) {
        this.name = name;
        this,this.instrumentList = []
    }

    abstract play(): void;
}