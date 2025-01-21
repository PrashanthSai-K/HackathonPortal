const sequelize = require("../config/database")

exports.getWinners =async(req, res)=>{
    try {
        const [result] = await sequelize.query("SELECT * FROM winner_details");
        return res.status(200).send({data: result});
    } catch (error) {
        return res.status(500).send({error: "Some internal error"});
    }
}