const { checkAdmin, checkToken } = require('../middleware/auth/auth.middleware');
const { validateCreateProblem, validateBulkUpload } = require('../middleware/validators/problemValidator');
const { excelToJsonMiddleware } = require("../middleware/problems/problems.middleware");

const { upload } = require('../storage/uploadPs');

module.exports = app => {

    const problem_statements = require('../controllers/problemstatement.controller');

    var router = require('express').Router();

    router.get("/", problem_statements.getStatements);

    router.get("/registration/:id", checkAdmin, problem_statements.getRegistration);

    router.post("/", checkAdmin, validateCreateProblem, problem_statements.createProblem);

    router.post("/upload", validateBulkUpload, problem_statements.createProblemBulk);

    app.use("/api/ps", router);
}