import { Aircrafts } from "./Aircrafts";

export class F16 extends Aircrafts{
    constructor(){
        super(false, 'F16', 8, 30)
    }
}