import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import PureRenderMixin from 'react-addons-pure-render-mixin' 
import SearchList from './subpage/List'
export default class Search extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
  render(){
    return(
      <div>
   <SearchHeader history={this.props.history} keyword={this.props.match.params.keyword?this.props.match.params.keyword:''}/>
   <SearchList  type={this.props.match.params.type} keyword={this.props.match.params.keyword}/>
      </div>
    )
  }
} 