import React from 'react'
import ProductInfo from '../../../components/ProductInfo'
export default class ProductDetail extends React.Component{
  constructor(){
    super()
    this.state={
      info:false
    }
  }
componentDidMount(){
  const Options={
    method:"GET"
  }
  fetch(`/api/detail/${this.props.id}`,Options).then(res=>{
   return  res.json()
  }).then(json=>{
    console.log(json)
    this.setState({
      info:json
    })
  })
}
  render(){
    return(
      <div>
       {this.state.info?<ProductInfo data={this.state.info}/>:''}
      </div>
    )
  }
}  