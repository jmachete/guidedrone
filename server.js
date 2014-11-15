'use strict';

var express = require('express');
var drone = require('./route_drone');

var app = express();

app.configure(function () {
  app.use(express.compress());
  app.use(express.urlencoded());
  app.use(express.json());
});

app.get('/', function(request, response) {
  response.send('GUIDE DRONE API');
});

// //API ENDPOINTS
app.get('/api/v1/takeoff', drone.takeoff);
app.get('/api/v1/land', drone.land);
app.get('/api/v1/stop', drone.stop);
app.get('/api/v1//forward/:seconds', drone.front);
app.get('/api/v1/backward/:seconds', drone.back);
app.get('/api/v1/left/:seconds', drone.left);
app.get('/api/v1/right/:seconds', drone.right);
app.get('/api/v1/up/:seconds', drone.up);
app.get('/api/v1/down/:seconds', drone.down);
app.get('/api/v1/clockwise/:angle', drone.clockwise);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
