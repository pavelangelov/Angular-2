import { Alignment } from "./Alignment";

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
            console.log(`${enemy.name} hitted ${this.name} with ${enemy.damage} damage!`);
            this._life -= enemy.damage;
            if (this._life <= 0) {
                this.isAlive = false;
                console.log(`${enemy.name} killed ${this.name}`);
            }
        } else {
            console.log(`${this.name} is dead and cannot take more hits!`);
        }
    }

    hitEnemy(enemy: Creature) {
        if (this.isAlive){
            enemy.takeHit(this);
        } else {
            console.log(`${this.name} is dead and cannot hit enemies!`);
        }
    }
}