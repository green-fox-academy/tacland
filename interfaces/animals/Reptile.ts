import { Animal } from "./Animal";

export class Reptile extends Animal {

    constructor(name: string, breedType: string = 'laying eggs') {
        super(name, breedType);
    }

    getName(){
        return this.name;
    }

    breed(){
        return this.breedType;
    }

}