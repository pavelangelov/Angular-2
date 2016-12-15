import { Creature } from "./Creature";
import { IPet } from "./IPet";
import { Alignment } from "./Alignment";
import { Power } from "./Power";

export class SuperVillian extends Creature {
    private _pets: IPet[];
    private _powers: Power[];

    constructor(name: string, damage: number, alignmet: Alignment, ...powers) {
        super(name, damage, alignmet);
        this._powers = powers
    }

    addPet(pet: IPet) {
        this._pets.push(pet);
    }

    listPets() {
        return this._pets.join(", ");
    }

    addPower(power: Power) {
        this._powers.push(power);
    }
}