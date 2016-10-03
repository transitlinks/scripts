var express = require('express');
var app = express();

app.post('/docker', function (req, res) {
  console.log('Hook hit', req);
  res.send('Hello World!');
});

app.listen(3005, function () {
  console.log('Hooks ready');
});
