import React from 'react'
export default class Search extends React.Component{

  render(){
      console.log(this)
    return(
      <div>
         类型：<p>{this.props.match.params.type}</p>
        关键字：<p>{this.props.match.params.keyword}</p>
        <p>search</p>
      </div>
    )
  }
} 