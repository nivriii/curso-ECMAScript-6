// Before ES6
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, \n"
+ "consectetur, adipisci velit\n"
+"...";

// After ES6
let lorem2 = `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit
...`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Irving',
    'age': 27,
    'country': 'MX'
}

// Before ES6
console.log(person.name, person.age, person.country);

// After ES6
let {name, age, country}  = person;
console.log(name, age, country);

// Operador de propagación
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Before ES6
let education = ['David'].concat(team1).concat(team2);
console.table(education);

// After ES6
let education2 = ['David', ...team1, ...team2];

console.table(education2);

// Alcance de variables
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); <- Error variable no definida.

const A = 'a'; 
// A = 'b'; <- Error asignación a variable constante.