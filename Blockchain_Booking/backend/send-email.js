const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { nftName, nftDescription, recipientEmail } = req.body;

  // Email transporter setup
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Aap koi aur SMTP service bhi use kar sakte hain
    auth: {
        user: "aryajaiswal585@gmail.com", // Replace with your email
        pass: "pcrs ftef hvna lurq", // Gmail ka password (App Password agar 2FA enabled hai)
    },
  });

  const mailOptions = {
    from: 'aryajaiswal585@gmail.com',
    to: "tusharjaiswaltj01@gmail.com", // User ka email (frontend se aayega)
    subject: `Buy NFT - ${nftName}`,
    text: `You have shown interest in purchasing the NFT: ${nftName}\n\nDescription: ${nftDescription}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.', error });
  }
};

module.exports = sendEmail;
