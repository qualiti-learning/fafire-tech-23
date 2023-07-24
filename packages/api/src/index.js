const express = require('express');
const morgan = require('morgan');

const shortnerRouter = require('./routes/ShortnerRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(shortnerRouter);
app.get('/', (request, response) => response.send({ message: 'Hello World' }));

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));