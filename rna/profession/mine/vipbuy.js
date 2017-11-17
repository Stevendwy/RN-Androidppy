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
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'
import VIPBuyItem from './vipbuyitem'

export default class VIPBuy extends Root {
	constructor() {
		super()
		this.state = {
			titles: []
		}
	}
	
	componentDidMount() {
		this.setState({
			titles: ["一个月99元", "年费999元"]
		})
	}
	
	itemClicked(index) {
		switch(index) {
			case 0: ToastAndroid.show("购买月卡", ToastAndroid.SHORT)
				break
			case 1: ToastAndroid.show("购买年卡", ToastAndroid.SHORT)
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
				<VIPBuyItem key={index} index={index} clicked={_itemClicked} />
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
					<NavigatorBar title="会员卡购买" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.container}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>会员套餐</Text>
					</View>
					{_items}
				</View>
			</View>
		)
	}
}

//“../../image/icon_message.png")

styles = StyleSheet.create({
	constainer: {
		flex: 1,
	},
	titleContainer: {
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		marginBottom: 10,
	},
	title: {
		fontSize: 12,
	},
})