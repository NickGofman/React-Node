const express = require('express');
const path = require('path');
const app = express();

// access back-end api
const apiController = require('./Controllers/apiController');

const port = process.env.PORT || 3001;

// automatically load all FE files included
// static assets
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/', function (req, res, next) {
  console.log('Request Url:' + req.url);
  next();
});

apiController(app);

app.listen(port);
