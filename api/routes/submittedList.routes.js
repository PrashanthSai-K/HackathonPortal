const { getSubmittedList } = require("../controllers/submittedList.controller");
const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {
    
    var router = require("express").Router();

    router.get("/submittedList", checkAdmin, getSubmittedList);

    app.use("/api", router);
    
}