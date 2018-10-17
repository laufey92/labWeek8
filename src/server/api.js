// src/api.jsconst express = require("express");
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {  
	var retGreet = {greeting: "Hello, " + req.params.name + "!"};  //{} thidir object
	res.send(retGreet);
// 2. and returns an object with the greeting  
// Hint: `req.params.name`});

module.exports = app;

