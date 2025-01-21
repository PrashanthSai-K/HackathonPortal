const { checkUser, checkAdmin, checkTokenExpires } = require('../middleware/auth/auth.middleware');
const { validateInstituteData, validateInstituteDataAdmin } = require('../middleware/validators/instituteValidator');

module.exports = app => {

    const profile = require('../controllers/profile.controller');

    var router = require('express').Router();

    router.post("/addTeamDetails", checkUser , profile.addTeamDetails);

    router.get("/getInstituteDetails" ,checkUser , profile.getInstituteDetails);

    router.get("/getTeamDetails", checkUser ,profile.getTeamDetails );

    router.get("/institute", checkAdmin , profile.getAllInstituteDetails);

    router.put("/updateInstituteDetails", checkUser ,profile.updateInstituteDetails );

    router.put("/institute", checkAdmin, profile.updateInstituteDetailsAdmin);

    router.post("/addInstitute", checkAdmin, validateInstituteDataAdmin, profile.addInstituteDetailsAdmin);

    router.post("/institute/delete", checkAdmin, profile.deleteInstitute);

    router.put("/videoLink", checkUser , profile.uploadVideoLink)

    app.use("/api/", router);
}