const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const shortnerRouter = require('./routes/ShortnerRouter');
const contactRouter = require('./routes/ContactRouter');

const app = express();

app.use(helmet());
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(contactRouter);
app.use(shortnerRouter);
app.get('/', (request, response) => response.send({ message: 'Hello World' }));

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
