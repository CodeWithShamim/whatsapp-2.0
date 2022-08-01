const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;
const db = require("./config/database.js");
const authRoute = require("./routes/authRoute")

app.get("/", (req, res) => {
    res.send("Running");
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());


app.use("/users", authRoute)

app.listen(port, () => {
    console.log("Listening to port........", port);
});