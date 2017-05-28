import React from 'react'
import Comment from '../../../components/Commenta'
import {LoadMore}from '../../../components/LoadMore'
import {getComments}from '../../../fetch/detail/detail'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Comments extends React.Component{
constructor(){
  super()
   this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  this.state={
    comments:false,
    isLoadingMore:false,
    page:0,
    hasMore:true
  }
}
componentDidMount(){

getComments(this.props.id,this.state.page).then(res=>{
   return  res.json()
  }).then(json=>{
    this.setState({
     comments:json
    })
  })
}

   loadMoreData(){
this.setState({
  isLoadingMore:true,
  page:++this.state.page
})
getComments(this.props.id,this.state.page).then(res=>{
   return  res.json()
  }).then(json=>{
    this.setState({
     comments:this.state.comments.concat(json),
     isLoadingMore:false
    })
  })


   }
  render(){
    return(
      <div>     
        {this.state.comments?<Comment comments={this.state.comments}/>:''}
         {
          this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>:''
        }
      </div>
    )
  }
} 