const sequelize = require("../config/database");
const {sendEmailToParticipants} = require("../config/mail");

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
    const { mailContent, mailSubject } = req.body;
    try {
        const [finalist] = await sequelize.query("SELECT * FROM final_participants_details");

        let recipients = [];

        finalist.map((f) => {
            recipients.push(f.leader_email);
            recipients.push(f.poc_email);
        })
        await sendEmailToParticipants(recipients, mailSubject, mailContent);
        return res.status(201).send({ message: "Finalist Mail sent successfully!!!" })
    } catch (error) {
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.sendResultsEmail = async (req, res) => {
    const { mailContent, mailSubject } = req.body;
    try {
        const [winners] = await sequelize.query("SELECT * FROM winner_details");

        let recipients = [];

        winners.map((w) => {
            recipients.push(w.leader_email);
            recipients.push(w.poc_email);
        })
        await sendEmailToParticipants(recipients, mailSubject, mailContent);
        return res.status(201).send({ message: "Results Mail sent successfully!!!" })
    } catch (error) {
        return res.status(500).send({ error: "Some internal error" });
    }
}

exports.sendTestEmail = async (req, res) => {
    const { mailContent, mailSubject, mail  } = req.body;    
    try {
        let recipients = [];
        recipients.push(mail);
        await sendEmailToParticipants(recipients, mailSubject, mailContent);
        return res.status(201).send({ message: "Test Mail sent successfully!!!" })
    } catch (error) {
        return res.status(500).send({ error: "Some internal error" });
    }
}