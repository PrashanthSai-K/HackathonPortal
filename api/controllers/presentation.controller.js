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