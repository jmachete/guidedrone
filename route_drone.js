'use strict';

exports.takeoff = function(req, res) {
    console.log('TAKEOF');
    res.send(200);
};

exports.land = function(req, res) {
    console.log('LAND');
    res.send(200);
};

exports.stop = function(req, res) {
    console.log('STOP');
    res.send(200);
};

exports.left = function(req, res) {
    var sec = req.params.seconds;
    console.log('GO LEFT '+sec+' seconds');
    res.send(200);
};

exports.right = function(req, res) {
    var sec = req.params.seconds;
    console.log('GO RIGHT '+sec+' seconds');
    res.send(200);
};

exports.up = function(req, res) {
    var sec = req.params.seconds;
    console.log('GO UP '+sec+' seconds');
    res.send(200);
};

exports.down = function(req, res) {
    var sec = req.params.seconds;
    console.log('GO DOWN '+sec+' seconds');
    res.send(200);
};

exports.clockwise = function(req, res) {
    var deg = req.params.angle;
    console.log('Clockwise '+deg+' degrees');
    res.send(200);
};
