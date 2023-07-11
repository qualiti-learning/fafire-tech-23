const users = [
  {
    company: 'FAFIRE',
    id: 1,
    name: 'Keven',
  },
  {
    company: 'FAFIRE',
    id: 2,
    name: 'Leone',
  },
  {
    company: 'Google',
    id: 3,
    name: 'Jose',
  },
];

const users2 = [{ id: 3, name: 'Jose' }];

const users3 = users.concat(users2);

// find, findIndex, every, some, map, forEach, filter, sort, reduce

// find

const user = users.find((user) => user.name === 'Keven');

// filter

const fafireUsers = users.filter((user) => user.company === 'FAFIRE');

// every

const allUsersBelongsToFafire = users.every(
  (user) => user.company === 'FAFIRE'
);

// some

const someUsersBelongsToFafire = users.some(
  (user) => user.company === 'FAFIRE'
);

// map

const fafireUsersWithEmail = fafireUsers.map((user) => ({
  ...user,
  email: `${user.name.toLowerCase()}-${Math.ceil(
    Math.random() * 100
  )}@fafire.com`,
}));

fafireUsersWithEmail.forEach((fafireUser) => {
  console.log(fafireUser);
});

const usersSortByName = [...users].sort((userA, userB) =>
  userA.name.localeCompare(userB.name)
);

const sum = (...values) =>
  values.reduce((prevValue, currValue) => prevValue + currValue);

console.log({
  allUsersBelongsToFafire,
  fafireUsers,
  fafireUsersWithEmail,
  someUsersBelongsToFafire,
  user,
  users,
  usersSortByName,
});

console.log('SUM', sum(1, 2, 3, 4, 5, 6));
