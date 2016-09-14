var express = require('express');
var app = express();

var os = require("os");
var hostname = os.hostname();
app.get('/', function(req, res){
    res.send("Running inside container " + hostname)
});

console.log('Starting on port 8080')
app.listen(8080);
