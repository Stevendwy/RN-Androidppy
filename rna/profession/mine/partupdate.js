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
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'
import PartUpdataItem from './partupdateitem'
import PartChecking from './partchecking'
import PartCheckResult from './partcheckresult'

export default class PartUpdate extends Root {
	constructor() {
		super()
		this.state = {
			titles: []
		}
	}
	
	componentDidMount() {
		this.setState({
			titles: ["零件上传", "正在审核", "审核通过"]
		})
	}
	
	itemClicked(title) {
		let _navigator = this.props.navigator
		
		switch(title) {
			case "零件上传": ToastAndroid.show("零件上传", ToastAndroid.SHORT)
				break
			case "正在审核": _navigator.push({component: PartChecking})
				break
			case "审核通过": _navigator.push({component: PartCheckResult})
				break
			default: 
				break
		}
	}
	
	getItems() {
		let _titles = this.state.titles
		let _itemClicked = this.itemClicked.bind(this)
		let _items = _titles.map((item, index) => {
			return (
				<PartUpdataItem key={index} title={item} clicked={_itemClicked} />
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
					<NavigatorBar title="查询" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={{flex: 1, flexDirection: "row", justifyContent: "space-around", paddingTop: 40}}>
					{_items}
				</View>
			</View>
		)
	}
}