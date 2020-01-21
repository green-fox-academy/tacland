import { Flyable } from "./Flyable";

export abstract class Vehicle implements Flyable{
    fuel: string;
    bhp: number;
    isAffordable: boolean;

    constructor (fuel: string, bhp: number, isAffordable: boolean) {
        this.fuel = fuel;
        this.bhp = bhp;
        this.isAffordable = isAffordable;
    }

    land(){}
    fly(){}
    takeoff(){}
}