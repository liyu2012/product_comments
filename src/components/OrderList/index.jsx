import React from 'react'
import './style.less'
import Item from './Item'
export default class Search extends React.Component{
constructor(){
  super()

}
  render(){
     const data=this.props.data
     const handleSubmit=this.props.handleSubmit
    return(
      <div className="orderlist">
         <h3 className="title">您的订单</h3>
      {
        data.map((item,index)=>{
          return <div key={index}>
           <Item data={item} handleSubmit={handleSubmit}/>
          </div>
        })
      }
      </div>
    )
  }
} 