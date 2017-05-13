import React from 'react'
import './style.less'
import '../../static/icomoon/style.css'
export default class Header extends React.Component{
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
    console.log(22,this)
    return (
     <div id="home-header" className=" clear-fix">
       <div className="float-left home-header-left">{this.props.cityName}<i className="icon-ctrl"></i></div>
      <div className="home-header-middle">
        <div className="search-container"><i className="icon-search"></i><input placeholder="请输入关键字" type="text"/></div>
        </div> 
       <div className="float-right home-header-right"><i className="icon-user"></i></div>
     </div>
    )
  }
}