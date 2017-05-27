import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from '../../components/Hr'
import actions from'../../actions/userinfo'
import LoginComponent from '../../components/LoginComponent'
class Login extends React.Component{
  constructor(){
    super()
    this.state={
      checking:true
    }
  }
goUserPage(){
  this.props.history.push('/user')
}
  doCheck(){
if(this.props.userinfo.userName){
//到用户界面
this.goUserPage()
}else{
this.setState({
  checking:false
})
}
  }
  render(){
    return(
      <div>
        <Header title="用户登录"/>
        {this.state.checking?<div>等待中</div>:<LoginComponent loginHandle={this.loginHandle.bind(this)}/>}
        </div>
    )
  }
loginHandle(username){
  const actions=this.props.userInfoActions
  let userinfo=this.props.userinfo
  userinfo.username=username
  actions.update(userinfo)
  // navigate to userpage
  const match=this.props.match
  if(match.params.route){
this.props.history.push(`/${match.params.route}`)
  }
  else{
this.props.history.push('/')
  }
}
  componentDidMount(){
    this.doCheck()
 
  }
}
function mapStateToProps(state){
  return{
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    userInfoActions:bindActionCreators(actions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)