import { Power } from "./Power";

export class DestructivePower extends Power {
    lowerDamage: number;
    applyDamage: number;

    constructor(name: string, lowerDamage: number, applyDamage: number) {
        super(name);
        this.lowerDamage = lowerDamage;
        this.applyDamage = applyDamage;
    }
}