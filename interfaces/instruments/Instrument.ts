import { StringedInstrument } from "./StringedInstrument"

export abstract class Instrument {
    name: string;
    abstract play(): void;
    instrumentList: StringedInstrument [];
    
    constructor(name: string) {
        this.name = name;
        this,this.instrumentList = []
    }
}