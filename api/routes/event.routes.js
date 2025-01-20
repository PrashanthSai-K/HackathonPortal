const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const events = require("../controllers/event.controller");

    var router = require("express").Router();

    router.get("/", events.getEventDetails);
    
    router.post("/", checkAdmin,events.updateEventDetails);

    app.use("/api/events", router);
}