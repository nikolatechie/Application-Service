module.exports = (app) => {
    var router = require("express").Router();

    router.get("/movie", (req, res) => {
        res.sendFile(__dirname.substring(0, __dirname.lastIndexOf("\\")) + "/html/movie.html");
    });

    app.use("/admin", router);
};