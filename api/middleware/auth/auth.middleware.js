const dotenv = require("dotenv").config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
const sequelize = require("../../config/database");
const bcrypt = require("bcrypt");
const { TokenExpiredError } = jwt; 

exports.createToken = async (req, res, next) => {
  try {
    const result = res.locals.payload;
    JSON.parse(JSON.stringify(result));
    const token = jwt.sign(
      {
        username: result.username,
        role: result.role,
        institutionId: result.id,
        institutionCode: result.institution_code,
        institutionType: result.institution_type,
        address: result.address,
        city: result.city,
        state: result.state,
        pincode: result.pincode,
        pocName: result.poc_name,
        pocEmail: result.poc_email,
      },
      key,
      { expiresIn: "4h" }
    );

    res.locals.token = token;
    next();
  } catch (error) {
    console.log({ "Error Creating Token": error });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const [adminData, adminMetadata] = await sequelize.query(
      "SELECT * FROM admin_users WHERE username = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (adminData != undefined) {
      const result = await bcrypt.compare(password, adminData.password);
      if (!result) {
        return res.status(401).send({ error: "Invalid username or password" });
      }
      adminData.role = "admin";
      res.locals.payload = { ...adminData };
      return next();
    }

    const [userData, userMetadata] = await sequelize.query(
      "SELECT * FROM users WHERE username = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    
    if (!userData) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const result = await bcrypt.compare(password, userData.password);

    if (!result) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const [instituteDetails, _] = await sequelize.query(
      "SELECT * FROM institution WHERE id = :institution_id",
      {
        replacements: {
          institution_id: userData.institution_id,
        },
        type: sequelize.QueryTypes.SELECT,
      }
    );
    userData.role = "user";
    res.locals.payload = { ...userData, ...instituteDetails };

    return next();
  } catch (error) {
    console.error({ "Error in Loginuser": error });
    return res
      .status(500)
      .send({ error: "An error occurred while logging in" });
  }
};

exports.checkAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const cookieToken = req.cookie;
    console.log("cookieToken :", cookieToken);
    
    const userData = jwt.verify(token, key);
    if (userData.role != "admin") {
      return res.status(403).send({ message: "Not Authorized" });
    }
    res.locals.userData = userData;
    const inValidToken = await checkUnauthorizedToken(token);
    if (inValidToken) {
      console.log("unauth");
      return res.status(401).send({ message: "unauthorized access" });
    }
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.log("Token expired:", error);
      return res.status(401).send({ message: "Token expired , Please Login again", expiredAt: error.expiredAt });
    }
    console.log(error);
    res.status(403).send({ message: "Token is not valid" });
  }
};

exports.checkUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const userData = jwt.verify(token, key);
    
    if (userData.role != "user") {
      return res.status(403).send({ message: "Not Authorized" });
    }
    res.locals.userData = userData;
    const inValidToken = await checkUnauthorizedToken(token);    
    if (inValidToken) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.log("Token expired:", error);
      return res.status(401).send({ message: "Token expired , Please Login again", expiredAt: error.expiredAt });
    }
    console.log(error);
    res.status(403).send({ message: "Token is not valid" });
  }
};

const checkUnauthorizedToken = async (token) => {
  try {
    const [inValidToken] = await sequelize.query(
      "SELECT * FROM unauth_tokens WHERE token = :token",
      {
        replacements: {
          token: token,
        },
      }
    );
    if (inValidToken.length > 0) {      
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const userData = jwt.verify(token, key);
    res.locals.userData = userData;
    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.log("Token expired:", error);
      return res.status(401).send({ message: "Token expired , Please Login again", expiredAt: error.expiredAt });
    }
    res.status(403).send({ message: "Token is not valid" });
  }
};
