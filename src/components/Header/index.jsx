import React from 'react'
import './style.less'
import {withRouter}from 'react-router-dom'
 class Header extends React.Component{
  back(){
    const backRouter=this.props.backRouter
   if(backRouter){
this.props.history.push(backRouter)
   }
   else{
     this.props.history.goBack()
   }
  }
  render(){
    return(
     <div className="hr">
       <span onClick={this.back.bind(this)}>&lt;</span>
       <div className="text">{this.props.title}</div>
     </div>
    )
  }
}
export default withRouter(Header)