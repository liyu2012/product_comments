import React from 'react'
import ReactSwipe from 'react-swipe'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Link} from 'react-router-dom'
export default class Carousel extends React.Component{
constructor(){
  super()
   this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  this.state={
    i:0,
    data:[]
  }
}
componentDidMount(){
  this.setState({
    data:[
      [{link:'house',title:'房产'},{link:'photo',title:'照片'},{link:'music',title:'音乐'},{link:'book',title:'书籍'},{link:'wifi',title:'无线网'},{link:'video',title:'视频'},{link:'finatial',title:'金融'},{link:'book',title:'核产品'}]  ,
       [{link:'house',title:'房产'},{link:'photo',title:'照片'},{link:'music',title:'音乐'},{link:'book',title:'书籍'},{link:'wifi',title:'无线网'},{link:'video',title:'视频'},{link:'finatial',title:'金融'},{link:'book',title:'核产品'}] ,
       [{link:'house',title:'房产'},{link:'photo',title:'照片'},{link:'music',title:'音乐'},{link:'book',title:'书籍'},{link:'wifi',title:'无线网'},{link:'video',title:'视频'},{link:'finatial',title:'金融'},{link:'book',title:'核产品'}]  ,
      [{link:'house',title:'房产'},{link:'photo',title:'照片'},{link:'music',title:'音乐'},{link:'book',title:'书籍'},{link:'wifi',title:'无线网'},{link:'video',title:'视频'},{link:'finatial',title:'金融'},{link:'book',title:'核产品'}]  
    ]
  })
}
  render(){
    const opts={
      auto:2000,
      continuous:true,
      callback:index=>
this.setState({
  i:index
})

      
    }
   // console.log(this.state.data)
    const data=this.state.data
    return (
     <div >
  <ReactSwipe className="carousel" swipeOptions={opts}>

    <div><ul>
      <li><Link to={`/search/house`}><figure><i className="icon-home"></i><p>'房产'</p></figure></Link></li>          
      <li><Link to={`/search/photos`}><figure><i className="icon-image"></i><p>照片</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-headphones"></i><p>音乐</p></figure></Link></li>   
      <li><Link to={`/search/videos`}><figure><i className="icon-play"></i><p>视频</p></figure></Link></li>   
      <li><Link to={`/search/wifi`}><figure><i className="icon-connection"></i><p>无线网</p></figure></Link></li>   
      <li><Link to={`/search/books`}><figure><i className="icon-stack"></i><p>书籍</p></figure></Link></li>   
      <li><Link to={`/search/files`}><figure><i className="icon-folder"></i><p>文件</p></figure></Link></li>   
      <li><Link to={`/search/financial`}><figure><i className="icon-coin-dollar"></i><p>金融</p></figure></Link></li>   
      <li><Link to={`/search/nuclear`}><figure><i className="icon-lifebuoy"></i><p>核产品</p></figure></Link></li>   
      <li><Link to={`/search/things`}><figure><i className="icon-hammer"></i><p>五金</p></figure></Link></li>   
    </ul></div>
    <div><ul>
     <li><Link to={`/search/music`}><figure><i className="icon-home"></i><p>房产</p></figure></Link></li>          
      <li><Link to={`/search/music`}><figure><i className="icon-image"></i><p>照片</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-headphones"></i><p>音乐</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-play"></i><p>视频</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-connection"></i><p>无线网</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-stack"></i><p>书籍</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-folder"></i><p>文件</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-coin-dollar"></i><p>金融</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-lifebuoy"></i><p>核产品</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-hammer"></i><p>五金</p></figure></Link></li>   
    </ul></div>
    <div><ul>
     <li><Link to={`/search/music`}><figure><i className="icon-home"></i><p>房产</p></figure></Link></li>          
      <li><Link to={`/search/music`}><figure><i className="icon-image"></i><p>照片</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-headphones"></i><p>音乐</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-play"></i><p>视频</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-connection"></i><p>无线网</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-stack"></i><p>书籍</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-folder"></i><p>文件</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-coin-dollar"></i><p>金融</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-lifebuoy"></i><p>核产品</p></figure></Link></li>   
      <li><Link to={`/search/music`}><figure><i className="icon-hammer"></i><p>五金</p></figure></Link></li>   
 </ul></div>
  </ReactSwipe>
  <div className="indicator">
   <i className={this.state.i===0?'active':''}></i>
   <i className={this.state.i===1?'active':''}></i>
   <i className={this.state.i===2?'active':''}></i>
  </div>
     </div>
     
    )
  }
}
 
 
 
 
