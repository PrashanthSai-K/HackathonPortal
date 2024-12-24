const sequelize = require("../config/database");
const dotenv = require("dotenv").config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");

exports.register_institute = async (req, res) => {
  try {
    const [result, metadata] = await sequelize.query("SELECT * FROM users");
    console.log(result);
    res.send("hiii");
  } catch (error) {
    console.log(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const [adminData, adminMetadata] = await sequelize.query(
      "SELECT * FROM admin_users WHERE username = ? AND password = ?",
      {
        replacements: [username, password],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (adminData !== undefined) {
      adminData.role = "admin";
      console.log(adminData.role);
      res.locals.payload = adminData;
      return next();
    }

    const [userData, userMetadata] = await sequelize.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      {
        replacements: [username, password],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    console.log({ results: userData });
    if (userData !== undefined) {
      userData.role = "user";
      console.log(userData.role);
      res.locals.payload = userData;
      return next();
    }
    return res.status(401).send({ message: "Invalid username or password" });
  } catch (error) {
    console.error({ "Error in Loginuser": error });
    return res
      .status(500)
      .send({ message: "An error occurred while logging in" });
  }
};

exports.getUser = async (req, res) => {
  const token = req.body.token;
  try {
    const userData = jwt.verify(token, key);
    res.send(userData);
  } catch (err) {
    res.status(403).send({ message: "Token is not valid" });
  }
};
