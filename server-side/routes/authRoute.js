const { addUser } = require('../controllers/authController');
const { getUsers } = require('../controllers/authController');
const { getCurrentUser } = require('../controllers/authController');
const router = require('express').Router();


router.put("/", addUser);
router.get("/", getUsers);
router.get("/:id", getCurrentUser);

module.exports = router;