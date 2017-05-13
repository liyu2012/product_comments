import React from 'react'
export default class Header extends React.Component{
//组件渲染完毕
  componentDidMount(){
    console.log('has been rendered')
  }
  //组件更新完毕
  componentDidUpdate(){
    console.log('updated the component')
  }
  shouldComponentUpdate(){
    //更新通过钩子，如果返回true允许更新，如果false不允许更新
    console.log('优化')
  }
  //组件即将卸载
  componentWillUnmount(){
    console.log('will destoryed the component')
  }
  render(){
    return (
     <div>
       
     </div>
    )
  }
}