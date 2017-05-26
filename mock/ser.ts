import * as express from 'express'
const app=express()
import * as bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
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
 const  Productdetail=require('./detail.js')
 
app.get('/api/detail/:id',(req,res)=>{
  const id=req.params.id
  //console.log(id)
  const data=Productdetail.find((item)=>{
    return item.id==id
    
  })
  res.send(data)
})
 const  comments=require('./comments.js')
app.get('/api/comments/:id/:page',(req,res)=>{
  const id=req.params.id
  const page=req.params.page
  console.log('评论查询',id,page)
  const data=comments.find((item)=>{
    return item.id==id
    
  })
  res.send(data.comments)
})
const  orderlist=require('./orderlist.js')
app.get('/api/orderlist/:user',(req,res)=>{
  const user=req.params.user
  console.log('订单查询',user)
  const data=orderlist.find((item)=>{
    return item.id==user
    
  })
  res.send(data.list)
})
app.post('/api/submitcomment',(req,res)=>{
  console.log('订单评论',req.body)
  //console.log(''req.body)
  const resp={
    status:true,
    text:'ok'
  }
  res.send(resp)
})
app.listen(8888,"localhost",()=>{
  console.log('ser is running at 8888')
})