const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin1234@cluster0.z1tbp5w.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("database connected..........");
    })
    .catch((error) => {
        console.log(error);
        console.log();
    });