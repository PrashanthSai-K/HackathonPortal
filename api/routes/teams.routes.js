module.exports = app => {

    const problem_statements = require('../controllers/teams.controller');

    var router = require('express').Router();

    router.post("/addTeamDetails", problem_statements.addTeamDetails);

    app.use("/api/", router);
}