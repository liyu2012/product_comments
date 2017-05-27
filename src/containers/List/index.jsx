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
          <div>
        <ul>
          {
            arr.map((item,index)=><div key={index}><Link  to={"/detail/"+(index+1)}>jump back to{item}</Link></div>)
          }
        </ul>     
          </div>
      </div>
    )
  }
} 