import { Plant } from "./Plant";

export class Tree extends Plant{
    constructor (color: string) {
        super(color, 0.4, 10, 'tree')
    }
}