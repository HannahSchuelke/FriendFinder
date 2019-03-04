// Dependencies
var express = require("express");
// path is a built in... can use for path.join or sendfile, for files to send to user
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing (if not, req.body is always undefined)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());