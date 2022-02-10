var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World!'+'\n'+'Navigate to /raheman to get fullName');
});

app.get('/raheman', function (req, res) {
  res.status(200).send('Mohammad Athiqur Raheman');
});

var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});