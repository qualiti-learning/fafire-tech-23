const nodemailer = require('nodemailer');

const { MAILER_HOST, MAILER_PORT, MAILER_USER, MAILER_PASSWORD } = process.env;

console.log({
  MAILER_HOST,
  MAILER_PORT,
  MAILER_USER,
  MAILER_PASSWORD,
});

const transporter = nodemailer.createTransport({
  host: MAILER_HOST,
  port: MAILER_PORT,
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASSWORD,
  },
});

module.exports = transporter;
