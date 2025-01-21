module.exports = app => {

    const winner = require("../controllers/winner.controller");

    var router = require('express').Router();

    router.get("/", winner.getWinners);

    app.use("/api/winner", router);

}