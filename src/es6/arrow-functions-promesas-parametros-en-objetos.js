// Propiedad de objetos mejorada
let name = 'Irving';
let age = 27;

// Before ES6
obj = { name: name, age: age };

// After ES6
obj2 = { name, age };
console.log(obj2);

// Arrow functions
// Sintaxis reducida y this no vinculable
const names = [
    { name: 'Irving', age: 27 },
    { name: 'Diana', age: 28 }
];

// Before ES6
let listIfNames = names.map(function(item) {
    console.log(item.name);
});

// After ES6
// let listIfNamesArrow = names.map(item => console.log(item.name));
let listIfNamesArrow = names.map(({name}) => console.log(name));

/*
    Ejemplo estructura Arrow funtion
    const listIfNamesConst = (name, age, country) => {
    ...codigo a realizar
    }

    const listIfNamesConst = name => {
    ...codigo a realizar
    }

    const square = num => num * num;
*/

// Promesas
const hellowPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resolve');
        } else {
            reject('reject');
        }
    });
};

hellowPromise()
    .then(response => console.log(response))
    .then(() => console.log('HOLA'))
    .catch(error => console.log(error));