import React from 'react'
import Header from '../../components/Header'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import CurrentCity from '../../components/CurrentCity'
import CityList from './subpage/CityList'
import actions from'../../actions/userinfo'
import LocalStorage from '../../js/localstorage'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class City extends React.Component{
    constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
   changeCity(city){
     if(!city){
       return
     }
     //modify redux
     const userinfo=this.props.userinfo
     userinfo.cityName=city
     this.props.userinfoActions.update(userinfo)
     LocalStorage.setItem('cityName',city)
     this.props.history.goBack()
   // window.location.href='http://localhost:8080'
   
   }
  render(){
    return(
      <div className="city">
        <Header title="选择城市"/>
        <CurrentCity currentcity={this.props.userinfo.cityName}/>
        <CityList changeCity={this.changeCity.bind(this)}/>
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