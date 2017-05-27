import React from 'react'
import './style.less'
 export default class AD extends React.Component{
   constructor(){
     super()
     this.state={
       data:[]
     }
   }
   componentDidMount(){
     fetch("http://localhost:8080/api/ad",{
       
       headers:{
'Accept':'application/json,text/plain,*/*'
       },
       method:'GET'
     }).then(res=>{
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
        <div>
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
     <img src={item.img} alt="" />
  </a>
 
</div>
          })
         } 
        </div>
     
      </div>
    )
  
} 

}
