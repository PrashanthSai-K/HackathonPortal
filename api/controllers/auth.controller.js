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
    // console.log(hashedPass);

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

    console.log("id : ", result);


    const [result1, metadata1] = await sequelize.query(
      `INSERT INTO users (username, password, institution_id ) VALUES ( :poc_email, :password, :institution_id )`,
      {
        replacements: {
          poc_email: pocEmail,
          password: hashedPass,
          institution_id: result,
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

    const [instituteDetails, _] = await sequelize.query("SELECT * FROM institution WHERE id = :institution_id", {
      replacements: {
        institution_id: userData.institution_id,
      },
      type: sequelize.QueryTypes.SELECT,

    })

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

exports.getUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const userData = jwt.verify(token, key);
    res.send(userData);
  } catch (err) {
    res.status(403).send({ message: "Token is not valid" });
  }
};

exports.getCodeSuggestions = async (req, res) => {
  const { query } = req.query;

  try {
    const [result, metadata] = await sequelize.query("SELECT * FROM institution_predefined where InstitutionCode LIKE :query LIMIT 20", {
      replacements: {
        query: `%${query}%`
      }
    });
    res.status(200).send({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Some error" });
  }
}

exports.getNameSuggestions = async (req, res) => {
  const { query } = req.query;

  try {
    const [result, metadata] = await sequelize.query("SELECT * FROM institution_predefined where InstitutionName LIKE :query LIMIT 20", {
      replacements: {
        query: `%${query}%`
      }
    });
    res.status(200).send({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Some error" });
  }
}

exports.getInstituteData = async (req, res) => {
  try {
    const  {id}  = req.params;

    const [result, _] = await sequelize.query("SELECT * FROM institution_predefined where InstitutionCode = :id",
      {
        replacements: {
          id: id
        }
      }
    );
console.log(result[0]);

    return res.status(200).send({ data: result[0] });

  } catch (error) {
    console.log(error);
    
    res.status(500).send({ error: "Some error" });
  }
}