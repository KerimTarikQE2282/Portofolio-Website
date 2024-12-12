import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider's service (Gmail is used here as an example)
      auth: {
        user: 'kerim.tarik.qe2282@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app-specific password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: email, // Sender's email address
      to: 'kerim.tarik.qe2282@gmail.com', // Receiver's email address (can also use `req.body.email` to send confirmation emails)
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
