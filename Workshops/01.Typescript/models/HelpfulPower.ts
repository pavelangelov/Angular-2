import { Power } from "./Power";

export class HelpfulPower extends Power {
    restoreHeath: number;
    raiseDamage: number;

    constructor(name: string, restoreHealth: number, raiseDamage: number) {
        super(name);
        this.restoreHeath = restoreHealth;
        this.raiseDamage = raiseDamage;
    }
}