import React from 'react'
import './style.less'
 export default class User extends React.Component{

  render(){
    return(
      <div className="userinfo">
        <div>  <i className="icon-user"></i> <span>{this.props.userName} </span></div>
     
          <br/>
          
          <div> <i className="icon-location2"></i><span>{this.props.cityName}</span>
</div>
      </div>
    )
  }
} 
