// Before ES6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// After ES6
function newFunction2(name = 'oscar', age = 26, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Irving', 27, 'MX');

let hello = 'Hello';
let world = 'World';

// Before ES6
let epicPhrase = hello + ' ' + world;

// After ES6
let epicPhrase2 = `${hello} ${world}`;