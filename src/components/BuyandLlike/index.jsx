import React from 'react'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Buy extends React.Component{
  constructor(...args){
  super(...args)
   this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
}
  buyHandle(){
this.props.buyHandle()
  }
  likeHandle(){
this.props.likeHandle()
  }
  render(){
    //console.log(this.props.isStore)
    return(
      <div className="buy">
        {!this.props.isStore? <input type="button" className="active" onClick={this.likeHandle.bind(this)} value="收藏商品"/>:
         <input type="button" onClick={this.likeHandle.bind(this)} value="取消收藏"/>
        }
    
     <input type="button" className="active"  onClick={this.buyHandle.bind(this)} value="购买"/>
      </div>
    )
  }
} 