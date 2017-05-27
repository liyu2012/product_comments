import React from 'react'
import './style.less'
import '../../static/icomoon/style.css'
import SearchInput from '../SearchInput'
import { Link,Route,withRouter,BrowserRouter as Router,browserHistory} from 'react-router-dom'
 class Header extends React.Component{
  constructor(){
    super()
    this.state={
      search:''
    }
  }
  handleEnter(e){
    this.setState({
      search:e.target.value
    })
  //  console.log(this.state.search)
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

  render(){
    return (
     <div id="home-header" className=" clear-fix">
         <div>
        <Link to={`/city`}><div className="float-left home-header-left">{this.props.cityName}<i className="icon-ctrl"></i></div></Link> 
         </div>
      <div className="home-header-middle">
        <div className="search-container"><SearchInput/></div>
        </div> 
       <div className="float-right home-header-right"><Link to="./login/user"><i className="icon-user"></i></Link></div>
     </div>
    )
  }
}
export default Header