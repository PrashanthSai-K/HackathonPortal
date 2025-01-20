const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const mailPass = process.env.MAIL_PASS;

const generateEmailTemplate = (content) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    ${content}
  </body>
</html>
`;

const sendEmailToParticipants = async (recipients, content) => {
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
        subject: "Hackathon Update",
        html: generateEmailTemplate(content), // Use HTML from the rich text editor
    };

    try {
        console.log( generateEmailTemplate(content));
        
        await transporter.sendMail(mailOptions);
        console.log("Emails sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmailToParticipants;