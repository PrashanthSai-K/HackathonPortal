const { validateInstituteData } = require("../middleware/validators/instituteValidator");
const validateLogin = require("../middleware/validators/loginValidator");

module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", (req, res)=> res.send("Hiii from Backed !!!"))

    router.post("/register", validateInstituteData, authController.register_institute);

    router.post("/updateLogout", authController.updateLogout);

    router.post("/login", validateLogin , authMiddelware.loginUser, authMiddelware.createToken ,authController.userLogin);

    router.get("/getUser", authController.getUser);
    
    app.use("/api", router);

}