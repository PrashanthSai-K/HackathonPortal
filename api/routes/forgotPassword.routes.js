const forgotPassword = require("../controllers/forgotPassword.controller");
const { validateResetPassword } = require("../middleware/validators/loginValidator");

module.exports = app => {
    
    var router = require("express").Router();

    router.post("/forgotPassword" , forgotPassword.sendResetPassword );

    router.post("/resetPassword" , validateResetPassword, forgotPassword.resetPassword );
 
    app.use("/api/login/", router);
    
}