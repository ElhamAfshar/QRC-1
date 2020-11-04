const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const redis = require('redis');



const router = require("./router");

mongoose.connect('mongodb://localhost/QRC', {useNewUrlParser: true});
const app = express()

router(app)

const server = http.createServer(app);

const client = redis.createClient();
client.on('connect', function() {
    console.log('connected');
});
 

module.exports.client=client
module.exports.app = app;

const port =3000;
server.listen(port);
console.log("Server Started : ", port);