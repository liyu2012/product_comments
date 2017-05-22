import React from 'react'
import './style.less'
import {withRouter}from 'react-router-dom'
 class Hr extends React.Component{
  back(){
    this.props.history.goBack()
  }
  render(){
    return(
     <div className="currentcity" >
      <h3>{this.props.currentcity}</h3>
       

     </div>
    )
  }
}
export default withRouter(Hr)