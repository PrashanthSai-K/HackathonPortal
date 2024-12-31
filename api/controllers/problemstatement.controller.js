const sequelize = require('../config/database');

exports.getStatements = async (req, res) => {
    try {
        const [result, metadata] = await sequelize.query("SELECT * FROM problem_statements");
        res.status(200).send({ data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "some internal error" });
    }
}

exports.getRegistration = async (req, res) => {
    try {
        const id = req.params;
        const [result, metadata] = await sequelize.query("SELECT * FROM registration_details WHERE ps_id = :ps_id",
            {
                replacements: { ps_id: id.id }
            }
        );
        res.status(200).send({ data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "some internal error" });
    }
}

exports.createProblem = async (req, res) => {
    try {
        const { psId, category, title, description, organization } = req.body;

        const result = await sequelize.query(`INSERT INTO problem_statements (ps_id, category, title, description, organization) 
            VALUES (:psId, :category, :title, :description, :organization)`,
            {
                replacements: {
                    psId: psId,
                    category: category,
                    title: title,
                    description: description,
                    organization: organization
                }
            })

        res.status(201).send({ "message": "Problem created successfully !!" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Some internal error" });
    }
}

exports.createProblemBulk = async (req, res) => {
    console.log(req.body);
    res.send({ "data": "ok" });
}