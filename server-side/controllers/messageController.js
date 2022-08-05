const { mongoose } = require("mongoose");
const messageSchema = require("../schemas/messageSchema");
const Message = new mongoose.model("Message", messageSchema);

module.exports.addMessage = async(req, res) => {
    const newMessage = new Message(req.body);
    await newMessage.save((err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        } else {
            res.status(200).json({ message: "success" })
        }
    })
};

module.exports.getMessage = async(req, res) => {
    const myId = req.query.myId;
    const fdId = req.query.fdId;
    const allMessages = await Message.find({});
    const getFilterMessage = allMessages.filter(allMessage => allMessage.senderId === myId && allMessage.receiverId === fdId || allMessage.senderId === fdId && allMessage.receiverId === myId);
    res.status(200).json({ success: true, result: getFilterMessage });

};