const { checkAdmin, checkUser } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const finalist = require("../controllers/finalist.controller");

    var router = require("express").Router();

    router.post("/toPresentation", checkAdmin, finalist.toPresentation);

    router.post("/toParticipation", checkAdmin, finalist.toParticipation);

    router.post("/backtoPresentation", checkAdmin, finalist.backtoPresentation);

    router.post("/backtoSubmitted", checkAdmin, finalist.backtoSubmitted);

    router.get("/getFinalist", checkUser, finalist.getFinalist);

    router.get("/", checkAdmin, finalist.getFinalist);

    app.use("/api/finalist", router);
}