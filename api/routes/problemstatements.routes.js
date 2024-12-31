const { checkAdmin, checkToken } = require('../middleware/auth/auth.middleware');
const { validateCreateProblem } = require('../middleware/validators/problemValidator');

module.exports = app => {

    const problem_statements = require('../controllers/problemstatement.controller');

    var router = require('express').Router();

    router.get("/", problem_statements.getStatements);

    router.get("/registration/:id", checkAdmin, problem_statements.getRegistration);

    router.post("/", checkAdmin, validateCreateProblem, problem_statements.createProblem);

    app.use("/api/ps", router);
}