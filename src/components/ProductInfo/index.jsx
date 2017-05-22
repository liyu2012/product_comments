import React from 'react'
import './style.less'
import Star from '../Star'
export default class Search extends React.Component{

  render(){
     const data=this.props.data
    return(
      <div className="product-info">
       <figure>
           <div className="img">
                <img src={data.img} alt=""/>
           </div>
           <div className="product-right">
               <h3>{data.title}</h3>  
               <Star star={data.star}/>
            <span>{data.price}元</span>
               <p>{data.subTitle}</p>
           </div>
          
       </figure>
       <p dangerouslySetInnerHTML={{__html:data.desc}}>
           
       </p>
      </div>
    )
  }
} 