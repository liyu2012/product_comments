import React from 'react'
import ListC from '../../../components/List'
import {LoadMore}from '../../../components/LoadMore'
 export default class List extends React.Component{
   constructor(...args){
     super(...args)
     this.state={
       data:[],
       hasMore:true,
       isLoadingMore:false,
       page:1
     }
   }

resultHandle(result){
  result.then(res=>{
    return res.json()
  }).then(json=>{
    const hasMore=json.hasMore
    const data=json.data
    this.setState({
        data:this.state.data.concat(data),
        page:this.state.page+1,
        isLoadingMore:false
    })

  })
}
   loadMoreData(){
this.setState({
  isLoadingMore:true
})
const cityName=this.props.cityName
const page=this.state.page
setTimeout(()=>{
const result=this.getListData(cityName,page)
this.resultHandle(result)
},500)

   }

 getListData(cityName,page){
  return   fetch(`http://localhost:8080/api/list/${cityName}/${page}`,{
       
       headers:{
'Accept':'application/json,text/plain,*/*'
       },
       method:'GET'
     })
     
     
   }
   componentDidMount(){   
    
      const result=this.getListData(this.props.cityName,0)
      this.resultHandle(result)
  
     
   }

  render(){
    return(<div>
        {
          this.state.data.length?<ListC data={this.state.data}/>:<div>加载中。。。</div>
        } 
        {
          this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>:''
        }
</div>)
         
    
    
  
  }

}
