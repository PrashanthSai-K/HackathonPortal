const { getSubmittedList, backtoSubmitted } = require("../controllers/submitted.controller");
const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {
    
    var router = require("express").Router();

    router.get("/submittedList", checkAdmin, getSubmittedList);

    router.post("/backtoSubmitted", checkAdmin, backtoSubmitted);

    app.use("/api", router); 
}