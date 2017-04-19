var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  jsonfile = require('jsonfile'),
  fs = require('mz/fs');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

app.get('/api/masters', function(req, res) {
  jsonfile.readFile('./src/assets/masters.json', function (err, data) {
    if(err && process.env.NODE_ENV !== 'production') console.error(err);
    res.send(data);
  });
});

app.get('/api/update', async function(req, res) {
  try {
    const masters = await fs.readdir('./src/assets/gallery');
    const galleryPromises = await masters.map(async master => {
      const gallery = await fs.readdir('./src/assets/gallery/' + master);
      return { master: master, gallery: gallery }
    });
    const response = await Promise.all(galleryPromises);
    jsonfile.writeFile('./src/assets/masters.json', {masters: response}, function (err) {
      if (process.env.NODE_ENV !== 'production') console.error(err)
    });
  } catch(ex) {
    if (process.env.NODE_ENV !== 'production') console.error(ex);
  }
});

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 4001, function() {
    console.log('App listening on port 4001')
  });
