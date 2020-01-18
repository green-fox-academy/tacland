import {Flower} from "./Flower"
import {Tree} from "./Tree"
import { Plant } from "./Plant";
import {Garden} from "./Garden"

const garden = new Garden();
garden.add(new Flower('yellow'))
garden.add(new Flower('blue'))
garden.add(new Tree('purple'))
garden.add(new Tree('orange'))

console.log(garden.toString());
garden.water(40);
console.log(garden.toString())
garden.water(70);
console.log(garden.toString())


