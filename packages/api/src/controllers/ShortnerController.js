const crypto = require('node:crypto');
const prisma = require('../utils/Prisma');

const sleep = (timer) =>
  new Promise((resolve) => setTimeout(() => resolve(), timer));

class ShortnerController {
  async create(request, response) {
    const {
      body: { author, link: _link },
    } = request;

    const link = _link?.trim();

    if (!link) {
      return response.status(400).json({ message: 'Link is required' });
    }

    const isValidURL =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(
        link
      );

    if (!isValidURL) {
      return response.status(400).json({ message: 'Link is invalid' });
    }

    const [, hash] = crypto.randomUUID().split('-');

    const shortner = await prisma.shortner.create({
      data: {
        author,
        hash,
        link,
      },
    });

    await sleep(3000);

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
