import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import RouteMap from '../rooter/rooterMap'
import Perf from 'react-addons-perf'
console.log(__DEV__)
if(__DEV__){
  window.Perf=Perf
}
render(<RouteMap/>,document.getElementById('example'))
