import React from 'react'
import './style.less'
 import PureRenderMixin from 'react-addons-pure-render-mixin' 
export default class Search extends React.Component{
 
constructor(){
  super()
  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  this.state={
    phone:''
  }
}
handlePhone(e){
  this.setState({
    phone:e.target.value
  })
}
handleClick(){
  const username=this.state.phone
  const loginHandle=this.props.loginHandle
  loginHandle(username)
}
  render(){
     
    return(
      <div className="login-component">
        <i className="icon-phone"></i>
      <input type="text" onChange={this.handlePhone.bind(this)} value={this.state.phone} placeholder="input your telephone number"/>
        <i className="icon-hammer"></i><input type="text" placeholder="input your authorition number from message"/>
        <span>发送验证码</span>
       <button onClick={this.handleClick.bind(this)}>登录</button>
      </div>
    )
  }
} 