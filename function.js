function sum(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = (a, b) => a + b;
const loop = (x) => (x >= 10 ? x : loop(x + 1));

console.log('MAIN START', new Date());

const printCurrentDate = () => console.log('PRINT CURRENT DATE', new Date());

function loadLink(link, callback) {}

loadLink('https://github.com/qualiti-learning/fafire-tech-23', () => {});

console.log('MAIN END', new Date());
