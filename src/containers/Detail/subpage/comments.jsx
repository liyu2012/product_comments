import React from 'react'
import Comment from '../../../components/Commenta'
import {LoadMore}from '../../../components/LoadMore'
export default class Comments extends React.Component{
constructor(){
  super()
  this.state={
    comments:false,
    isLoadingMore:false,
    page:0,
    hasMore:true
  }
}
componentDidMount(){
    const Options={
    method:"GET"
  }
  fetch(`/api/comments/${this.props.id}/${this.state.page}`,Options).then(res=>{
   return  res.json()
  }).then(json=>{
    //console.log('comment',json)
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
setTimeout(()=>{

      const Options={
       method:"GET"
  }
  fetch(`/api/comments/${this.props.id}/${this.state.page}`,Options).then(res=>{
   return  res.json()
  }).then(json=>{
   // console.log('comment',json)
    this.setState({
     comments:this.state.comments.concat(json),
     isLoadingMore:false
    })
  })
},500)

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