const express = require('express');

const app = express();

const PORT = 3333;

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');

  response.status(500).json({ message: 'Hello World' });
});

app.get('/fafire', (request, response) => {
  response.redirect('https://google.com');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
