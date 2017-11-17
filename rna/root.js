/**
 * PPY React Native App
 * Created By Zwei in 2017/02/09
 */

import React, {
  Component,
} from 'react'

import {
  BackAndroid,
} from 'react-native'

export default class Root extends Component {
	constructor() {
		super()
		this._onBackAndroid = this.onBackAndroid.bind(this)
	}
	
	componentWillMount() {
		BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid)
	}
	
	componentWillUnmount() {
		BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid)
	}
	
	onBackAndroid() {
		let {navigator} = this.props
		let routers = navigator.getCurrentRoutes()
		if (routers.length > 1) {  
			navigator.pop()
			return true 
		}
		return false
	}
}
