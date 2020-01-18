import {Plant} from "./Plant"

export class Garden {
    private plants: Plant[] //this allows us to use methods written for Plants

    constructor () {
        this.plants = [];
    }

    water(amount: number) {
        console.log(`Watering with ${amount}`)
        let counter = 0
        for( let i = 0; i < this.plants.length; i++) {
            if(this.plants[i].isThirsty()) { //here we are accessing the isThirsty() method from Plant file
                counter++
            }
        }
        let waterPortion = amount / counter;

        this.plants.forEach((plant: Plant) => {
            plant.water(waterPortion); //here we are accessing the water() method from the Plant file
        });
    }

    toString(): string {
        let output = '';
        this.plants.forEach((plant: Plant) => {
            output += plant.toString() + '\n'
        });
        return output;
    }

    add(plant: Plant) {
        this.plants.push(plant);
    }
}

