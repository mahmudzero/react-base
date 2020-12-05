'use strict';
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5050;

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/app.html'));
});

app.listen(port);

console.log("Site is now being served on port: " + port);
