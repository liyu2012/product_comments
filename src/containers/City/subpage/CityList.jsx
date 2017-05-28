import React from 'react'
import CityList from '../../../components/CityList'
import PureRenderMixin from 'react-addons-pure-render-mixin'
 class CityL extends React.Component{
    constructor(...args){
    super(...args)
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
  
 this.state={
   cities:[]
 }
  }
  componentDidMount(){
//mock fetch cities data
  this.setState({
      cities:['西安','银川','南宁','三亚','海口','呼和浩特','拉萨','成都','重庆','贵阳','兰州','乌鲁木齐','昆明','长沙','南昌','北京','广州','上海','深圳','南京','武汉','厦门','青岛','沈阳','合肥','大连','郑州','苏州','杭州','西宁','长春','哈尔滨']
    })
  }
  render(){
    return(
      <div>
          <CityList data={this.state.cities} changeCity={this.props.changeCity.bind(this)}/>
      </div>
    )
  }
} 
export default CityL