const { mongoose } = require('mongoose');
const authSchema = require('../schemas/authSchema');
const User = new mongoose.model("User", authSchema);

module.exports.authController = async(req, res) => {
    const id = req.params.id;
    const newUsers = new User({ id });
    newUsers.save((err) => {
        res.send(err)
    })

}