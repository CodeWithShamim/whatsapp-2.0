const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/whatsapp")
    .then(() => {
        console.log("database connected");
    })
    .catch((error) => {
        console.log(error);
    });