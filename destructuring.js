// Rest Destructuring - Array

const activeUsers = ['jose', 'maria', 'lucas'];

function getUsers() {
  return ['keven', 'leone', ...activeUsers];
}

const [, , , maria, ...restUsers] = getUsers();

// const keven = users[0];
// const leone = users[1];
// const jose = users[2];

console.log(maria, restUsers);

// Rest Destructuring - Objects

function getUser() {
  return {
    name: 'keven',
    email: 'kevenleone@qwe.com',
    address: {
      city: 'Recife',
      state: 'Pernambuco',
      street: 'Recife Avenue',
      number: 12301203123,
    },
  };
}

const {
  name,
  email,
  address: { city, ...restAddress },
} = getUser();

// const name = user.name;
// const email = user.email;
// const city = address.city;
// const state = address.state;

console.log(name, email, city, restAddress);
