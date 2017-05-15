import React from 'react'
import Header from '../../components/Header'
import {connect } from 'react-redux'
import Carousel from '../../components/Carousel'
import AD from './subpage/ad.jsx'
import List from './subpage/list.jsx'
import './style.less'
 class HomeHeader extends React.Component{
   componentDidMount(){

   }
  render(){
  // console.log('HomeHeader',this.props.userinfo.cityName)
    return(
      <div className="header">
       <Header cityName={this.props.userinfo.cityName}></Header>
       <Carousel/>
       <div style={{height:'15px'}}>      
       </div>
        <AD/>
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
export default connect(mapStateToProps,mapDispatchToProps)(HomeHeader)