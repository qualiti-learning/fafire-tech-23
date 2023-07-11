// Set

const set = new Set([1, 2, 3, 4, 4, 4, 4, 3, 3, 10]);

console.log(set.has(3));

// Math

console.log(Math.PI);
console.log(Math.random());

// JSON

const object = { name: 'Keven' };
const array = [object];

const objectStringfied = JSON.stringify(object);
const arrayStringfied = JSON.stringify(array);

console.log(objectStringfied);
console.log(arrayStringfied);

console.log(typeof objectStringfied, typeof arrayStringfied);

console.log(JSON.parse(objectStringfied));
console.log(JSON.parse(arrayStringfied));
