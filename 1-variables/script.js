//1.1 Types simples

const name = 'Jacques';
let age = 80;
const useless = 'something';

console.log(name, age, useless);

age += 1;

//On affiche à nouveau les valeurs de ces variables dans la console
console.log(name, age, useless);

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry'];
let vegetables = ['potato', 'curlyflower', 'tomato'];

console.log(fruits, vegetables);

vegetables = [...vegetables, 'banana'];
vegetables.pop();

console.log(fruits, vegetables);

//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);

savedGame = {};
settings = {...settings, music: true, resolution: [3840, 2160]};

console.log(settings, savedGame);
