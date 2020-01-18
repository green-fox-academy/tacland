export abstract class Aircrafts {
    ammo: number;
    baseDamage: number;
    maxAmmo: number;

    constructor(baseDamage: number, maxAmmo: number){
        this.ammo = 0;
        this.baseDamage = baseDamage;
        this.maxAmmo = maxAmmo;
    }

    needsAmmo(): boolean {
        return this.ammo < this.maxAmmo;
    }

    fill() {
        if(this.needsAmmo) {
            let fillAmount = this.maxAmmo - this.ammo
            this.ammo += fillAmount;
            return fillAmount;
        }
    }

    fight() {
        this.ammo * this.baseDamage
        this.ammo = 0;
    }
}