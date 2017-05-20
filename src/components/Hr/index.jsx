import React from 'react'
import './style.less'
export default class Hr extends React.Component{
  back(){
    window.history.back()
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