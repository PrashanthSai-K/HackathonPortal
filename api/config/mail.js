const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const mailPass = process.env.MAIL_PASS;

const generateEmailTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        border-radius: 8px;
        overflow: hidden;
      }
      .email-header {
        background-color: #f4f4f4;
        text-align: center;
        padding: 20px;
      }
      .email-header img {
        height: 30px;
      }
      .email-body {
        padding: 20px;
        font-size: 14px;
        color: #333333;
      }
      .email-body a {
        color: #9146ff;
        text-decoration: none;
      }
      .email-footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #666666;
        background-color: #f4f4f4;
      }
      .email-footer a {
        color: #9146ff;
        text-decoration: none;
      }
      .social-icons {
        margin-top: 10px;
      }
      .social-icons img {
        height: 16px;
        margin: 0 5px;
        vertical-align: middle;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <!-- Header Section -->
      <div class="email-header">
        <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Twitch_logo_%282019%29.svg" alt="Twitch Logo" /> -->
        <div style="font-weight: bold; font-size: large; "> Tamilnadu State Council For Higher Education </div>
      </div>
      <!-- Body Section -->
      <div class="email-body">
          ${content}
      </div>
    </div>
  </body>
</html>
`;

const sendEmailToParticipants = async (recipients, subject, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vigneshleefc@gmail.com",
      pass: mailPass,
    },
  });

  const mailOptions = {
    from: "no-reply@tnsche.gov.in",
    to: recipients.join(","), // Array of participant emails
    subject: subject,
    html: generateEmailTemplate(content), // Use HTML from the rich text editor
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Emails sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmailToParticipants;