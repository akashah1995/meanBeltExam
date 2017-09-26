var express = require('express');
var path = require('path');
var app = express();
let bodyParser = require("body-parser");

var mongoose = require('mongoose');

//look in the public folder
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bodyParser.json());

//check the mongoose file
require('./server/config/mongoose.js');

//check the routes folder for routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(1337, ()=> console.log("Server is running at 1337"));