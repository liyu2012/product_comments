import React from 'react'
import Star from '../Star'
import './style.less'
 class Commentxx extends React.Component{
  render(){
    const data=this.props.comments
    return(
      <div className="comment">
        <h3>产品点评</h3>
         
           {
             data.map((item,index)=>{
                  return <div className="item" key={index}>
                    <i className="icon-user"></i>
                    <span>{item.tel}</span>
                    <Star star={item.star}/>
                    <p>{item.text}</p>
                  </div>
             })
           }
         
      </div>
    )
  }
} 
export default Commentxx