const { validateInstituteData, handleValidation } = require("../middleware/validators/instituteValidator");

module.exports = app => {

    const register = require("../controllers/registration.controller");

    var router = require('express').Router();

    router.post("/register", validateInstituteData, handleValidation , register.register_institute);

    app.use("/api", router);

}