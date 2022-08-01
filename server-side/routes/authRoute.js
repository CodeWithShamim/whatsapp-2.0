const { authController } = require('../controllers/authController');
const router = require('express').Router();


router.put("/", authController);

module.exports = router;