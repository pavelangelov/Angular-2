import { Alignment } from "./Alignment";
import { colors } from "../utils/console-colors";

export class Creature {
    private _life: number;
    private _name: string;
    private _damage: number;
    private isAlive: boolean;
    protected _alignment: Alignment;

    constructor(name: string, damage: number, alignment: Alignment) {
        this._name = name;
        this._damage = damage;
        this._alignment = alignment;
        this._life = 100;
        this.isAlive = true;
    }

    get name() {
        return this._name;
    }

    get life() {
        return this._life;
    }

    get damage() {
        return this._damage;
    }

    get alignment() {
        return Alignment[this._alignment];
    }

    takeHit(enemy: Creature) {
        if (this.isAlive) {
            console.log(colors.fg.Green, `${enemy.name} hitted ${this.name} with ${enemy.damage} damage!`, colors.Reset);
            console.log(colors.fg.Crimson, `${this.name} current life is: ${this._life}!`, colors.Reset)
            this._life -= enemy.damage;
            if (this._life <= 0) {
                this.isAlive = false;
                console.log("\x1b[31m");
                console.log(colors.fg.Red, `${enemy.name} killed ${this.name}`, colors.Reset);
            }
        } else {
            console.log(colors.fg.Yellow, `${this.name} is dead and cannot take more hits!`, colors.Reset);
        }
    }

    hitEnemy(enemy: Creature) {
        if (this.isAlive){
            enemy.takeHit(this);
        } else {
            console.log(colors.fg.Yellow, `${this.name} is dead and cannot hit enemies!`, colors.Reset);
        }
    }
}