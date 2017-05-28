import React from 'react'
import './style.less'
import '../../static/icomoon/style.css'
import SearchInput from '../SearchInput'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,Route,withRouter,BrowserRouter as Router,browserHistory} from 'react-router-dom'
 class HomeHeader extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      search:''
    }
  }
  handleEnter(value){
    //console.log(this)
  this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
  }
  render(){
    return (
     <div id="home-header" className=" clear-fix">
         <div>
        <Link to={`/city`}><div className="float-left home-header-left">{this.props.cityName}<i className="icon-ctrl"></i></div></Link> 
         </div>
      <div className="home-header-middle">
        <div className="search-container"><SearchInput value='' handleEnter={this.handleEnter.bind(this)}/></div>
        </div> 
       <div className="float-right home-header-right"><Link to="./login/user"><i className="icon-user"></i></Link></div>
     </div>
    )
  }
}
export default HomeHeader