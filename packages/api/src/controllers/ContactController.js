const transporter = require('../utils/Mailer');
const z = require('zod');

const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(20),
  message: z.string().max(250),
});

class ContactController {
  async create(request, response) {
    const { name, email, message } = request.body;

    const { error, success } = contactSchema.safeParse(request.body);

    if (!success) {
      const issues = error.issues.map(
        (issue) => `${issue.path[0]}: ${issue.message}`
      );

      return response.status(400).json({ reason: 'Invalid data', issues });
    }

    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: `bar@example.com, ${email}`, // list of receivers
      subject: `Contact from ${name}`, // Subject line
      text: 'Hello world?', // plain text body
      html: `
        <div>
            <h1>Message received at: ${new Date().toISOString()}</h1>
            <strong>From:</strong> ${name} <br />
            <strong>Email:</strong> ${email} <br />
            <strong>Message:</strong> ${message} <br />
        </div>
      `,
    });

    response.json({ message: 'Email sent...' });
  }

  getAll(request, response) {
    response.json({ message: 'Hey...' });
  }
}

module.exports = ContactController;
