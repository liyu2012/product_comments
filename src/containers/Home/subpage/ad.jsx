import React from 'react'
import './style.less'
import {getAdJson}from '../../../fetch/home/home'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 export default class AD extends React.Component{
   constructor(){
     super()
       this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
     this.state={
       data:[]
     }
   }
   componentDidMount(){
     const result=getAdJson()
    result.then(res=>{
       return res.json()
     }).then(json=>{
       if(json.length){
this.setState({
  data:json
})
       }
     })
   }

  render(){
 
    return(
      <div className="ad">
        <h2>超级特惠</h2>
        <div className="ad-list">
         {
this.state.data.map((item,index)=>{
  let r=Math.ceil(Math.random()*255),
      g=Math.ceil(Math.random()*255),
      b=Math.ceil(Math.random()*255)
  let styleObj={color:`rgb(${r},${g},${b})`}
return <div key={index}>
  <a href={item.link}>
    <h4 style={styleObj} >{item.title} </h4>
    <p>{item.desc}</p>
     <div className="img"><img src={item.img} alt="imgs for a.d. list" /></div>
  </a>
 
</div>
          })
         } 
        </div>
     
      </div>
    )
  
} 

}
