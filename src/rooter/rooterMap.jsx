import {Route, BrowserRouter as Router,Link} from 'react-router-dom'
import React from 'react'
import List from '../containers/List'
import App from '../containers/App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Provider} from 'react-redux'
import configureStore from '../store/configstore'
import '../static/css/common.less'
import '../static/css/reset.css'
import '../static/css/font.css'
import HomeHeader from '../containers/HomeHeader'
const store =configureStore()
export default class RouteMap extends React.Component{
  updateHandle(){
    console.log('router变化后触发')
  }
  render(){
    console.log(store.getState())
    return (
      <Provider store={store}> 
      <div>   
       <HomeHeader/>
      <Router onUpdate={this.updateHandle.bind(this)}>
        <div>
          
        <Route exact path="/" component={App}/>   
        </div>
        </Router> 
        <Footer/>
        </div>
         </Provider>  
      
     
    )
  }

}