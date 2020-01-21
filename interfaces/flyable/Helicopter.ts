import { Vehicle } from "./Vehicle";
import { Flyable } from "./Flyable";
import { stringify } from "querystring";

export class Helicopter extends Vehicle implements Flyable{
    constructor (fuel: string, bhp: number, isAffordable: boolean) {
        super('kerosene', 5000, false)
    }
}