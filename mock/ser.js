"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/ad', function (req, res) {
    var data = [
        {
            title: "暑期五折",
            img: "./src/static/imgs/1.jpg",
            desc: "芒果冰激凌",
            link: "http://www.baidu.com"
        },
        {
            title: "特价出国",
            desc: "一元旅行",
            img: "./src/static/imgs/2.jpg",
            link: "http://www.baidu.com"
        },
        {
            title: "电影",
            desc: "洗车9.9元",
            img: "./src/static/imgs/3.jpg",
            link: "http://www.baidu.com"
        },
        {
            title: "英语教育",
            desc: "免费学习",
            img: "./src/static/imgs/4.jpg",
            link: "http://www.baidu.com"
        },
        {
            title: "旅游热线",
            desc: "天天看片",
            img: "./src/static/imgs/5.jpg",
            link: "http://www.baidu.com"
        },
        {
            title: "汽车销售",
            desc: "二手汽车热销中",
            img: "./src/static/imgs/6.jpg",
            link: "http://www.baidu.com"
        }
    ];
    res.send(data);
});
var homelistData = require('./list.js');
app.get('/api/list/:city/:page', function (req, res) {
    var params = req.params;
    var city = params.city;
    var page = params.page;
    console.log(city, page);
    res.send(homelistData);
});
var Productdetail = require('./detail.js');
app.get('/api/detail/:id', function (req, res) {
    var id = req.params.id;
    //console.log(id)
    var data = Productdetail.find(function (item) {
        return item.id == id;
    });
    res.send(data);
});
var comments = require('./comments.js');
app.get('/api/comments/:id/:page', function (req, res) {
    var id = req.params.id;
    var page = req.params.page;
    console.log('评论查询', id, page);
    var data = comments.find(function (item) {
        return item.id == id;
    });
    res.send(data.comments);
});
var orderlist = require('./orderlist.js');
app.get('/api/orderlist/:user', function (req, res) {
    var user = req.params.user;
    console.log('订单查询', user);
    var data = orderlist.find(function (item) {
        return item.id == user;
    });
    res.send(data.list);
});
app.post('/api/submitcomment', function (req, res) {
    console.log('订单评论', req.body);
    //console.log(''req.body)
    var resp = {
        status: true,
        text: 'ok'
    };
    res.send(resp);
});
app.listen(8888, "localhost", function () {
    console.log('ser is running at 8888');
});
