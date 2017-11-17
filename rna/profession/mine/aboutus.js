/**
 * PPY React Native App
 * Created By Zwei in 2017/02/10
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'

export default class AboutUS extends Root {
	render() {
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="关于"  leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.container}>
					<Image style={{marginTop: 40}} source={require("../../image/icon_message.png")} />
					<Text style={{marginBottom: 20, fontSize: 12}}>零零汽1.1.0</Text>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
})
