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

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 4001, function() {
    console.log('App listening on port 4001')
  });
