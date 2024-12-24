module.exports = app => {

    const problem_statements = require('../controllers/problemstatement.controller');

    var router = require('express').Router();

    router.get("/", problem_statements.getStatements);

    app.use("/api/ps", router);
}