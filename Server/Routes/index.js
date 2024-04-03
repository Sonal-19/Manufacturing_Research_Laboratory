const express = require('express');
const router = express.Router();
const {handleUserMessage} = require('../Controller/index');

router.post('/client-message' , handleUserMessage);

module.exports = router;