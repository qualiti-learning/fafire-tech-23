const crypto = require('node:crypto');
const prisma = require('../utils/Prisma');

class ShortnerController {
  async create(request, response) {
    const {
      body: { author, link },
    } = request;

    if (!link) {
      return response.status(400).json({ message: 'Link is required' });
    }

    const [, hash] = crypto.randomUUID().split('-');

    const shortner = await prisma.shortner.create({
      data: {
        author,
        hash,
        link,
      },
    });

    response.json(shortner);
  }

  async getAll(request, response) {
    const shortners = await prisma.shortner.findMany();

    response.json(shortners);
  }

  async redirect(request, response) {
    const {
      params: { hash },
    } = request;

    const shortner = await prisma.shortner.findFirst({ where: { hash } });

    if (!shortner) {
      return response.status(404).json({ message: 'Hash not found.' });
    }

    await prisma.shortner.update({
      data: { ...shortner, hits: shortner.hits + 1 },
      where: { id: shortner.id },
    });

    response.redirect(shortner.link);
  }
}

module.exports = ShortnerController;
