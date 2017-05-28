import React from 'react'
import {connect}from 'react-redux'
import {bindActionCreators}from 'redux'
import {withRouter} from 'react-router-dom'
import BuyandLlike from '../../../components/BuyandLlike'
import storeActionsFromFile from '../../../actions/store'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class Buy extends React.Component{
  constructor(){
    super()
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      isStore:false
    }
  }

buyHandle(){
const loginFlag=this.loginCheck()
if(!loginFlag)
return
//purchase

//navigate to homepage 
this.props.history.push('/user')
}

loginCheck(){
  const id=this.props.id
  const userinfo=this.props.userinfo
  if(!userinfo.username){
    //this.props.history.push('/login/detail/'+id)
    return false
  }
  return true

}
componentDidMount(){
  this.loginCheck()
  this.checkStoreState()
}

checkStoreState(){
const id=this.props.id
const store=this.props.store
store.some(item=>{
  if(item.id===id)
  {
    this.setState({
      isStore:true
    })
    return true
  }
})
}
likeHandle(){
  const loginFlag=this.loginCheck()
  if(!loginFlag)
return
const id=this.props.id
const storeActions=this.props.storeActions
if(this.state.isStore){
  storeActions.remove({id:id})
}
else{
  storeActions.add({id:id})
}
this.setState({
  isStore:!this.state.isStore
})

}
  render(){
    return(
      <div>
     <BuyandLlike likeHandle={this.likeHandle.bind(this)} buyHandle={this.buyHandle.bind(this)} isStore={this.state.isStore}/>
      </div>
    )
  }
} 
function mapActionsToprops(dispatch){
  return {
storeActions:bindActionCreators(storeActionsFromFile,dispatch)
  }
}

function mapStateToProps(state){
  return{
    userinfo:state.userinfo,
    store:state.store
  }
}
export default withRouter(connect(mapStateToProps,mapActionsToprops)(Buy))