const { validateInstituteData, handleValidation } = require("../middleware/validators/instituteValidator");

module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", (req, res)=> res.send("Hiii from Backed !!!"))

    router.post("/register", validateInstituteData, handleValidation , authController.register_institute);

    router.post("/login", authController.loginUser , authMiddelware.createToken);

    app.use("/api", router);
}