module.exports = (app) => {
    var router = require("express").Router();

    router.get("/user", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/html/user.html");
    });

    app.use("/admin", router);
};