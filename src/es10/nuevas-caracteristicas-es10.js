let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// aplana la matriz
console.log(array.flat(2));

// mapea cada elemente y le pasa una función y se aplana

let array2 = [1, 2, 3, 4, 5];

console.log(array2.map(value => [value, value * 2]));
console.log(array2.flatMap(value => [value, value * 2]));

// trimStart - trimEnd
let hello = '       hello world      ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// try/catch
try {
    
// } catch (error) { <- no es necesario pasar el valor
} catch {
    error
}

// fonmEntries
let entries = [['name', 'Irving'], ['age', 27]];
console.log(Object.fromEntries(entries));

// Symbol - description

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);