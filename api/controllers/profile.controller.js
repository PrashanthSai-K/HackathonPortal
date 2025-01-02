const sequelize = require("../config/database");

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

  try {
    const [affectedRows] = await sequelize.query(
      `UPDATE institution 
       SET institution_code = :institution_code, 
           institution_name = :institution_name, 
           institution_type = :institution_type, 
           address = :address, 
           city = :city, 
           state = :state, 
           pincode = :pincode 
       WHERE id = :id`,
      {
        replacements: {
          id,
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
