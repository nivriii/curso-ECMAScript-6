// entries
const data = {
    fronted: 'Ana',
    backend: 'Irving',
    design: 'Lucy'
}

const entries = Object.entries(data);

console.table(entries);
console.log(entries.length);

// values
const values = Object.values(data);

console.log(values);

// padStart, padEnd
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));