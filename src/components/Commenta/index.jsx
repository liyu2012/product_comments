import React from 'react'
import Star from '../Star'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class Commentx extends React.Component{
    constructor(...args){
    super(...args)
     this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  }
  render(){
    const data=this.props.comments
    //console.log(data)
    return(
      <div className="comment">
        <h3>评论列表</h3>
         
           {
             data.map((item,index)=>{
                  return <div className="item" key={index}>
                    <i className="icon-user"></i>
                    <span>{item.tel}</span>
                    <Star star={item.star}/>
                    <p>{item.text}</p>
                  </div>
             })
           }
         
      </div>
    )
  }
}
export default Commentx