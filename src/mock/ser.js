"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/api', function (req, res) {
    res.send('hellow,express');
});
app.get('/api/product', function (req, res) {
    res.send('produts');
});
app.listen(8888, "localhost", function () {
    console.log('ser is running at 8888');
});
