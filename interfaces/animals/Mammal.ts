import { Animal } from "./Animal";

export class Mammal extends Animal {

    constructor(name: string, breedType: string = "pushing miniature versions out") {
        super(name, breedType);
    }
}