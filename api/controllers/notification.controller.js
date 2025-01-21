const sequelize = require("../config/database")

exports.getNotification = async (req, res) => {
    try {
        const [result] = await sequelize.query("SELECT * FROM notification");

        return res.status(200).send({ data: result });
    } catch (error) {
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.updateNotification = async (req, res) => {
    try {
        const { id, title, description, type, date } = req.body;

        await sequelize.query("UPDATE notification SET title = :title, description = :description, type = :type, date = :date WHERE id = :id",
            {
                replacements: {
                    title: title,
                    description: description,
                    type: type,
                    date: date,
                    id: id
                }
            }
        )

        return res.status(201).send({ message: "Update successful" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.createNotification = async (req, res) => {
    try {
        const { title, description, type, date } = req.body;

        await sequelize.query("INSERT INTO notification (title, description, type, date)  VALUES (:title, :description, :type, :date)",
            {
                replacements: {
                    title: title,
                    description: description,
                    type: type,
                    date: date,
                }
            }
        )

        return res.status(201).send({ message: "Insertion successful" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.deleteNotification = async (req, res) => {
    try {
        const { id } = req.body;
        await sequelize.query("DELETE FROM notification WHERE id = :id",
            {
                replacements: {
                    id: id
                }
            }
        )

        return res.status(201).send({ message: "Successfully deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}