import {Route, BrowserRouter as Router,Link} from 'react-router-dom'
import React from 'react'
import List from '../containers/List'
import App from '../containers/App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Provider} from 'react-redux'
import configureStore from '../store/configstore'
const store =configureStore()
export default class RouteMap extends React.Component{
  updateHandle(){
    console.log('router变化后触发')
  }
  render(){
    return (
     
      <div>   
       <Header title="我是页头"/>
      <Router onUpdate={this.updateHandle.bind(this)}>
        <div>
           <Provider store={store}> 
              <Route exact path="/" component={App}/> 
            </Provider>  
        </div>
        </Router> 
        <Footer/>
        </div>
      
     
    )
  }

}