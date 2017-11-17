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

export default class VINCardManage extends Root {
	constructor() {
		super()
		this.state = {
			titles: []
		}
	}
	
	componentDidMount() {
		this.setState({
			titles: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
		})
	}
	
	getItems() {
		
	}
	
	render() {
		let _navigator = this.props.navigator
		let _items = this.getItems()
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="会员卡管理" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require("../../image/icon_message.png")} />
				</View>
			</View>
		)
	}
}

styles = StyleSheet.create({
	imageContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		
	}
})
