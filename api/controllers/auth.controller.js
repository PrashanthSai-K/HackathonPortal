const sequelize = require("../config/database");
const dotenv = require('dotenv').config();
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



exports.loginUser = async (req, res , next) => {
  try {
    const { username, password } = req.body;
    const [result, metadata] = await sequelize.query(
      "SELECT * FROM user WHERE username = ? AND password = ?",
      {
        replacements: [username, password], 
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (result) {      
      res.locals.payload = result;
      next();
    } else {
      res.status(401).send({message:"Invalid username or password"});
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({message:"An error occurred while logging in"});
  }
};


