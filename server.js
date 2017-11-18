const express = require('express'),
	app = express(),
	router = require('./router');

app.use(express.json());

app.use('/', router);

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 4001, function () {
	console.log('App listening on port 4001')
});
