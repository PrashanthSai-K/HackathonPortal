const dotenv = require('dotenv').config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
exports.createToken = (req,res) => {
  try {
    const result = res.locals.payload;
    JSON.parse(JSON.stringify(result));
    const token = jwt.sign(
      {
        username: result.username,
        role: result.role,
      },
      key
    );
    console.log(token);
    return res.status(201).send({token: token});
  } catch (error) {
    console.log({"Error Creating Token":error});
  }
};
