import React from 'react'
import './style.less'
import SearchInput from '../SearchInput'
 class SearchHeader extends React.Component{
  constructor(){
    super()
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
  back(){
     window.history.back()
  }
  render(){
   // console.log(this)
    return (
     <div id="home-header-search" className=" clear-fix">
       <span onClick={this.back.bind(this)}>&lt;</span>
      <div className="home-header-middle">
        <div className="search-container"><SearchInput value={this.props.keyword}/></div>
        </div> 
      
     </div>
    )
  }
}
export default SearchHeader