import React from 'react'
import Oderlist from '../../../components/OrderList'
import {getOrderlist,submitComments} from '../../../fetch/user/user'
import PureRenderMixin from 'react-addons-pure-render-mixin' 
import {LoadMore}from '../../../components/LoadMore'
export default class User extends React.Component{
   constructor(...args){
     super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
     this.state={
       data:[],
       hasMore:false,
       isLoadingMore:false,
       page:0
     }
   }
 loadMoreData(){
    const username=this.props.userName
    this.setState({
  isLoadingMore:true,
  page:this.state.page+1
})
  const page=this.state.page
  getOrderlist(username,page).then(res=>{
       return res.json()
  }).then(json=>{
this.setState({
  data:this.state.data.concat(json.data),
  isLoadingMore:false
})
  })

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
     submitComments('api/submitcomment',this.obj2params({
         commenttext:value,
         id
       })).then(res=>{
       return res.json()
      
     }).then(json=>{
if(json.text==='ok')
         cb()

     })
   }
  componentDidMount(){
    const username=this.props.userName
    if(username){
      getOrderlist(username,0).then(res=>{
       return res.json()
  }).then(json=>{
this.setState({
  data:json.data,
  hasMore:json.hasMore
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
     {this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>:null}
      </div>
    )
  }
} 
