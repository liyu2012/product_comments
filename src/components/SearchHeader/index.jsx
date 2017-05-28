import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import SearchInput from '../SearchInput'
 class SearchHeader extends React.Component{
  constructor(...args){
    super(...args)
     this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  }
/*//组件渲染完毕
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
  }*/
  back(){
    this.props.history.goBack(-1)
  }
    handleEnter(value){
    //console.log(this)
  this.props.history.push(`/search/all/${encodeURIComponent(value)}`)
  }
  render(){
    return (
     <div id="home-header-search" className=" clear-fix">
       <span onClick={this.back.bind(this)}>&lt;</span>
      <div className="home-header-middle">
        <div className="search-container"><SearchInput handleEnter={this.handleEnter.bind(this)} value={this.props.keyword} /></div>
        </div> 
      
     </div>
    )
  }
}
export default SearchHeader