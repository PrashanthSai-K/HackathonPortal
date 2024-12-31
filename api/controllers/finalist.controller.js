const sequelize = require("../config/database");


exports.selectTeam = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result1 = await sequelize.query("INSERT INTO final_participants (team_id, ps_id) VALUES (:team_id, :ps_id)",
            {
                replacements : {
                    team_id : team_id,
                    ps_id: ps_id
                },
                transaction,
            }
        )

        const result2 = await sequelize.query("UPDATE team_details SET status = 'APPROVED' WHERE id = :team_id", 
            {
                replacements : {
                    team_id : team_id
                },
                transaction
            }
        )

        await transaction.commit()
        res.status(201).send({"message": "Selected Successfully"});
    }catch (error){
        console.log(error);
        await transaction.rollback();
        res.status(500).send({"error": "Some Internal error"});
    }
}

exports.unselectTeam = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result1 = await sequelize.query("DELETE FROM final_participants WHERE team_id = :team_id AND ps_id = :ps_id",
            {
                replacements : {
                    team_id : team_id,
                    ps_id: ps_id
                },
                transaction,
            }
        )

        const result2 = await sequelize.query("UPDATE team_details SET status = 'SUBMITTED' WHERE id = :team_id", 
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


exports.getFinalist = async(req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM final_participants_details ORDER BY ps_id");
        res.status(200).send({data: result});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Some internal error"});
    }
}