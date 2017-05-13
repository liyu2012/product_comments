import React from 'react'
import Header from '../../components/Header'
import {connect } from 'react-redux'
import Carousel from '../../components/Carousel'
import AD from './subpage/ad.jsx'
 class HomeHeader extends React.Component{
   componentDidMount(){
     const options={
      method:'GET'
     }
fetch('/api/product',options)
   }
  render(){
   //console.log(this)
    return(
      <div>
       <Header cityName={this.props.userinfo.cityName}></Header>
       <Carousel/>
       <div style={{height:'15px'}}>
        
       </div>
        <AD/>
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