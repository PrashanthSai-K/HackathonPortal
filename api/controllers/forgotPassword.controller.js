const sequelize = require("../config/database");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = process.env.JWT_KEY;

exports.sendResetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const [user] = await sequelize.query(
      "SELECT id FROM users WHERE username = :email",
      {
        replacements: {
          email: email,
        },
      }
    );

    if (!user.length)
      return res.status(404).json(  { message: "User not found" });

    // Generate a reset token
    const resetToken = jwt.sign(
      { userId: user[0].id },
      key,
      { expiresIn: "5m" }
    );

    // Send reset link via email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const resetLink = `http://localhost:5173/reset-password?resetToken=${resetToken}`;
    await transporter.sendMail({
      to: email,
      subject: "Password Reset",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link is valid for 5 Minutes.</p>`,
    });

    res
      .status(200)
      .json({ message: "Password reset link has been sent to your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    const token = jwt.verify(resetToken, key);
    const userId = token.userId;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password and clear the reset token
    await sequelize.query(
      "UPDATE users SET password = :hashedPassword WHERE id = :userId",
      {
        replacements: {
          hashedPassword: hashedPassword,
          userId: userId,
        },
      }
    );

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token Expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    res.status(500).json({ message: "Server error" });
  }
};
