const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// html files
app.use(express.static("html"));
app.use(express.static("js"));

// routes
require("./routes/main.route")(app);
require("./routes/movie.route")(app);
require("./routes/schedule.route")(app);
require("./routes/hall.route")(app);
require("./routes/user.route")(app);
require("./routes/ticket.route")(app);
require("./routes/login.route")(app);

app.listen(8082, () => console.log("Server is running.."));