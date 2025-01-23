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
        if (error.original) {
            // Check for duplicate entry errors
            if (error.original.code === "ER_DUP_ENTRY") {
                const duplicateField =
                    error.original.sqlMessage.match(/for key '(.*?)'/)[1];

                if (duplicateField.includes("ps_id")) {
                    return res.status(409).json({ error: "PS Id already exists" });
                }
            }
        }
        return res.status(500).json({ error: "Some Error, try after some time" });
    }
}

exports.createProblemBulk = async (req, res) => {
    const data = req.body; // Get the JSON data from req.body
    console.log(data);

    // Start a transaction
    const transaction = await sequelize.transaction();

    try {
        for (const row of data) {
            console.log("row : ", row);

            // Insert each row into the database within the transaction
            await sequelize.query(
                `INSERT INTO problem_statements (ps_id, category, title, description, organization) 
               VALUES (:psId, :category, :title, :description, :organization)`,
                {
                    replacements: {
                        psId: row.psId,
                        category: row.category,
                        title: row.title,
                        description: row.description,
                        organization: row.organization,
                    },
                    transaction, // Pass the transaction object
                }
            );
        }

        // Commit the transaction
        await transaction.commit();

        res.json({ message: 'Data inserted successfully' });
    } catch (error) {
        // Rollback the transaction in case of an error
        await transaction.rollback();
        console.error('Error inserting data into DB:', error);
        if (error.original) {
            // Check for duplicate entry errors
            if (error.original.code === "ER_DUP_ENTRY") {
                const duplicateField =
                    error.original.sqlMessage.match(/for key '(.*?)'/)[1];

                if (duplicateField.includes("ps_id")) {
                    return res.status(409).json({ error: "PS Id already exists" });
                }
            }
        }
        res.status(500).send({ error: 'Error inserting data into the database.' });
    }

}

exports.deletePs = async(req, res)=> {
    try {
        const {id} = req.body;
        await sequelize.query(`DELETE FROM problem_statements WHERE ps_id IN (:id)`,
            {
                replacements : {
                    id : id
                }
            }
        )
        res.status(201).send({message : "Deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({error: "Error deleting datas"});
    }
}