const presentation = require("../controllers/presentation.controller");
const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {
    
    var router = require("express").Router();

    router.get("/", checkAdmin, presentation.getPresentationList);

    router.post("/toPresentation", checkAdmin, presentation.toPresentation);

    app.use("/api/presentation", router);
    
}