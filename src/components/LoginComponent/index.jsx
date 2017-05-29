import React from 'react'
import './style.less'
 import PureRenderMixin from 'react-addons-pure-render-mixin' 
export default class Search extends React.Component{
 
constructor(){
  super()
  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  this.state={
    phone:'',
    pass:''
  }
}
handlePhone(e){
  this.setState({
    phone:e.target.value
  })
}
handlePass(e){
  this.setState({
    pass:e.target.value
  })
}
handleClick(){
  const username=this.state.phone
   const userpass=this.state.pass
  const loginHandle=this.props.loginHandle
  if(username===''||username==null||userpass==''||userpass==null){
    return false
  }
  loginHandle(username,userpass)
}
  render(){
     
    return(
      <div className="login-component">
        <i className="icon-phone"></i>
      <input type="text" onChange={this.handlePhone.bind(this)} value={this.state.phone} placeholder="input your telephone number"/>
        <i className="icon-hammer"></i><input  onChange={this.handlePass.bind(this)}  type="password" placeholder="input your authorition number from message"/>
        <span>发送验证码</span>
       <button onClick={this.handleClick.bind(this)}>登录</button>
      </div>
    )
  }
} 