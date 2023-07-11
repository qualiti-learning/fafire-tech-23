const users = ['Maju', 'Jean', 'Julio', 'Fernando', 'Keven'];

const translations = {
  'fafire-tech-title': 'Fafire Tech Title',
  'good-evening-x': 'Good Evening {0}',
  'hello-world': 'Hello World',
  'welcome-to-fafire-x-x': 'Welcome to Fafire {0}, {1}',
};

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log('---------------');

for (const user of users) {
  console.log(user);
}

console.log('---------------');

users.forEach((user, index) => {
  console.log(user, index);
});

console.log('---------------');

let i = 0;

while (i < 100) {
  console.log(i, new Date());
  i++;
}

console.log('---------------');

for (const key in translations) {
  console.log(key, translations[key]);
}
