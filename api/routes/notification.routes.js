const { checkAdmin } = require("../middleware/auth/auth.middleware");
const {validateNotification, validateNotificationUpdate} = require("../middleware/validators/notificationValidator");

module.exports = app => {

    const notification = require("../controllers/notification.controller");

    var router = require("express").Router();

    router.get("/", notification.getNotification);

    router.post("/", checkAdmin,  validateNotification, notification.createNotification);

    router.put("/", checkAdmin, validateNotificationUpdate, notification.updateNotification);

    router.post("/delete", checkAdmin, notification.deleteNotification);

    app.use("/api/notification", router);
}