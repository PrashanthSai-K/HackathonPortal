const sequelize = require("../config/database");
const { generateEncryptedPassword } = require("../middleware/institute/institute.middleware");

exports.addTeamDetails = async (req, res) => {
  const {
    institutionId,
    teamName,
    participants,
    leaderName,
    leaderEmail,
    psId,
    teamMembers,
    docLink,
  } = req.body;
  const status = "SUBMITTED";

  const transaction = await sequelize.transaction();
  try {
    const [result, metaData] = await sequelize.query(
      `INSERT INTO team_details (institution_id, team_name, number_of_participants, leader_name,leader_email, problem_statement_id, team_members , doc_link , status) 
       VALUES ( :institution_id, :team_name, :number_of_participants, :leader_name, :leader_email, :problem_statement_id, :team_members , :doc_link , :status)`,
      {
        replacements: {
          institution_id: institutionId,
          team_name: teamName,
          number_of_participants: participants,
          leader_name: leaderName,
          leader_email: leaderEmail,
          problem_statement_id: psId,
          team_members: teamMembers,
          doc_link: docLink,
          status: status,
        },
        transaction,
      }
    );

    const [result1, metadata1] = await sequelize.query(
      `UPDATE problem_statements SET count = count + 1 WHERE ps_id = :ps_id`,
      {
        replacements: {
          ps_id: psId,
        },
        transaction,
      }
    );
    await transaction.commit();

    res.status(201).send({ message: "Team details added successfully." });
  } catch (error) {
    await transaction.rollback();

    console.error("Error in addTeamDetails:", error);
    res.status(500).send({ error: "Some internal error occurred." });
  }
};

exports.getInstituteDetails = async (req, res) => {
  const username = res.locals.userData.username;
  try {
    
    const [instituteData, instituteMetadata] = await sequelize.query(
      "SELECT * FROM institution WHERE poc_email = :username",
      {
        replacements: {
          username: username,
        },
      }
    );

    if (instituteData !== undefined) {
      return res.status(201).send(instituteData[0]);
    }
    return res.status(401).send({ message: "Invalid username" });
  } catch (err) {
    res.status(403).send({ message: "user name is not valid" });
  }
};

exports.updateInstituteDetails = async (req, res) => {
  const {
    id,
    institution_code,
    institution_name,
    institution_type,
    address,
    city,
    state,
    pincode,
  } = req.body;

  const institutionId = res.locals.userData.institutionId
  try {

    if(id != institutionId){
      return res.status(401).send({message : "Trying to modify unauthorized data"})
    }

    const [affectedRows] = await sequelize.query(
      `UPDATE institution 
       SET institution_code = :institution_code, 
           institution_name = :institution_name, 
           institution_type = :institution_type, 
           address = :address, 
           city = :city, 
           state = :state, 
           pincode = :pincode 
       WHERE id = :institutionId`,
      {
        replacements: {
          institutionId,
          institution_code,
          institution_name,
          institution_type,
          address,
          city,
          state,
          pincode,
        },
      }
    );

    if (affectedRows.affectedRows > 0) {
      return res
        .status(201)
        .send({ message: "Institution details updated successfully." });
    } else {
      return res
        .send({
          message: "Data unchanged.",
        });
    }
  } catch (err) {
    console.error("Error updating institution details:", err);
    return res
      .status(500)
      .send({
        message: "An error occurred while updating institution details.",
      });
  }
}

exports.getAllInstituteDetails = async (req, res) => {
  try {
    const [instituteData, instituteMetadata] = await sequelize.query(
      "SELECT * FROM institution",
    );

    return res.status(201).send({ data: instituteData });

  } catch (err) {
    res.status(403).send({ message: "user name is not valid" });
  }
};

exports.getTeamDetails = async (req, res) => {
  const institutionId = res.locals.userData.institutionId;
  // console.log(institutionId);

  try {
    const [teamDetails, instituteMetadata] = await sequelize.query(
      "SELECT * FROM registration_details WHERE team_institution = ?",
      {
        replacements: [institutionId],
      }
    );

    if (teamDetails !== undefined) {
      return res.status(201).send(teamDetails);
    }
    return res.status(401).send({ message: "Invalid Institution Id" });
  } catch (err) {
    res.status(403).send({ message: "Institution Id is not valid" });
  }
};

