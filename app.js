const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/index.js');
const app = express();

app.use('/', routes);

app.listen(PORT, function() {
	console.log("Express running 👉 PORT " + PORT);
});
