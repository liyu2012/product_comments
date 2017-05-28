import React from 'react'
import Header from '../../components/HomeHeader'
import {connect } from 'react-redux'
import Carousel from '../../components/Carousel'
import AD from './subpage/ad.jsx'
import List from './subpage/list.jsx'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class Home extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
  render(){
    return(
      <div className="header">
       <Header cityName={this.props.userinfo.cityName}></Header>
       <Carousel/>
       <div  className="seperator">      
       </div>
        <AD/>
         <div className="seperator" >      
       </div>
        <List  cityName={this.props.userinfo.cityName}/>
      </div>
    )
  }
} 
function mapStateToProps(state){
return {
userinfo:state.userinfo
}
}
function mapDispatchToProps(dispatch){
return {

}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)