import { DestructivePower } from "./DestructivePower";
import { HelpfulPower } from "./HelpfulPower";
import { Power } from "./Power";
import { Person } from "./Person";
import { Superhero } from "./Superhero";
import { SuperVillian } from "./SuperVillians";
import { Alignment } from "./Alignment";

export class ModelsFactory {
    static createSuperhero(name: string, damage: number, alignment: Alignment, powers: Power[]) {
        return new Superhero(name, damage, alignment, powers)
    }

    static createSuperVillian(name: string, damage: number, alignment: Alignment, powers: Power[]) {
        return new SuperVillian(name, damage, alignment, powers);
    }

    static createHelpfulPower(name: string, restoreHealth: number, raiseDamage: number) {
        return new HelpfulPower(name, restoreHealth, raiseDamage);
    }

    static createDestructivePower(name: string, restoreHealth: number, raiseDamage: number) {
        return new DestructivePower(name, restoreHealth, raiseDamage);
    }

    static createPerson(name: string, damage: number, alignment: Alignment) {
        return new Person(name, damage, alignment);
    }

    static getAlignment(alignment?:string) {
        if (alignment === "good" || alignment === "Good") {
            return Alignment.Good;
        } else if (alignment === "evil" || alignment === "Evil") {
            return Alignment.Evil;
        } else {
            return Alignment.Neutral        // If passed aligment is invalid the Creature is Neutral :)
        }
    }
}