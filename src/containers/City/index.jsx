import React from 'react'
import Header from '../../components/Hr'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import actions from'../../actions/userinfo'
import LocalStorage from '../../js/localstorage'
 class City extends React.Component{
   changeCity(city){
     if(!city){
       return
     }
     //modify redux
     const userinfo=this.props.userinfo
     userinfo.cityName=city
     this.props.userinfoActions.update(userinfo)
     localStorage.setItem('cityName',city)
    window.location.href='http://localhost:8080'
   }
  render(){
    return(
      <div className="city">
        <Header title="选择城市"></Header>
        <CurrentCity currentcity={this.props.userinfo.cityName}></CurrentCity>
        <CityList changeCity={this.changeCity.bind(this)}></CityList>
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
  userinfoActions:bindActionCreators(actions,dispatch)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(City)