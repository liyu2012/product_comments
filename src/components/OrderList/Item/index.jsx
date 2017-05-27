import React from 'react'
import './style.less'
export default class Search extends React.Component{
constructor(){
  super()
this.state={
  commentState:0
}
}
handleComment(){
  this.setState({
    commentState:1
  })
}
componentDidMount(){
   const data=this.props.data
  this.setState({
    commentState:data.commentState
  })
}
handleCancel(){
 
    this.setState({
    commentState:0
  })
}

handleSubmit(){
  const text=this.refs.commenttext.value.trim()
  const id=this.props.data.id||1
  if(!text)
  return
  this.props.handleSubmit(id,text,this.commentOK.bind(this))
  //const id=this.props.
}
commentOK(){
   this.setState({
    commentState:2
  })
}
  render(){
     const data=this.props.data
    return(
      <div className="item">
         <h3 >{data.title}</h3>
        <figure>
          <div className="img">  <img src={data.img} alt=""/></div>
        
          <div>
             <p>数量：{data.count}</p>
         <p>价格：￥{data.price}</p>
        {this.state.commentState==0?<button onClick={this.handleComment.bind(this)}>评价</button>:
        this.state.commentState==1?'':<button className="commented">已评价</button>} 
          </div>
        
        </figure>
        {this.state.commentState===1?<div><textarea name="" ref="commenttext" cols="30" rows="10"></textarea>
        <br/>
        <button className="comment-button" onClick={this.handleSubmit.bind(this)}>提交</button><button className="commented" className="comment-button"  onClick={this.handleCancel.bind(this)}>取消</button>
        </div>:''}
      </div>
    )
  }
} 