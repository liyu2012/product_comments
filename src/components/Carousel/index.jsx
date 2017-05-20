 
import React from 'react'
import ReactSwipe from 'react-swipe'
import './style.less'
import {Link} from 'react-router-dom'
export default class Carousel extends React.Component{
constructor(){
  super()
  this.state={
    i:0
  }
}
  render(){
    const opt={
      auto:2000,
      continuous:true,
      callback:(index)=>{
this.setState({
  i:index
})

      }
    }
    return (
     <div >
  <ReactSwipe className="carousel" swipeOptions={opt}>
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
 
 
 
 
