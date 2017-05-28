import React from 'react'
import './style.less'
import '../../static/icomoon/style.css'
import { Link,Route,withRouter,BrowserRouter as Router,browserHistory} from 'react-router-dom'

class Search extends React.Component{
constructor(){
  super()
  this.state={
    value:''
  }
}
componentDidMount(){
this.setState({
  value:this.props.value||''
})
}
handleChange(e){
  this.setState({
  value:e.target.value
})

}

  handleKeyup(e){
if(e.keyCode!==13)
{
  return 
}
else{
  this.props.history.push(`/search/all/${e.target.value}`)
}


  }
  render(){
    return(
      <div className="search-input">
        <i className="icon-spinner9"></i>
     <input  onKeyUp={this.handleKeyup.bind(this) } value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="input your interested product" type="text"/>
      </div>
    )
  }
} 
export default withRouter(Search)