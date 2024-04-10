// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.post('/getUser', userController.getUserByEmailAndPassword);

module.exports = router;
