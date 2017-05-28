import * as express from 'express'
const app=express()
import * as bodyParser from 'body-parser'
import {ad} from './ad'
import  Productdetail from './detail'
import homelistData from './list'
import comments from './comments'
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/api/ad',(req,res)=>{
  console.log('首页-超级特惠-请求')
  res.send(ad)
})

app.get('/api/list/:city/:page',(req,res)=>{
  const params=req.params
  const city =params.city
  const page=params.page
  console.log('首页列表',city,page)
  res.send(homelistData)
})
 
 app.get('/api/search/:city/:type/:keyword?',(req,res)=>{
  const params=req.params
  const city =params.city
  const type =params.type||'all'
  const keyword =params.keyword==null?'*':params.keyword
  console.log('搜索列表','城市:',city,'分类：',type,'关键字:',keyword)
  const data=homelistData
  res.send(data)
})

app.get('/api/detail/:id',(req,res)=>{
  const id=req.params.id
  console.log('商户详情查询：',`商户ID:${id}`)
  const data=Productdetail[1]
/*  const data=Productdetail.find(item=>{
    return item.id==id
    
  })
  */
  res.send(data)
})
//const  comments=require('./comments.js')
app.get('/api/comments/:id/:page',(req,res)=>{
  const id=req.params.id
  const page=req.params.page
  console.log('评论查询','商户号码：',id,'评论页码：',page)
  const comment=comments.data[0].comments
/*  const data=comments.data.find((item)=>{
    return item.id==id
    
  })*/
  res.send(comment)
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
  const resp={
    status:true,
    text:'ok'
  }
  res.send(resp)
})
app.listen(8888,"localhost",()=>{
  console.log('ser is running at 8888')
})