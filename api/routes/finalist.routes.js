const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const finalist = require("../controllers/finalist.controller");

    var router = require("express").Router();

    router.post("/select", checkAdmin, finalist.selectTeam);

    router.post("/unselect", checkAdmin, finalist.unselectTeam);

    router.get("/", checkAdmin, finalist.getFinalist);

    app.use("/api/finalist", router);
}