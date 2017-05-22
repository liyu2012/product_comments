import React from 'react'
import Header from '../../components/Hr'
import ProductDetail from './subpage/ProductInfo'
import Comments from './subpage/comments'
import Buy from './subpage/buy'
export default class Detail extends React.Component{

  render(){
    const id=this.props.match.params.id-1
    return(
      <div>
        <Header title="商品详情"/>
        <ProductDetail id={id} />
        <Buy id={id}/>
       <Comments id={id}/>
      </div>
    )
  }
}  