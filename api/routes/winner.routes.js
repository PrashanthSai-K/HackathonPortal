const { checkAdmin, checkUser } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const winner = require("../controllers/winner.controller");

    var router = require('express').Router();

    router.get("/", checkAdmin, winner.getWinners);

    router.get("/userWinner", winner.getWinner);

    router.post("/toWinner", checkAdmin, winner.toWinner);

    app.use("/api/winner", router);
    
}