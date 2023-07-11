const users = [
  {
    id: 1,
    name: 'Keven',
  },
  {
    id: 2,
    name: 'Leone',
  },
];

function getUsersCallback(callback) {
  setTimeout(() => {
    callback([
      {
        id: 123,
        name: 'Keven',
      },
    ]);
  }, 2000);
}

function waitTimeout(timeout) {
  return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

async function getUserAsyncPromise(userId) {
  await waitTimeout(3333);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new Error('User not exist');
  }

  return user;
}

function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);

      if (user) {
        return resolve(user);
      }

      reject(new Error('User not exist'));
    }, 2000);
  });
}

console.log('Inicio...');

getUsersCallback((users) => {
  console.log('callback', users);
});

getUserPromise(1)
  .then((users) => console.log('promise', users))
  .catch((error) => console.error(error.stack));

getUserAsyncPromise(2)
  .then((users) => console.log('async promise', users))
  .catch((error) => console.error(error.stack));

async function main() {
  try {
    const users = await getUserAsyncPromise(3);

    console.log('async promise main', users);
  } catch (error) {
    console.error(error.message);
  }
}

main();

console.log('Fim...');
