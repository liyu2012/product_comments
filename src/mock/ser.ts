import * as express from 'express'
const app=express()
app.get('/api/ad',(req,res)=>{
  const data=[
{
  title:"暑期五折",
  img:"./src/static/imgs/1.jpg",
  desc:"芒果冰激凌",
  link:"http://www.baidu.com"

},
{
  title:"特价出国",
    desc:"一元旅行",
  img:"./src/static/imgs/2.jpg",
  link:"http://www.baidu.com"
  
},
{
  title:"电影",
    desc:"洗车9.9元",
  img:"./src/static/imgs/3.jpg",
  link:"http://www.baidu.com"
  
},
{
  title:"英语教育",
    desc:"免费学习",
  img:"./src/static/imgs/4.jpg",
  link:"http://www.baidu.com"
  
},
{
  title:"旅游热线",
    desc:"天天看片",
  img:"./src/static/imgs/5.jpg",
  link:"http://www.baidu.com"
  
},
{
  title:"汽车销售",
    desc:"二手汽车热销中",
  img:"./src/static/imgs/6.jpg",
  link:"http://www.baidu.com"
  
}
  ]
  res.send(data)
})
var homelistData=require('./list.js')
app.get('/api/list/:city/:page',(req,res)=>{
  const params=req.params
  const city =params.city
  const page=params.page
  console.log(city,page)

  res.send(homelistData)
})
app.listen(8888,"localhost",()=>{
  console.log('ser is running at 8888')
})