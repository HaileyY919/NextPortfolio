
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.example.com",  // Replace with your mail server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // your email
        pass: 'your-email-password' // your email password
      }
    });

    // Define email options
    let mailOptions = {
      from: '"Your Name or Website" <your-email@example.com>', // sender address
      to: "your-receiving-email@example.com", // list of receivers
      subject: "New Contact Form Submission", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      html: `<b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}` // html body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).send("Error sending email");
      }
      console.log("Message sent: %s", info.messageId);
      return res.status(200).send("Email successfully sent");
    });
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
