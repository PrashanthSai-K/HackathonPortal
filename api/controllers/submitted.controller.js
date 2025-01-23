const sequelize = require("../config/database");

exports.getSubmittedList = async(req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM submitted_details ORDER BY ps_id");
        res.status(200).send({data: result});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Some internal error"});
    }
}

exports.backtoSubmitted = async (req, res) => {
    try {
        const { ps_id, team_id } = req.body;

        if(!team_id || team_id == undefined || team_id == null){
            return res.status(406).send({error: "Team Id must not be empty"});
        }

        if(typeof(team_id) != 'number'){
            return res.status(406).send({error: "Team Id must not be a number"});
        };

        const [result, meta] = await sequelize.query("UPDATE team_details SET stage = 'SUBMITTED' WHERE id = :team_id",
            {
                replacements: {
                    team_id: team_id
                },
            }
        )

        if(result.affectedRows == 0){
            return res.status(406).send({error: "Record not found"});
        };

        return res.status(201).send({ "message": "Moved to Submitted round Successfully" });
    } catch (error) {
        return res.status(500).send({ "error": "Some Internal error" });
    }
}