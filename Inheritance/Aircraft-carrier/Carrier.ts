import { Aircrafts } from "./Aircrafts";

export class Carrier {
    name: string;
    hp: number;
    aircraftCount: number
    ammoStorage: number;
    aircraftList: Aircrafts [];

    constructor(name: string) {
        this.name = name;
        this.hp = 1000
        this.aircraftCount = 0;
        this.ammoStorage = 2300
        this.aircraftList = [];
    }

    add(aircraft: Aircrafts) {
        this.aircraftList.push(aircraft);
        this.aircraftCount++;
    }

    fill() {
        for( let i = 0; i < this.aircraftCount; i++) {
            if(this.aircraftList[i].needsAmmo()) { //here we are accessing the isThirsty() method from Plant file
                this.ammoStorage -= this.aircraftList[i].fill()
            }
        }
    }

    private totalDamage(){}

    fight() {
        return this.aircraftList[0].ammo
        // for( let i = 0; i < this.aircraftCount; i++) {
        //     this.aircraftList[i][0]
        // }
    }

    getStatus()/*: string*/{
        // let output = '';

        // this.aircraftList.forEach((aircraftCount: number) => {
        //     output += this.aircraftList.toString() + '\n'
        // });
        // It should return a string about itself and all of its aircrafts' statuses in the following format:

        // HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
        // Aircrafts:
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
        // Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
        // If the health points are 0 then it should return: It's dead Jim :(
        //return output
    }
}