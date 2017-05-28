import React from 'react'
import ProductInfo from '../../../components/ProductInfo'
import {getProductDetail}from '../../../fetch/detail/detail'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class ProductDetail extends React.Component{
  constructor(){
    super()
     this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      info:false
    }
  }
componentDidMount(){
getProductDetail(this.props.id).then(res=>{
   return  res.json()
  }).then(json=>{
    this.setState({
      info:json
    })
  })
}
  render(){
    return(
      <div>
       {!!this.state.info?<ProductInfo data={this.state.info}/>:''}
      </div>
    )
  }
}  