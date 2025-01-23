const { checkAdmin, checkUser } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const finalist = require("../controllers/finalist.controller");

    var router = require("express").Router();

    router.get("/", checkAdmin, finalist.getAdminFinalist);

    router.get("/getFinalist", checkUser, finalist.getFinalist);

    router.post("/toParticipation", checkAdmin, finalist.toParticipation);

    router.post("/backtoParticipation", checkAdmin, finalist.backtoParticipation);

    app.use("/api/finalist", router);
}