const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const events = require("../controllers/event.controller");

    var router = require("express").Router();

    router.get("/", events.getEventDetails);
    
    router.post("/", checkAdmin, events.updateEventDetails);

    router.post("/finalemail", checkAdmin, events.sendFinalistEmail);

    router.post("/resultemail", checkAdmin, events.sendResultsEmail);

    router.post("/testemail", checkAdmin, events.sendTestEmail);

    app.use("/api/events", router);
}