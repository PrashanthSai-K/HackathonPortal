const sequelize = require("../config/database");

exports.getPresentationList = async (req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM presentation_round_details ORDER BY ps_id");
        res.status(200).send({ data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Some internal error" });
    }
}

exports.toPresentation = async (req, res) => {
    try {
        const { ps_id, team_id } = req.body;

        if (!team_id || team_id == undefined || team_id == null) {
            return res.status(406).send({ error: "Team Id must not be empty" });
        }

        if (typeof (team_id) != 'number') {
            return res.status(406).send({ error: "Team Id must be a number" });
        };

        const [result] = await sequelize.query("UPDATE team_details SET stage = 'PRESENTATION' WHERE id = :team_id",
            {
                replacements: {
                    team_id: team_id
                },
            }
        )

        if (result.affectedRows == 0) {
            return res.status(406).send({ error: "Record not found" });
        };

        return res.status(201).send({ "message": "Selected to Presentation round Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "error": "Some Internal error" });
    }
}


exports.backtoPresentation = async (req, res) => {
    try {
        const { ps_id, team_id } = req.body;

        if (!team_id || team_id == undefined || team_id == null) {
            return res.status(406).send({ error: "Team Id must not be empty" });
        }

        if (typeof (team_id) != 'number') {
            return res.status(406).send({ error: "Team Id must be a number" });
        };

        const [result] = await sequelize.query("UPDATE team_details SET stage = 'PRESENTATION' WHERE id = :team_id",
            {
                replacements: {
                    team_id: team_id
                },
            }
        )

        if (result.affectedRows == 0) {
            return res.status(406).send({ error: "Record not found" });
        };

        return res.status(201).send({ "message": "Moved to Presentation round Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "error": "Some Internal error" });
    }
}