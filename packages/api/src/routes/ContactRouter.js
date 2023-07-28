const { Router } = require('express');

const ContactController = require('../controllers/ContactController');

const ContactRouter = Router();

const contactController = new ContactController();

ContactRouter.get('/contact', (request, response) => {
  contactController.getAll(request, response);
});

ContactRouter.post('/contact', (request, response) => {
  contactController.create(request, response);
});

module.exports = ContactRouter;
