"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function(req, res) {
    res.end('hello,world');
}).listen(9999);
console.log('data server is runing at port 9999');