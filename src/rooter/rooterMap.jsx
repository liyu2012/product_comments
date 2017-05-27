import {Route, BrowserRouter as Router,Link} from 'react-router-dom'
import React from 'react'
import List from '../containers/List'
import App from '../containers/App'
import Header from '../components/Header'
import {Provider} from 'react-redux'
import configureStore from '../store/configstore'
import '../static/css/common.less'
import '../static/css/reset.css'
import '../static/icomoon/style.css'
import City from '../containers/City'
const store =configureStore()
export default class RouteMap extends React.Component{
  componentDidMount(){
    //pure redux example  
//     const action1={
//       type:'ADD',
//       data:{
//         name:'liyu',
//         age:25
//       }
//     }
//     const action2={
//       type:'MINUS',
//       data:{
//         name:'wangfei',
//         age:22
//       }
//     }
//     const reducer=function(initailState={id:0},action){
// console.log(initailState)
// switch(action.type){
 
//   case 'ADD':
//     return {
//         id:initailState+1,
//         data:action.data
//     }
//     case 'MINUS':
//     return  {
//         id:initailState.id-1,
//         data:action.data
//     }
//     default:
//     return 0
// }
//     }
//  const store=createStore(reducer)
//    store.subscribe(()=>{
//     console.log('current state is ',store.getState().id,store.getState().data)
//   })
//   store.dispatch(action1)
//   store.dispatch(action2)
//   store.dispatch({
//     type:'MINUS',
//     data:{
//       name:'lifei',
//       age:33
//     }
//   })
  }

  render(){
    return (
      <Provider store={store}>  
      <Router>
        <div>  
        <Route exact path="/" component={App}/>   
        </div>
        </Router>    
         </Provider>     
    )
  }

}