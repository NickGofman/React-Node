const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3001;
app.use(cors()); // Enable CORS for all routes

// Import and use the router
const apiRoutes = require('./routes/apiRoutes');
const apiAuth = require('./routes/apiAuth');

// automatically load all FE files included
// static assets
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join('../frontend/public')));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.use('/', function (req, res, next) {
  console.log('Request Url:' + req.url);
  next();
});

app.use('/api', apiRoutes);
app.use('/api/auth', apiAuth);

app.listen(port);
