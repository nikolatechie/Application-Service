module.exports = (app) => {
    var router = require('express').Router();

    router.get('/login', (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/html/login.html");
    });

    app.use("/user", router);
}