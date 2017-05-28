import React from 'react'
import {connect} from 'react-redux'
import actions from'../../actions/userinfo'
import Header from '../../components/Header'
import {bindActionCreators} from 'redux'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'
import PureRenderMixin from 'react-addons-pure-render-mixin' 
 class User extends React.Component{
    constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
  componentDidMount(){
    if(!this.props.userinfo.username)
      {
        this.props.history.push('/login')
      } 
 }
  render(){
    return(
      <div>
          <Header title="用户中心" backRouter="/"/>
        <UserInfo userName={this.props.userinfo.username} cityName={this.props.userinfo.cityName} />
        <OrderList userName={this.props.userinfo.username}/>
      </div>
    )
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
export default connect(mapStateToProps,mapDispatchToProps)(User)