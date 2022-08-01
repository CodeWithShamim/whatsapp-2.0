const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require("./config/database.js");
const authRoute = require("./routes/authRoute")

app.get("/", (req, res) => {
    res.send("Running");
});

app.use("/users", authRoute)

app.listen(port, () => {
    console.log("Listening to port........", port);
});