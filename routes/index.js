const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.send("Hi there! Seems like your app is working!");
});

router.post('/testing', function(req, res) {
	res.send("This is the post office.");
});

module.exports = router;
