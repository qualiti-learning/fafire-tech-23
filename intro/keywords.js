function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const translations = {
  'fafire-tech-title': 'Fafire Tech Title',
  'good-evening-x': 'Good Evening {0}',
  'hello-world': 'Hello World',
  'welcome-to-fafire-x-x': 'Welcome to Fafire {0}, {1}',
};

function translate(word, replaceKeys) {
  let translatedWord = translations[word];

  if (replaceKeys) {
    if (typeof replaceKeys === 'string') {
      return translatedWord.replace('{0}', replaceKeys);
    }

    console.log(typeof replaceKeys);

    if (typeof Array.isArray(replaceKeys)) {
      replaceKeys.forEach((replaceKey, index) => {
        translatedWord = translatedWord.replace(`{${index}}`, replaceKey);
      });
    }
  }

  return translatedWord;
}

console.log(translate('welcome-to-fafire-x-x', ['Keven Leone', 'Professor']));
console.log(translate('good-evening-x', 'Keven Leone'));
console.log(translate('hello-world'));

function makeCar(make, model, year) {
  if (!make || !model || !year) {
    throw new Error('Make, Model or Year missing...');
  }

  if (
    typeof make !== 'string' ||
    typeof model !== 'string' ||
    typeof year !== 'number'
  ) {
    throw new Error('Make, Model or Year has an incompatible type...');
  }

  return new Car(make, model, year);
}

try {
  const car = makeCar('Ford', 'Accord', 1996);
  const car2 = makeCar('Hyundai', 'HB20', 2031);

  console.log(car, car2);

  if (car instanceof Car) {
    console.log('É instância de carro.');
  }
} catch (error) {
  if (error instanceof Error) {
    return console.error(error.message);
  }

  console.error(error);
}
