import React from 'react'
import './style.less'
import {withRouter}from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class CurrentCity extends React.Component{
   constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
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
export default withRouter(CurrentCity )