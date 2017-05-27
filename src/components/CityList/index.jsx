import React from 'react'
import './style.less'
export default class Hr extends React.Component{
clickHandle(e){
  this.props.changeCity(e.target.innerText)
}

  render(){
    return(
     <div className="city-list" >
      <ul>
        <li  onClick={this.clickHandle.bind(this)}>北京</li>
        <li  onClick={this.clickHandle.bind(this)}>上海</li>
        <li  onClick={this.clickHandle.bind(this)}>杭州</li>
        <li  onClick={this.clickHandle.bind(this)}>深圳</li>
        <li  onClick={this.clickHandle.bind(this)}>广州</li>
        <li  onClick={this.clickHandle.bind(this)}>南京</li>
        <li  onClick={this.clickHandle.bind(this)}>成都</li>
        <li  onClick={this.clickHandle.bind(this)}>重庆</li>
        <li  onClick={this.clickHandle.bind(this)}>西安</li>
        <li  onClick={this.clickHandle.bind(this)}>武汉</li>
      </ul>
       

     </div>
    )
  }
}