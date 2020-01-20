import { Aircrafts } from "./Aircrafts";

export class Carrier {
    name: string;
    hp: number;
    aircraftCount: number
    ammoStorage: number;
    aircraftList: Aircrafts [];

    constructor(name: string) {
        this.name = name;
        this.hp = 5000
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
            if(this.aircraftList[i].needsAmmo()) { 
                this.ammoStorage -= this.aircraftList[i].refill()
            }
        }
    }

    fight(enemyName: Carrier) {
        let firePower = 0;

        for( let i = 0; i < this.aircraftCount; i++) {
            firePower += this.aircraftList[i].ammo * this.aircraftList[i].baseDamage
        };

        enemyName.hp -= firePower;

        if (enemyName.hp <0) {
            enemyName.hp = 0;
            console.log(`Enemy down.\n`)
        } else {
            console.log(`It's a hit! The carrier named ${enemyName.name} now has ${enemyName.hp} HP left.\n`)
        }
    }

    getStatus(): void{
        let output = '';
        let firePower = 0;

        for( let i = 0; i < this.aircraftCount; i++) {
            firePower += this.aircraftList[i].ammo * this.aircraftList[i].baseDamage
        };

        output += `HP: ${this.hp}, Aircraft count: ${this.aircraftCount}, Ammo Storage: ${this.ammoStorage}, Total damage: ${firePower} \n\n`;

        for (let i = 0; i <= this.aircraftList.length - 1; i++) {
            output += `Type: ${this.aircraftList[i].type}, Ammo: ${this.aircraftList[i].ammo}, Base Damage: ${this.aircraftList[i].baseDamage}, All Damage ${this.aircraftList[i].ammo * this.aircraftList[i].baseDamage} \n`
        };

        if (this.hp <= 0) {
            output += `It's is dead Jim :(\n`
        };
        console.log(output);
    };
}