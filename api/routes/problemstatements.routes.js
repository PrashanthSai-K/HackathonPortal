const { checkAdmin, checkToken } = require('../middleware/auth/auth.middleware');

module.exports = app => {

    const problem_statements = require('../controllers/problemstatement.controller');

    var router = require('express').Router();

    router.get("/", problem_statements.getStatements);

    router.get("/registration/:id", checkAdmin, problem_statements.getRegistration);

    // router.post("/select", checkAdmin, problem_statements.selectTeam);

    // router.post("/unselect", checkAdmin, problem_statements.unselectTeam);

    app.use("/api/ps", router);
}