import React from 'react'
import Header from '../../components/Header'
import ProductDetail from './subpage/ProductInfo'
import Comments from './subpage/comments'
import Buy from './subpage/buy'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
export default class Detail extends React.Component{
  constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
 
  }
  render(){
    const id=this.props.match.params.id
    
    return(
      <div>
        <Header title="商品详情" backRouter="/"/>
        <ProductDetail id={id} />
        <Buy id={id} />
        <div className="seperator"></div>
       <Comments id={id}/>
      </div>
    )
  }
}  