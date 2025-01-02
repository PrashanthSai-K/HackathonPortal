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
    docLink
  } = req.body;

  const transaction = await sequelize.transaction();
  try {

    const [result, metaData] = await sequelize.query(
      `INSERT INTO team_details (institution_id, team_name, number_of_participants, leader_name,leader_email, problem_statement_id, team_members , doc_link) 
       VALUES ( :institution_id, :team_name, :number_of_participants, :leader_name, :leader_email, :problem_statement_id, :team_members , :doc_link)`,
      {
        replacements: {
          institution_id: institutionId,
          team_name: teamName,
          number_of_participants: participants,
          leader_name: leaderName,
          leader_email: leaderEmail,
          problem_statement_id: psId,
          team_members: teamMembers,
          doc_link: docLink
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
      "SELECT * FROM institution WHERE poc_email = ?",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (instituteData !== undefined) {
      return res.status(201).send(instituteData);
    }
    return res.status(401).send({ message: "Invalid username" });
  } catch (err) {
    res.status(403).send({ message: "user name is not valid" });
  }
};


exports.getAllInstituteDetails = async (req, res) => {
  try {
    const [instituteData, instituteMetadata] = await sequelize.query(
      "SELECT * FROM institution",
    );

    return res.status(201).send({data: instituteData});

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