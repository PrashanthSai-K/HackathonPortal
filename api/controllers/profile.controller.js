const sequelize = require("../config/database");

exports.addTeamDetails = async (req, res) => {
  // const {teamName,participants,leaderName,leaderEmail,psId,teamMembers} = req.body;
  const teamDetails = req.body;
  console.log(teamDetails);
  
  try {
    const [result, metadata] = await sequelize.query(
      "INSERT INTO team_details (institution_id,team_name,number_of_participants,leader_name,leader_email,problem_statement_id,team_members)",
      {
        replacements: [username],
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(201).send({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "some internal error" });
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
  
