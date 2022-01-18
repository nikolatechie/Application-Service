module.exports = (app) => {
    var router = require("express").Router();

    router.get("/ticket", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/pages/ticket.html");
    });

    app.use("/admin", router);
};