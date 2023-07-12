const { Router } = require('express');

const ShortnerController = require('../controllers/ShortnerController');

const shortnerController = new ShortnerController();
const shortnerRouter = Router();

shortnerRouter.get('/:hash', (request, response) => {
  shortnerController.redirect(request, response);
});

shortnerRouter.get('/api/shortner', (request, response) =>
  shortnerController.getAll(request, response)
);

shortnerRouter.post('/api/shortner', (request, response) =>
  shortnerController.create(request, response)
);

module.exports = shortnerRouter;
