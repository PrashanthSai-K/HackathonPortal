const { getPresentationList } = require("../controllers/presentation.controller");
const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {
    
    var router = require("express").Router();

    router.get("/presentation", checkAdmin, getPresentationList);

    app.use("/api", router);
    
}