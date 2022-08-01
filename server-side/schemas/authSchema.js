const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    // email: {
    //     type: String,
    //     required: true
    // },
    // photo: {
    //     type: String,
    //     required: true
    // }
})

module.exports = authSchema;