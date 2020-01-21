import { Animal } from "./Animal";

export class Bird extends Animal {

    constructor(name: string, breedType: string = 'laying eggs') {
        super(name, breedType);
    }
}