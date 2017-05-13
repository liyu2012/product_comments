import * as express from 'express'
const app=express()
app.get('/api',(req,res)=>{
  res.send('hellow,express')
})
app.get('/api/product',(req,res)=>{
  res.send('produts')
})
app.listen(8888,"localhost",()=>{
  console.log('ser is running at 8888')
})