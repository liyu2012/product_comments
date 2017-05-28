"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ad_1 = require("./ad");
var detail_1 = require("./detail");
var list_1 = require("./list");
var comments_1 = require("./comments");
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/ad', function (req, res) {
    console.log('首页-超级特惠-请求');
    res.send(ad_1.ad);
});
app.get('/api/list/:city/:page', function (req, res) {
    var params = req.params;
    var city = params.city;
    var page = params.page;
    console.log('首页列表', city, page);
    res.send(list_1["default"]);
});
app.get('/api/search/:city/:type/:keyword?', function (req, res) {
    var params = req.params;
    var city = params.city;
    var type = params.type || 'all';
    var keyword = params.keyword == null ? '*' : params.keyword;
    console.log('搜索列表', '城市:', city, '分类：', type, '关键字:', keyword);
    var data = list_1["default"];
    res.send(data);
});
app.get('/api/detail/:id', function (req, res) {
    var id = req.params.id;
    //console.log('商户详情查询：',`商户ID:${id}`,Productdetail)
    var data = detail_1["default"][1];
    /*  const data=Productdetail.find(item=>{
        return item.id==id
        
      })
      */
    res.send(data);
});
//const  comments=require('./comments.js')
app.get('/api/comments/:id/:page', function (req, res) {
    var id = req.params.id;
    var page = req.params.page;
    console.log('评论查询', '商户号码：', id, '评论页码：', page);
    var comment = comments_1["default"].data[0].comments;
    /*  const data=comments.data.find((item)=>{
        return item.id==id
        
      })*/
    res.send(comment);
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
    var resp = {
        status: true,
        text: 'ok'
    };
    res.send(resp);
});
app.listen(8888, "localhost", function () {
    console.log('ser is running at 8888');
});
