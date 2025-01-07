const dotenv = require('dotenv').config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");

exports.createToken = (req,res) => {
  try {
    const result = res.locals.payload;
    JSON.parse(JSON.stringify(result));
    console.log(result);
    
    const token = jwt.sign(
      {
        username: result.username,  
        role: result.role,
        institutionId : result.id,
        institutionCode : result.institution_code,
        institutionType: result.institution_type,
        address: result.address,
        city: result.city,
        state: result.state,
        pincode: result.pincode,
        pocName: result.poc_name,
        pocEmail: result.poc_email,
      },
      key
    );
    return res.status(201).send({token: token});

  } catch (error) {
    console.log({"Error Creating Token":error});
  }
};

exports.checkAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const cookieToken = req.cookie;
    console.log("cookieToken :", cookieToken);
    
    const userData = jwt.verify(token, key);
    if(userData.role != 'admin'){
      return res.status(403).send({ message: "Not Authorized" });
    }
    res.locals.userData = userData;
    next();
  } catch (error) {
    console.log(error);
    
    res.status(403).send({ message: "Token is not valid" });
  }
}

exports.checkUser = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const userData = jwt.verify(token, key);
    if(userData.role != 'user'){
      return res.status(403).send({ message: "Not Authorized" });
    }
    res.locals.userData = userData;
    next();
  } catch (error) {
    res.status(403).send({ message: "Token is not valid" });
  } 
}

exports.checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const userData = jwt.verify(token, key);
    res.locals.userData = userData;
    next();
  } catch (error) {
    res.status(403).send({ message: "Token is not valid" });
  }
}
