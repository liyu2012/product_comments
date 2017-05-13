import React from 'react'
import Detail from '../Detail'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
export default class List extends React.Component{
   handler(v){
       hashHistory.push('/detail/'+value)
    }
  render(){
    const arr=[1,2,3,4]
   
    return(
      <div>
        <Router>
          <div>
  <ul>
          {
            arr.map((item,index)=><Link key={index} to={"/detail/"+(index+1)}>jump back to{item}</Link>)
          }
        </ul>
        <Route path="/detail/:id" component={Detail}></Route>
          </div>
  
        </Router>
    
      </div>
    )
  }
} 