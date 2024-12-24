const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const twilio = require("twilio");

const app = express();
const PORT = 5006;

// Middleware
app.use(cors("*"));
app.use(bodyParser.json());

// Twilio Setup
const accountSid = ""; // Replace with your Twilio Account SID
const authToken = "";   // Replace with your Twilio Auth Token
const client = twilio(accountSid, authToken);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aryajaiswal585@gmail.com", // Replace with your email
    pass: "pcrs ftef hvna lurq", // Replace with your email password
  },
});

// Alert Endpoint
app.post("/alert", async (req, res) => {
  const { message, email, phoneNumber } = req.body;

  // Send Email
  try {
    await transporter.sendMail({
      from: "aryajaiswal585@gmail.com", // Replace with your email
      to: "samarthshukla150604@gmail.com", // Replace with the recipient's email
      subject: "Alert Notification",
      text: message,
    });
    console.log("Email sent successfully!");
  } catch (err) {
    console.error("Error sending email:", err);
  }

  // Send SMS
  try {
    await client.messages.create({
      body: message,
      to: "+918770026694", 
      from: "+17753076712", 
    });
    console.log("SMS sent successfully!");
  } catch (err) {
    console.error("Error sending SMS:", err);
  }

  res.send({ success: true });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
