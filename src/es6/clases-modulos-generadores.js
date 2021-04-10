// Clases ES6
class calculator {

    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc =  new calculator();
console.log(calc.sum(2, 3));

// Modulos ES6
import { hello } from './module';

// Code Runner usa nodejs para correr el código. 
// Nodejs usa la sintaxis de CommonJS Module
// const hello = require('./module');

console.log(hello());

// Generadores
// Retorna una serie de valores segun el algoritmo definido

function* helloWorld() {

    if (true) {
        yield 'Hello, '
    }

    if (true) {
        yield 'World'
    }

}

const generatoHello = helloWorld();

console.log(generatoHello.next().value);
console.log(generatoHello.next().value);
console.log(generatoHello.next().value);