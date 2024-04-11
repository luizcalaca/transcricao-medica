const express = require('express');
const router = express.Router();
const commandController = require('../controllers/commandController');

router.post('/create', commandController.createCommand);
router.get('/getalluser/:id', commandController.getCommandsbyUser);
router.get('/getresponse/', commandController.getCommandsbyName);
router.put('/updateUser', commandController.updateCommand)

module.exports = router;