import React from 'react'
import './style.less'
 export  class LoadMore extends React.Component{
   componentDidMount(){
        let timer
     function cb(){
      // console.log(window.screen.height,this.refs.loadmore.getBoundingClientRect().top)
       if(window.screen.height>=this.refs.loadmore.getBoundingClientRect().top){
         this.loadMore()
       }
     }
      window.addEventListener('scroll',()=>{
        if(this.props.isLoadingMore){
          return
        }
        clearTimeout(timer)
        timer=setTimeout(cb.bind(this),50)

      })
   }
   loadMore(){
this.props.loadMoreFn()
}
  render(){
    return(
      <div className="load-more" ref="loadmore">{
        this.props.isLoadingMore?
         <h1>加载中...</h1>:
 <h1 onClick={this.loadMore.bind(this)}>点击加载更多</h1>
        }

</div>
    )  
} 


}
