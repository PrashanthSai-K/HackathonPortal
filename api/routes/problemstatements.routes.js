module.exports = app => {

    const problem_statements = require('../controllers/problemstatement.controller');

    var router = require('express').Router();

    router.get("/", problem_statements.getStatements);

    router.get("/registration", problem_statements.getRegistration);

    app.use("/api/ps", router);
}