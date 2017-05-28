import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
export default class CityListComponent extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
   clickHandle(e){
     this.props.changeCity(e.target.innerText)
}

  render(){
    return(
     <div className="city-list" >
      <ul>
        {this.props.data.map((item,index)=>{
              return (
<li key={index} onClick={this.clickHandle.bind(this)}>{item}</li>
              )
        })}
        
    
      </ul>
     </div>
    )
  }
}