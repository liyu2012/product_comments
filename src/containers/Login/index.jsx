import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Header from '../../components/Header'
import actions from'../../actions/userinfo'
import LoginComponent from '../../components/LoginComponent'
import PureRenderMixin from 'react-addons-pure-render-mixin' 
import {postLoginData} from '../../fetch/login/login'

class Login extends React.Component{
  constructor(){
    super()
      this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      checking:true,
      isPassed:false
    }
  }
goUserPage(){
  this.props.history.push('/user')
}

  doCheck(){
    //console.log(this.props.userinfo)
if(this.props.userinfo.username)
{
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
loginHandle(username,pass){
 postLoginData(username,pass).then(res=>res.json()).then(
   json=>{
     if(json.status==='success')
this.setState({
  isPassed:true
})

if(this.state.isPassed){
  const actions=this.props.userInfoActions
  let userinfo=this.props.userinfo
  userinfo.username=username
  actions.update(userinfo)
  const match=this.props.match
  if(this.props.match.params.route){
this.props.history.push(`/${match.params.route}/${match.params.id}`)
  }
  else{
this.goUserPage()
  }
  return true
 }

  else{
   return false
 }
   }
 )
 


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