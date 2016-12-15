import { ModelsFactory } from "./models";

var batmanAlignment = ModelsFactory.getAlignment("good");
var jokerAlignment = ModelsFactory.getAlignment("evil");
var batman = ModelsFactory.createSuperhero("Batman", 9, batmanAlignment, []);
var joker = ModelsFactory.createSuperhero("The Joker", 6, jokerAlignment, []);

for (let i = 0; i < 13; i += 1) {
    batman.hitEnemy(joker);
    joker.hitEnemy(batman);
}