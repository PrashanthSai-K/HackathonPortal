const { checkAdmin } = require("../middleware/auth/auth.middleware");

module.exports = app => {

    const notification = require("../controllers/notification.controller");

    var router = require("express").Router();

    router.get("/", notification.getNotification);

    router.post("/", checkAdmin,  notification.createNotification);

    router.put("/", checkAdmin, notification.updateNotification);

    router.post("/delete", checkAdmin, notification.deleteNotification);

    app.use("/api/notification", router);
}