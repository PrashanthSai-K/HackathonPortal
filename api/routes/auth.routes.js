const { validateInstituteData } = require("../middleware/validators/instituteValidator");
const { validateLogin } = require("../middleware/validators/loginValidator");

module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", (req, res)=> res.send("Hiii from Backed !!!"));

    router.get("/suggestions/code", authController.getCodeSuggestions)

    router.get("/suggestions/name", authController.getNameSuggestions)

    router.get("/institute-data/:id", authController.getInstituteData)

    router.post("/register", validateInstituteData, authController.register_institute);

    router.post("/updateLogout", authController.updateLogout);

    router.post("/login" , validateLogin , authMiddelware.loginUser, authMiddelware.createToken ,authController.userLogin);

    router.get("/getUser", authController.getUser);

    router.post("/newUser/admin", authMiddelware.checkAdmin, authController.newAdminUser);
    
    app.use("/api", router);

}