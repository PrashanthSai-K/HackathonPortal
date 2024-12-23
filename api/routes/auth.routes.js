module.exports = app => {
    const authController = require("../controllers/auth.controller");
    const authMiddelware = require("../middleware/auth/auth.middleware");

    var router = require('express').Router();

    router.get("/", authController.register_institute);

    router.post("/login", authController.loginUser , authMiddelware.createToken);

    app.use("/api", router);
}