const express = require('express');
const router = express.Router();
const commandController = require('../controllers/commandController');

router.post('/create', commandController.createCommand);
router.get('/getalluser/:id', commandController.getCommandsbyUser);
router.put('/updateUser', commandController.updateUser)

module.exports = router;