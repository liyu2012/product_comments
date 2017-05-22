import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import List from "../List"
export default class Search extends React.Component{

  render(){
      //console.log(this.props.params.match.keyword)
    return(
      <div>
   <SearchHeader keyword={this.props.match.params.keyword}/>
   <List/>
      </div>
    )
  }
} 