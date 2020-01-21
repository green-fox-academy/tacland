export abstract class Animal {
    name: string;
    gender: string;
    lifeSpan: number;
    weight: number;
    breedType: string

    constructor (name: string, breedType: string) {
        this.name = name;
        this.breedType = breedType;
    }

    abstract getName()

    abstract breed() 
}