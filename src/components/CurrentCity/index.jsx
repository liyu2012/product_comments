import React from 'react'
import './style.less'
export default class Hr extends React.Component{
  back(){
    window.history.back()
  }
  render(){
    return(
     <div className="currentcity" >
      <h3>{this.props.currentcity}</h3>
       

     </div>
    )
  }
}