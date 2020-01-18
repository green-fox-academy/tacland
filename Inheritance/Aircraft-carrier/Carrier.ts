import { Aircrafts } from "./Aircrafts";

export class Carrier {
    hp: number;
    aircraftCount: number
    ammoStorage: number;
    totalDamage: number;
    aircraftList: Aircrafts [];

    constructor() {
        this.hp = 1000
        this.aircraftCount = 0;
        this.ammoStorage = 2300
        this.totalDamage = 0;
        this.aircraftList = [];
    }

    add(aircraft: Aircrafts) {
        this.aircraftList.push(aircraft);
        this.aircraftCount++;
    }

    fill(aircraft: Aircrafts) {
        // let ammoLevel = this.ammoStorage
        // for( let i = 0; i < this.aircraftCount; i++) {
        //     if(this.aircraftList[i].needsAmmo()) { //here we are accessing the isThirsty() method from Plant file
        //         this.aircraftList[i].refill()
        //     }
        // }
        // let ammoPortion = 0;
    }

    fight(carrier: Carrier) {
        //fire all ammo
        //subtract all damage 
    }

    getStatus(){
        // It should return a string about itself and all of its aircrafts' statuses in the following format:

        // HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
        // Aircrafts:
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
        // Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
        // Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
        // If the health points are 0 then it should return: It's dead Jim :(
    }
}