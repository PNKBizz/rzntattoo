const express = require('express'),
    fs = require('fs'),
    jsonfile = require('jsonfile'),
    { promisify } = require('util');
    
const readJsonAsync = promisify(jsonfile.readFile),
    writeJsonAsync = promisify(jsonfile.writeFile),
    readDirAsync = promisify(fs.readdir);

const router = express.Router();

router.get('/api/masters', async function (req, res) {
	try {
		const data = await readJsonAsync('./src/assets/masters.json');
		res.json(data);
	} catch(err) {
		if (err && process.env.NODE_ENV !== 'production') console.error(err);
	}
});

router.get('/api/update', async function (req, res) {
	try {
		const masters = await readDirAsync('./src/assets/gallery');
		const galleryPromises = masters.map(master => readDirAsync('./src/assets/gallery/' + master));
		const galleryImages = await Promise.all(galleryPromises);
		const toWrite = masters.map((master, i) => {
			return {name: master, gallery: galleryImages[i].filter(file => file !== 'master.jpg' && file !== 'thumbs')}
		});
		await writeJsonAsync('./src/assets/masters.json', {masters: toWrite});
		res.status(200).send({ message: 'done' });
	} catch(error) {
		if (process.env.NODE_ENV !== 'production') console.error(error);
		res.status(500).send({ error });
	}
});

module.exports = router;