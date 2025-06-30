export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Podés enviar esto a un email con un servicio como Resend, Nodemailer, SendGrid, etc.
  console.log('New Contact Submission:', { name, email, phone, message });

  return res.status(200).json({ message: 'Form submitted successfully' });
}
