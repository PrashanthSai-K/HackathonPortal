module.exports = app => {
    const register = require("../controllers/registration.controller");

    var router = require('express').Router();

    router.get("/", register.register_institute);

    app.use("/api", router);
}