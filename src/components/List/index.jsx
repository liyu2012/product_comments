import React from 'react'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import  {Link} from  'react-router-dom'
 export default class ListC extends React.Component{
     constructor(...args){
     super(...args)
      this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
   }
  render(){
 const data=this.props.data
    return(
      <div className="list-component">
        <h3>{this.props.title}</h3>
       {
         data.map((item,index)=>{
           return <Link to={`/detail/${item.id}`} key={index} >
            <div className="item" >
             <div className="img"><img src={item.img}alt=""/></div>
             <div className="text">
               <h4>{item.title}</h4>
               <p className="desc">{item.desc}</p>
               <p className="price">￥{item.price}</p>
               <span className="dis">{item.dis}</span>
               <span className="selled">已售出：{item.selled}</span>
             </div>
             </div> 
             </Link>
              
              
         })
       }
</div>
    )
} 

}
