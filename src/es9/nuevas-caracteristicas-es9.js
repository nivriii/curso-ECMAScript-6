// Spread Operator
// Operadora de propagación

const obj = {
    name: 'Irving',
    age: 32,
    conuntry: 'MX'
};

let { name, ...all } = obj;

console.log(name, all);

// Propiedades de propagación
// Propagation Properties

const obj1 = {
    name: 'Irving',
    age: 32
};

const obj2 = {
    ...obj1,
    conuntry: 'MX'
};

console.log(obj2);

// Promise Finally
// Promesa finalmente

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'));
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-04-10');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(match);
console.log(year, month, day);