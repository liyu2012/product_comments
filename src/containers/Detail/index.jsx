import React from 'react'

export default class Detail extends React.Component{
  componentWillMount(){
    console.log(this)
  }
  render(){
    return(
      <div>
        
       <p>Detail,url 参数：{this.props.match.params.id}</p>
      </div>
    )
  }
}  