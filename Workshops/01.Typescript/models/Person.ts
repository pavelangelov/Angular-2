import { Creature } from "./Creature";
import { Alignment } from "./Alignment";
import { IPet } from "./IPet";

export class Person extends Creature implements IPet {
    constructor(name: string, damage: number, alignmet: Alignment) {
        super(name, damage, alignmet);
    }
}