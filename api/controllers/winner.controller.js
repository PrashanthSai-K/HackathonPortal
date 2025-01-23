const sequelize = require("../config/database")

exports.getWinners =async(req, res)=>{
    try {
        const [result] = await sequelize.query("SELECT * FROM winner_details");
        return res.status(200).send({data: result});
    } catch (error) {
        return res.status(500).send({error: "Some internal error"});
    }
}

exports.toWinner = async(req, res) => {
    try{
        const { ps_id, team_id } = req.body;

        if (!team_id || team_id == undefined || team_id == null) {
            return res.status(406).send({ error: "Team Id must not be empty" });
        }

        if (typeof (team_id) != 'number') {
            return res.status(406).send({ error: "Team Id must not be a number" });
        };

        const [result] = await sequelize.query("UPDATE team_details SET stage = 'WINNER' WHERE id = :team_id", 
            {
                replacements : {
                    team_id : team_id
                },
            }
        )

        if (result.affectedRows == 0) {
            return res.status(406).send({ error: "Record not found" });
        };

        return res.status(201).send({"message": "Selected as a Winner Successfully"});
    }catch (error){
        console.log(error);
        return res.status(500).send({"error": "Some Internal error"});
    }
}

exports.backtoParticipation = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result = await sequelize.query("UPDATE team_details SET stage = 'PARTICIPATION' WHERE id = :team_id", 
            {
                replacements : {
                    team_id : team_id
                },
                transaction
            }
        )

        await transaction.commit()
        res.status(201).send({"message": "Removed Successfully"});
    }catch (error){
        console.log(error);
        await transaction.rollback();
        res.status(500).send({"error": "Some Internal error"});
    }
}