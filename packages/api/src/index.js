const express = require('express');
const shortnerRouter = require('./routes/ShortnerRouter');

const app = express();

app.use(express.json());
app.use(shortnerRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
