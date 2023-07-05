const age = 28;

const ageDescription = age < 18 ? 'Menor de idade.' : 'Maior de idade.';

const f = 'eee';

// TRUTHY / FALSY;
// TRUE / FALSE;

// ' ', true, [], {}, < > 0
// '', null, undefined, false

const value = '';

if (!value) {
  console.log('Estou vazio!');
}

if (age < 10) {
  console.log('Criança');
} else if (age >= 10 && age < 18) {
  console.log('Adolescente');
} else if (age >= 18 && age <= 55) {
  console.log('Adulto :(');
} else {
  console.log('Idoso');
}

const month = 'dezembro';
let monthDescription = '';

const monthDescriptions = {
  janeiro: 'Chove Muito...',
  fevereiro: 'Muito Sol...',
  marco: 'Meio Termo...',
};

switch (month) {
  case 'janeiro': {
    monthDescription = 'Chove muito...';
    break;
  }

  case 'fevereiro': {
    monthDescription = 'Muito Sol...';
    break;
  }

  default: {
    monthDescription = 'Nada a dizer...';
  }
}

console.log(month, monthDescription);
console.log(monthDescriptions[month] || 'Nada a dizer...');
