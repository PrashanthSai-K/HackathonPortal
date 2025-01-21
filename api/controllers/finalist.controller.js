const sequelize = require("../config/database");


exports.toPresentation = async(req, res) => {    
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result = await sequelize.query("UPDATE team_details SET stage = 'PRESENTATION' WHERE id = :team_id", 
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

exports.toParticipation = async(req, res) => {
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
        res.status(201).send({"message": "Selected Successfully"});
    }catch (error){
        console.log(error);
        await transaction.rollback();
        res.status(500).send({"error": "Some Internal error"});
    }
}

exports.toWinner = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result = await sequelize.query("UPDATE team_details SET stage = 'WINNER' WHERE id = :team_id", 
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

exports.backtoPresentation = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;


        const result = await sequelize.query("UPDATE team_details SET stage = 'PRESENTATION' WHERE id = :team_id", 
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

exports.backtoSubmitted = async(req, res) => {
    const transaction = await sequelize.transaction();
    try{
        const { ps_id, team_id } = req.body;

        const result = await sequelize.query("UPDATE team_details SET stage = 'SUBMITTED' WHERE id = :team_id", 
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