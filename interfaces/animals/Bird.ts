import { Animal } from "./Animal";
import { Flyable } from "../flyable/Flyable";

export class Bird extends Animal implements Flyable{

    constructor(name: string, breedType: string = 'laying eggs') {
        super(name, breedType);
    }

    land() {}
    fly() {}
    takeoff() {}
}