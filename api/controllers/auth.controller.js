const sequelize = require("../config/database");
const dotenv = require("dotenv").config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register_institute = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      instituteCode,
      instituteName,
      instituteAddress,
      instituteCity,
      instituteState,
      institutePincode,
      instituteType,
      pocName,
      pocEmail,
      pocPhone,
      password,
    } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    const [result, metadata] = await sequelize.query(
      `INSERT INTO institution (institution_code, institution_name, institution_type, address, city, state, pincode, poc_name, poc_email, poc_number ) 
           VALUES ( :institution_code, :institution_name, :institution_type, :address, :city, :state, :pincode, :poc_name, :poc_email, :poc_number)`,
      {
        replacements: {
          institution_code: instituteCode,
          institution_name: instituteName,
          institution_type: instituteType,
          address: instituteAddress,
          city: instituteCity,
          state: instituteState,
          pincode: institutePincode,
          poc_name: pocName,
          poc_email: pocEmail,
          poc_number: pocPhone,
        },
        transaction,
      }
    );

    const [result1, metadata1] = await sequelize.query(
      `INSERT INTO users (username, password ) VALUES ( :poc_email, :password )`,
      {
        replacements: {
          poc_email: pocEmail,
          password: hashedPass,
        },
        transaction,
      }
    );

    await transaction.commit();

    return res.status(201).send({ message: "Registered successfully" });
  } catch (error) {
    await transaction.rollback();
    if (error.original) {
      // Check for duplicate entry errors
      if (error.original.code === "ER_DUP_ENTRY") {
        const duplicateField =
          error.original.sqlMessage.match(/for key '(.*?)'/)[1];

        if (duplicateField.includes("poc_email")) {
          return res.status(409).json({ error: "Email already exists" });
        }
        if (duplicateField.includes("institution_code")) {
          return res.status(409).json({ error: "Institution already exists" });
        }
      }
    }
    return res.status(500).json({ error: "Some Error, try after some time" });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const [instituteDetails, instituteDetailsMetaData] = await sequelize.query(
      "SELECT * FROM institution WHERE poc_email = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const [adminData, adminMetadata] = await sequelize.query(
      "SELECT * FROM admin_users WHERE username = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if(adminData != undefined){
      const result = await bcrypt.compare( password, adminData.password);
      if(result){
        adminData.role = "admin";
        console.log(adminData.role);
        // var data = {...instituteDetails , adminData};
        res.locals.payload = {...adminData,...instituteDetails};
        return next();
      }
    }


    const [userData, userMetadata] = await sequelize.query(
      "SELECT * FROM users WHERE username = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    console.log({ results: userData });
    if(userData != undefined){
      const result = await bcrypt.compare( password, userData.password);      
      if(result){
        userData.role = "user";
        console.log(userData);
        res.locals.payload = {...userData,...instituteDetails};
        return next();
      }
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
  const token = req.headers.authorization;
  // console.log(token);
  
  try {
    const userData = jwt.verify(token, key);
    res.send(userData);
  } catch (err) {
    res.status(403).send({ message: "Token is not valid" });
  }
};

