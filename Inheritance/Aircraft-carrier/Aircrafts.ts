export abstract class Aircrafts {
    priority: boolean;
    type: string;
    ammo: number;
    baseDamage: number;
    maxAmmo: number;

    constructor(priority: boolean, type: string, baseDamage: number, maxAmmo: number){
        this.priority = this.priority
        this.type = type;
        this.ammo = 0;
        this.baseDamage = baseDamage;
        this.maxAmmo = maxAmmo;
    }

    needsAmmo(): boolean {
        return this.ammo < this.maxAmmo;
    }

    refill() {
        if(this.needsAmmo) {
            let fillAmount = this.maxAmmo - this.ammo
            this.ammo += fillAmount;
            return fillAmount;
        }
    }

    fight() {
        let damageDealt = this.ammo * this.baseDamage
        this.ammo = 0;
        console.log(`Damage dealt: ${damageDealt}`)
    }

    getType() {
        console.log(`Aircraft type: ${this.type}`)
    }

    getStatus() {
        console.log(`Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage ${this.ammo * this.baseDamage}`)
    }

    isPriority() {
        return this.priority;
    }
}