import React from 'react'
 export default class AD extends React.Component{
   constructor(){
     super()
     this.state={
       data:[]
     }
   }
   componentDidMount(){
     fetch("http://localhost:8080/api/ad",{
       method:'GET'
     }).then(res=>{
      // console.log(res)
       return res.json()
     }).then(json=>{
       console.log(json)
       if(json.length){
this.setState({
  data:json
})
       }
     })
   }

  render(){
 
    return(
      <div>
     <h2>ad{this.state.data.length}</h2>
      </div>
    )
  
} 

}
