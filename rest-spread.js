// Spread Objects

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// Spread Array

const users1 = ['keven', 'santos', 'leone'];
const users2 = [...users1];

users2.push('mario');
users1.shift();
users1.pop();
users2.push('paulo');

console.log({ users1, users2 });

// Rest

function sum(...values) {
  let total = 0;

  values.forEach((value) => {
    total += value;
  });

  return total;
}

console.log('SUM', sum(1, 2, 23, 4, 5, 6, 7));
