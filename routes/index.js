const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.send("Hi there! Seems like your app is working!");
});

module.exports = router;
