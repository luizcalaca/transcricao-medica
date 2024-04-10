const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/getUser', userController.getUserByEmailAndPassword);
router.put('/updateUser', userController.updateUser)
router.delete('/:id')

module.exports = router;
