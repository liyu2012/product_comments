import React from 'react'
import LikingList from '../../../components/List'
import {LoadMore}from '../../../components/LoadMore'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData}from '../../../fetch/home/home'
 export default class List extends React.Component{
   constructor(...args){
     super(...args)
      this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
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
const result=getListData(cityName,page)
this.resultHandle(result)
   }
   componentDidMount(){  
      const result=getListData(this.props.cityName,1)
      this.resultHandle(result)
   }

  render(){
    return(<div>
        {
          this.state.data.length?<LikingList title="猜你喜欢" data={this.state.data}/>:<div>加载中...</div>
        } 
        {
          this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>:null
        }
</div>)
         
    
    
  
  }

}
