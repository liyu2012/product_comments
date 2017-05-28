import React from 'react'
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import Home from '../Home'
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
import PureRenderMixin from 'react-addons-pure-render-mixin' 
 class App extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldCompoentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      initDone:false
    } 
  }

  componentDidMount(){
    //从localstorage获取城市
    let cityName=LocalStorage.getItem(CITYNAME)
    if(cityName==null){
      //expression ==null represents ===null or ===undefined
      cityName='北京'
    }
    //信息存储到redux
    this.props.userInfoActions.update(
      {
       cityName
      }
    )
   this.setState({initDone:true})
 
  }

  render(){
    return(
      this.state.initDone===true?
      <Router> 
  <div>
   <Switch> 
  <Route exact path={`${this.props.match.url}`} component={Home}/>
  <Route path={`/city`} component={City}/>
  <Route path={`${this.props.match.url}user`} component={User}/>
  <Route path={`/city`} component={City}/>
  <Route path={`/login/:route?/:id?`} component={Login}/>
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