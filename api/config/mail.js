const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

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

const resetPasswordEmailTemplate = (resetLink) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset Email</title>
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
        <div style="font-weight: bold; font-size: large;"> Tamilnadu State Council For Higher Education </div>
      </div>
      <!-- Body Section -->
      <div class="email-body">
        <h2>Password Reset Request</h2>
        <p>Dear User,</p>
        <p>We received a request to reset your password. Please click the link below to reset your password:</p>
        <p>
          <a href="${resetLink}" style="background-color: #9146ff; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Reset Password</a>
        </p>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Regards,<br/>Tamilnadu State Council For Higher Education</p>
      </div>
    </div>
  </body>
</html>
`;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmailToParticipants = async (recipients, subject, content) => {
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

const sendResetEmail = async (resetLink, email) => {
  const mailOptions = {
    from: "no-reply@tnsche.gov.in",
    to: email,
    subject: "Password Reset",
    html: resetPasswordEmailTemplate(resetLink),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log({
      message: "Password reset link has been sent to your email.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmailToParticipants, sendResetEmail };