exports.updateInstituteDetailsAdmin = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id, institution_code, institution_name, institution_type, address, city, state, pincode, poc_name, poc_email, poc_number } = req.body;

    const [institute] = await sequelize.query("SELECT * FROM institution WHERE id = :id", { replacements: { id: id } });

    if (institute.length < 0 || id != institute[0].id) {
      return res.status(401).send({ error: "Trying to change unauthorized data" });
    }

    let passReq = false;

    if (institute[0].poc_email != poc_email || institute[0].poc_number != poc_number) {
      passReq = true;
    }

    await sequelize.query(
      `UPDATE institution 
       SET 
         institution_name = :institution_name,
         institution_type = :institution_type,
         address = :address,
         city = :city,
         state = :state,
         pincode = :pincode,
         poc_name = :poc_name,
         poc_email = :poc_email,
         poc_number = :poc_number
       WHERE id = :id`,
      {
        replacements: {
          institution_code: institution_code,
          institution_name: institution_name,
          institution_type: institution_type,
          address: address,
          city: city,
          state: state,
          pincode: pincode,
          poc_name: poc_name,
          poc_email: poc_email,
          poc_number: poc_number,
          id: institute[0].id
        },
        transaction
      }
    );
    console.log("completed update");

    if (passReq != true) {
      console.log(passReq);

      await transaction.commit();
      return res.status(201).send({ message: "Institution details updated uccessfully!!" });
    }

    const [password, hashedPassword] = await generateEncryptedPassword();

    await sequelize.query("UPDATE users SET username = :poc_email, password = :password WHERE username = :poc_email", {
      replacements: {
        poc_email: poc_email,
        password: hashedPassword
      },
      transaction
    })

    await transaction.commit();
    return res.status(201).send({ message: "Details updated uccessfully!!", password: password });

  } catch (error) {
    await transaction.rollback();
    console.log(error);
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
    res.status(500).send({ error: "Error during updation" });
  }
}

exports.addInstituteDetailsAdmin = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {

    const {
      instituteCode: institution_code,
      instituteName: institution_name,
      instituteType: institution_type,
      instituteAddress: address,
      instituteCity: city,
      instituteState: state,
      institutePincode: pincode,
      pocName: poc_name,
      pocEmail: poc_email,
      pocPhone: poc_number,
    } = req.body;

    console.log(institution_code);


    await sequelize.query(
      `INSERT INTO institution 
         (institution_code, institution_name, institution_type, address, city, state, pincode, poc_name, poc_email, poc_number) 
       VALUES 
         (:institution_code, :institution_name, :institution_type, :address, :city, :state, :pincode, :poc_name, :poc_email, :poc_number)`,
      {
        replacements: {
          institution_code: institution_code,
          institution_name: institution_name,
          institution_type: institution_type,
          address: address,
          city: city,
          state: state,
          pincode: pincode,
          poc_name: poc_name,
          poc_email: poc_email,
          poc_number: poc_number,
        },
        transaction,
      }
    );


    const [password, hashedPassword] = await generateEncryptedPassword();

    await sequelize.query(
      "INSERT INTO users (username, password) VALUES (:poc_email, :password)",
      {
        replacements: {
          poc_email: poc_email,
          password: hashedPassword,
        },
        transaction,
      }
    );


    await transaction.commit();
    return res.status(201).send({ message: "Details updated uccessfully!!", password: password });

  } catch (error) {
    await transaction.rollback();
    console.log(error);
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
    res.status(500).send({ error: "Error during updation" });
  }
}


exports.deleteInstitute = async (req, res) => {
  try {
    const id = req.body;
    await sequelize.query(`DELETE FROM institution WHERE id IN (:id)`,
      {
        replacements: {
          id: id
        }
      }
    )
    res.status(201).send({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Error deleting datas" });
  }
}