const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const winner = require("../controllers/winner.controller");

    var router = require('express').Router();

    router.get("/", checkAdmin, winner.getWinners);

    router.post("/toWinner", checkAdmin, winner.toWinner);

    app.use("/api/winner", router);

}