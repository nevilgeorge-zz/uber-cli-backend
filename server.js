// server.js

var express = require('express'),
	app = express(),
	cors = require('cors');

app.set('port', (process.env.PORT || 7000));
app.use(cors());

app.get('/', function(req, res) {
	res.send('Express server reached.');
});

app.get('/redirect', function(req, res) {
	console.log(req.query);
	res.send('You may now close this page.');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});