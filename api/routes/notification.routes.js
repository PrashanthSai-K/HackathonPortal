module.exports = app => {

    const notification = require("../controllers/notification.controller");

    var router = require("express").Router();

    router.get("/", notification.getNotification);

    router.post("/", notification.createNotification);

    router.put("/", notification.updateNotification);

    router.post("/delete", notification.deleteNotification);

    app.use("/api/notification", router);
}