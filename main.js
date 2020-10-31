const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

const router = require("./router");

mongoose.connect('mongodb://localhost/QRC', {useNewUrlParser: true});
const app = express()

router(app)

const server = http.createServer(app);

const port =3000;
module.exports = app;

server.listen(port);

console.log("Server Started : ", port);