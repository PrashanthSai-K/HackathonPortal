const sequelize = require("../config/database");

exports.getPresentationList = async(req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM presentation_round_details ORDER BY ps_id");
        res.status(200).send({data: result});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Some internal error"});
    }
}

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