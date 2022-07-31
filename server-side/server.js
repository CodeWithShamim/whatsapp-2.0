const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require("./config/database.js");

app.get("/", (req, res) => {
    res.send("Running");
});

app.listen(port, () => {
    console.log("Listening to port........", port);
});