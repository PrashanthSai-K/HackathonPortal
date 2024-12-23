const sequelize = require("../config/database");
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
      password
    } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    const [result, metadata] = await sequelize.query(
      `INSERT INTO institution (institution_code, institution_name, institution_type, address, city, state, pincode, poc_name, poc_email, poc_number ) 
           VALUES ( :institution_code, :institution_name, :institution_type, :address, :city, :state, :pincode, :poc_name, :poc_email, :poc_number)`,
      {
        replacements: {
          institution_code: instituteCode, institution_name: instituteName, institution_type: instituteType, address: instituteAddress, city: instituteCity, state: instituteState, pincode: institutePincode, poc_name: pocName, poc_email: pocEmail, poc_number: pocPhone
        },
        transaction,
      }
    )

    const [result1, metadata1] = await sequelize.query(
      `INSERT INTO users (username, password ) VALUES ( :poc_email, :password )`,
      {
        replacements: {
          poc_email: pocEmail, password: hashedPass
        },
        transaction
      }
    )

    await transaction.commit();

    return res.status(201).send({ "message": "Registered successfully" });

  } catch (error) {
    await transaction.rollback();
    if (error.original) {
      // Check for duplicate entry errors
      if (error.original.code === 'ER_DUP_ENTRY') {
        const duplicateField = error.original.sqlMessage.match(/for key '(.*?)'/)[1];

        if (duplicateField.includes('poc_email')) {
          return res.status(409).json({ error: 'Email already exists' });
        }
        if (duplicateField.includes('institution_code')) {
          return res.status(409).json({ error: 'Institution already exists' });
        }
      }
    }
    return res.status(500).json({ error: 'Some Error, try after some time' });
  }
}



exports.loginUser = async (req, res, next) => {
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
      res.status(401).send({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred while logging in" });
  }
};


