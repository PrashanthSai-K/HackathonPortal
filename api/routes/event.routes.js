const { checkAdmin } = require("../middleware/auth/auth.middleware");
const validateEventData = require("../middleware/validators/eventValidator");

module.exports = app => {

    const events = require("../controllers/event.controller");

    var router = require("express").Router();

    router.get("/", events.getEventDetails);
    
    router.post("/", checkAdmin, validateEventData, events.updateEventDetails);

    router.post("/finalemail", checkAdmin, events.sendFinalistEmail);

    router.post("/resultemail", checkAdmin, events.sendResultsEmail);

    router.post("/testemail", checkAdmin, events.sendTestEmail);

    app.use("/api/events", router);
}