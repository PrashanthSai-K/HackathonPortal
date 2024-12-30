const { checkUser } = require('../middleware/auth/auth.middleware');

module.exports = app => {

    const profile = require('../controllers/profile.controller');

    var router = require('express').Router();

    router.post("/addTeamDetails", checkUser , profile.addTeamDetails);

    router.get("/getInstituteDetails", checkUser , profile.getInstituteDetails)

    app.use("/api/", router);
}