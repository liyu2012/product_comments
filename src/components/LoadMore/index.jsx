import React from 'react'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 export  class LoadMore extends React.Component{
    constructor(...args){
     super(...args)
      this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
   }
   componentDidMount(){
        let timer
     function cb(){
     if(this.refs.loadmore){
          if(window.screen.height>=this.refs.loadmore.getBoundingClientRect().top){
         this.loadMore()
       }
     }
   
     }
      window.addEventListener('scroll',()=>{
        if(this.props.isLoadingMore){
          return
        }
        clearTimeout(timer)
        timer=setTimeout(cb.bind(this),100)

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
