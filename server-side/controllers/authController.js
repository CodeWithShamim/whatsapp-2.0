const { mongoose } = require('mongoose');
const authSchema = require('../schemas/authSchema');
const User = new mongoose.model("User", authSchema);

module.exports.authController = async(req, res) => {
    const newUser = req.body;
    const result = await User.findOneAndUpdate({ email: newUser.email }, newUser, {
        new: true,
        upsert: true,
    });
    res.status(200).json({ result })

}