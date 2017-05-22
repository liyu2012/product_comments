import React from 'react'
import './style.less'
export default class Star extends React.Component{

  render(){
   // console.log(this)
     const star=this.props.star
    return(
      <div className="star">
          {[0,1,2,3,4].map((item,index)=>{
             const lightClass=star>=(item+1)?'light':''
             return <i key={index} className={ 'icon-star-full '+lightClass}></i>
          })}
      </div>
    )
  }
} 