module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", authController.register_institute);

    router.post("/login", authController.loginUser , authMiddelware.createToken);

    router.post("/getUser", authController.getUser);

    app.use("/api", router);
}