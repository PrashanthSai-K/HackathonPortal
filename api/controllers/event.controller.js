const sequelize = require("../config/database");
const sendEmailToParticipants = require("../config/mail");

exports.getEventDetails = async (req, res) => {
    try {
        const [result] = await sequelize.query("SELECT * FROM event_details WHERE id = 1");
        return res.status(200).send({ data: result[0] });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.updateEventDetails = async (req, res) => {
    console.log(req.body);
    try {
        const { eventDate, eventVenue, finalRoundDate, resultsDate, prizeMoney } = req.body;
        await sequelize.query("UPDATE event_details SET event_date = :eventDate, event_venue = :eventVenue, final_round_date = :finalRoundDate, prize_money = :prizeMoney WHERE id = 1",
            {
                replacements: {
                    eventDate: eventDate,
                    eventVenue: eventVenue,
                    finalRoundDate: finalRoundDate,
                    resultsDate: resultsDate,
                    prizeMoney: prizeMoney
                }
            }
        )
        return res.status(201).send({ message: "Updated Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Some internal error" });
    }

}

exports.sendFinalistEmail = async (req, res) => {
    const { finalistEmail } = req.body;
    try {
        const [finalist] = await sequelize.query("SELECT * FROM final_participants_details");

        let recipients = [];

        finalist.map((f) => {
            recipients.push(f.leader_email);
            recipients.push(f.poc_email);
        })
        console.log(recipients);
        await sendEmailToParticipants(recipients, finalistEmail);
        return res.status(201).send({ message: "Mail sent successfully!!!" })
    } catch (error) {
        return res.status(500).send({ error: "Some internal error" });

    }
}