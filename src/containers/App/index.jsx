import React from 'react'
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import HomePage from '../HomeHeader'
import NotFound from '../NotFound'
import Detail from '../Detail'
import City from '../City'
import Login from '../Login'
import User from '../User'
import Search from '../Search'
import LocalStorage from '../../js/localstorage'
import {CITYNAME} from '../../config/localstorekey'
import {bindActionCreators} from 'redux'
import {connect}from 'react-redux'
import actions from'../../actions/userinfo'
 class App extends React.Component{
  constructor(...args){
    super(...args)
    this.state={
      initDone:false
    }
  
  }
  componentDidMount(){
    //从localstorage获取城市
    let cityName=LocalStorage.getItem(CITYNAME)
    if(cityName==null){
      cityName='北京'
    }
    //信息存储到redux
    this.props.userInfoActions.update(
      {
       cityName
      }
    )
  
    setTimeout(()=>{
         this.setState({
      initDone:true
    })
    }, 30);
 
  }
  render(){
    //console.log(this)
    return(
      this.state.initDone===true?
      <Router> 
        <div>
      <Switch> 
  <Route exact path={`${this.props.match.url}`} component={HomePage}/>
  <Route path={`${this.props.match.url}user`} component={User}/>
  <Route path={`/city`} component={City}/>
  <Route path={`/login/:route?`} component={Login}/>
  <Route path={`${this.props.match.url}search/:type/:keyword?`} component={Search}/>
  <Route path={`${this.props.match.url}detail/:id`} component={Detail}/>
  <Route path="*" component={NotFound}/>
   </Switch>
      </div>
       </Router>
    :<div>正在加载......</div>
    )
  }
} 
function mapStateToProps(state){
return {

}
}
function mapDispatchToProps(dispatch){
return {
  userInfoActions:bindActionCreators(actions,dispatch)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App)