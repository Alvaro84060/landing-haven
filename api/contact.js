  import { Resend } from 'resend';

  const resend = new Resend(process.env.RESEND_API_KEY);

  export default async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, message } = req.body;

    try {
      const data = await resend.emails.send({
        from: 'Haven Concierge <no-reply@havenconcierge.com.au>',
        to: 'hello@havenconcierge.com.au',
        subject: `New Contact Form Submission from ${name}`,
        reply_to: email,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Email error:', error);
      return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
  };
