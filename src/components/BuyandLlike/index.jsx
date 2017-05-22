import React from 'react'
import './style.less'
export default class Buy extends React.Component{
  buyHandle(){

  }
  likeHandle(){

  }
  render(){
    return(
      <div className="buy">
     <input type="button" onClick={this.likeHandle.bind(this)} value={this.props.isStore?"已收藏":"收藏"}/>
     <input type="button" onClick={this.buyHandle.bind(this)} value="购买"/>
      </div>
    )
  }
} 