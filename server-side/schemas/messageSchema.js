const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderName: {
        type: String,
        required: true
    },
    senderId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    message: {
        text: {
            type: String
        },
        image: {
            type: String
        }
    }
}, { timestamps: true })

module.exports = messageSchema;