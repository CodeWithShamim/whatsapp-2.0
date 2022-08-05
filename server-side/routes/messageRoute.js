const { addMessage } = require('../controllers/messageController');
const { getMessage } = require('../controllers/messageController');
const router = require('express').Router();

router.post("/addMessage", addMessage);
router.get("/getMessage", getMessage);
module.exports = router;