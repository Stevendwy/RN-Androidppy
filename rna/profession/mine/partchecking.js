/**
 * PPY React Native App
 * Created By Zwei in 2017/02/13
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  Image,
  View,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'
import PartCheckItem from './partcheckitem'

export default class PartChecking extends Root {
	constructor() {
		super()
		this.state = {
			titles: []
		}
	}
	
	componentDidMount() {
		this.setState({
			titles: ["零件上传", "正在审核", "审核通过", "零件上传", "正在审核", "审核通过", "零件上传", "正在审核", "审核通过"]
		})
	}
	
	getItems() {
		let _titles = this.state.titles
		
		let _items = _titles.map((item, index) => {
			return (
				<PartCheckItem key={index} title={item} style="checking" />
			)
		})
		return _items
	}
	
	render() {
		let _navigator = this.props.navigator
		let _items = this.getItems()
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="零件图审核中" leftClicked={() => _navigator.pop()}/>
				</View>
				<ScrollView style={{flex: 1}}>
					{_items}
				</ScrollView>
			</View>
		)
	}
}