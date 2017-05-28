import React from 'react'
import LikingList from '../../../components/List'
import {LoadMore}from '../../../components/LoadMore'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getListData}from '../../../fetch/home/home'
import {getSearchListData}from '../../../fetch/search/search'
import LocalStorage from '../../../js/localstorage'
const innitialState={
       data:[],
       hasMore:true,
       isLoadingMore:false,
       page:1  
}
const cityName=LocalStorage.getItem('cityName')
 export default class SearchList extends React.Component{
   constructor(...args){
     super(...args)
      this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
     this.state=innitialState
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
const page=this.state.page
const result=getSearchListData(cityName,this.props.type,this.props.keyword)
this.resultHandle(result)
   }
   componentDidMount(){  
      const result=getSearchListData(cityName,this.props.type,this.props.keyword)
      this.resultHandle(result)
   }
   componentDidUpdate(prevProps,prevState){
     const keyword=this.props.keyword
     const type=this.props.type
    // console.log(prevState,prevProps)
     if(keyword===prevProps.keyword&&type===prevProps.type){
       return 
     }else{
  this.setState(
       innitialState
     )
      //console.log(this.state)
      const result=getSearchListData(cityName,type,keyword)
      this.resultHandle(result)
     }
     //reset state as initial state 
   
   }

  render(){
    //console.log(this.props.keyword)
    return(<div>
        {
          this.state.data.length?<LikingList title={`搜索结果${this.props.keyword==null?'':'-'+this.props.keyword}`} data={this.state.data}/>:<div>加载中...</div>
        } 
        {
          this.state.hasMore?<LoadMore loadMoreFn={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore}/>:null
        }
</div>)
         
    
    
  
  }

}
