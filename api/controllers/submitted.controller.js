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