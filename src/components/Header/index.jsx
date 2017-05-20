import React from 'react'
import './style.less'
import '../../static/icomoon/style.css'
import { Link,Route,withRouter,BrowserRouter as Router,browserHistory} from 'react-router-dom'
//import  * as RouterDOM from 'react-router'
 class Header extends React.Component{
  constructor(){
    super()
    this.state={
      search:''
    }
  }
  handleClick(e){
    //console.log(e)
    this.setState({
      search:e.target.value
    })
    console.log(this.state.search)
  }
//组件渲染完毕
  componentDidMount(){
    //console.log('has been rendered')
  }
  //组件更新完毕
  componentDidUpdate(){
    //console.log('updated the component')
  }
 
  //组件即将卸载
  componentWillUnmount(){
   // console.log('will destoryed the component')
  }
  handleKeyup(e){
if(e.keyCode!==13)
{
  return 
}
else
this.props.history.push(`/search/all/${e.target.value}`)

//console.log(history.pushState(''))
  }
  render(){
   // console.log(this)
    return (
     <div id="home-header" className=" clear-fix">
         <div>
        <Link to={`/city`}><div className="float-left home-header-left">{this.props.cityName}<i className="icon-ctrl"></i></div></Link> 
         </div>
      <div className="home-header-middle">
        <div className="search-container"><i className="icon-search"></i><input onKeyUp={this.handleKeyup.bind(this)} placeholder="请输入关键字" onChange={this.handleClick.bind(this)} type="text"/></div>
        </div> 
       <div className="float-right home-header-right"><i className="icon-user"></i></div>
     </div>
    )
  }
}
export default withRouter(Header)