var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	jsonfile = require('jsonfile'),
	fs = require('mz/fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api/masters', function (req, res) {
	jsonfile.readFile('./src/assets/masters.json', function (err, data) {
		if (err && process.env.NODE_ENV !== 'production') console.error(err);
		res.send(data);
	});
});

app.get('/api/update', function (req, res) {
	fs.readdir('./src/assets/gallery').then(masters => {
		const galleryPromises = masters.map(master => {
			return fs.readdir('./src/assets/gallery/' + master);
		});
		Promise.all(galleryPromises).then((response) => {
			const toWrite = masters.map((master, i) => {
				return {name: master, gallery: response[i].filter(file => file !== 'master.jpg' && file !== 'thumbs')}
			});
			jsonfile.writeFile('./src/assets/masters.json', {masters: toWrite}, function (err) {
				console.error(err);
				res.end();
			});
		});
	});
});

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 4001, function () {
	console.log('App listening on port 4001')
});
