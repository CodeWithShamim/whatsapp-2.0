const { authController } = require('../controllers/authController');
const router = require('express').Router();


router.put("/:id", authController);

module.exports = router;