import React from 'react'
import Oderlist from '../../../components/OrderList'
export default class User extends React.Component{
   constructor(){
     super()
     this.state={
       data:[]
     }
   }
   obj2params(obj){
     var result=''
     var item
     for(item in obj){
       result+='&'+item+'='+encodeURIComponent(obj[item])
     }
     if(result){
       result=result.slice(1)
     }
 return result
   }
   handleSubmit(id,value,cb){
     fetch('api/submitcomment',{
       method:'POST',
       headers:{
         'Accept':'application/json,text/plain,*/*',
         'Content-type':'application/x-www-form-urlencoded'
       },
       body:this.obj2params({
         commenttext:value,
         id
       })
     }).then(res=>{
       return res.json()
      
     }).then(json=>{
if(json.text==='ok')
         cb()
     })
   }
  componentDidMount(){
    const username=this.props.userName
    if(username){
 fetch(`api/orderlist/${username}`,{
       headers:{
'Accept':'application/json,text/plain,*/*'
       },
       method:'GET'
     }).then(res=>{
return res.json()
  }).then(json=>{
this.setState({
  data:json
})
  })
    }
 
 }
  render(){
    return(
      <div>
    {
       this.state.data? <Oderlist handleSubmit={this.handleSubmit.bind(this)} data={this.state.data}/>:''
     }
      </div>
    )
  }
} 
