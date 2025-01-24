const sequelize = require("../config/database");

exports.toParticipation = async (req, res) => {
    try {
        const { ps_id, team_id } = req.body;

        if (!team_id || team_id == undefined || team_id == null) {
            return res.status(406).send({ error: "Team Id must not be empty" });
        }

        if (typeof (team_id) != 'number') {
            return res.status(406).send({ error: "Team Id must not be a number" });
        };

        const [result] = await sequelize.query("UPDATE team_details SET stage = 'PARTICIPATION' WHERE id = :team_id",
            {
                replacements: {
                    team_id: team_id
                },
            }
        )

        if (result.affectedRows == 0) {
            return res.status(406).send({ error: "Record not found" });
        };

        return res.status(201).send({ "message": "Moved to Participation round Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "error": "Some Internal error" });
    }
}

exports.getFinalist = async (req, res) => {
    try {
        const [event] = await sequelize.query("SELECT final_round_date FROM event_details LIMIT 1");

        const today = new Date();
        let eventDate = new Date(event[0].final_round_date);
        if (eventDate > today) {
            return res.status(403).send({ error: "Finalists yet to be announced" });
        }

        const [result, metadata] = await sequelize.query("SELECT * FROM final_participants_details ORDER BY ps_id");
        return res.status(200).send({ data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}


exports.getAdminFinalist = async (req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM final_participants_details ORDER BY ps_id");
        return res.status(200).send({ data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.backtoParticipation = async(req, res) => {
    try{
        const { ps_id, team_id } = req.body;

        if (!team_id || team_id == undefined || team_id == null) {
            return res.status(406).send({ error: "Team Id must not be empty" });
        }

        if (typeof (team_id) != 'number') {
            return res.status(406).send({ error: "Team Id must not be a number" });
        };

        const [result] = await sequelize.query("UPDATE team_details SET stage = 'PARTICIPATION' WHERE id = :team_id", 
            {
                replacements : {
                    team_id : team_id
                },
            }
        )

        if (result.affectedRows == 0) {
            return res.status(406).send({ error: "Record not found" });
        };

        return res.status(201).send({"message": "Moved to Participation round Successfully"});
    }catch (error){
        console.log(error);
        return res.status(500).send({"error": "Some Internal error"});
    }
}