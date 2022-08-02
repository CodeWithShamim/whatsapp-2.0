const { addMessage } = require('../controllers/messageController');
const router = require('express').Router();

router.post("/addMessage", addMessage)
module.exports = router;