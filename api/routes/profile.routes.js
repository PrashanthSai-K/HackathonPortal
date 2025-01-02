const { checkUser } = require('../middleware/auth/auth.middleware');

module.exports = app => {

    const profile = require('../controllers/profile.controller');

    var router = require('express').Router();

    router.post("/addTeamDetails", checkUser , profile.addTeamDetails);

    router.get("/getInstituteDetails", checkUser , profile.getInstituteDetails)

    router.get("/getTeamDetails", checkUser ,profile.getTeamDetails )

    router.put("/updateInstituteDetails", checkUser ,profile.updateInstituteDetails )


    app.use("/api/", router);
}