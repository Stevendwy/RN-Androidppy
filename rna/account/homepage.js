/**
 * PPY React Native App
 * Created By Zwei in 2017/02/09
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import Login from './login'
import Register from './register'

export default class Homepage extends Component {
	render() {
		let _navigator = this.props.navigator

		return (
			<View style={styles.background}>
				<TouchableOpacity style={styles.head} onPress={() => _navigator.push({component: Register})}>
		      		<Text style={styles.title}>注册</Text>
		      		<Image style={{transform:[{rotate: "180deg"}]}} source={require("../image/icon_arrowup.png")} />
		      	</TouchableOpacity>
		      	<View style={styles.body}>
		      		<Image style={styles.logo} source={require("../image/icon_logo.png")} />
		      		<Text style={styles.logoTitle}>零零汽</Text>
		      	</View>
		      	<TouchableOpacity style={styles.foot} onPress={() => _navigator.push({component: Login})}>
		      		<Image source={require("../image/icon_arrowup.png")} />
		      		<Text style={styles.title}>登录</Text>
		      	</TouchableOpacity>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	background: {
		backgroundColor: "#1C1D1F",
		flex: 1,
		flexDirection: "column",
	},
	title: {
		color: "white",
		fontSize: 18,
	},
	head: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	body: {
		flex: 5,
		justifyContent: "center",
		alignItems: 'center',
	},
	logo: {
	},
	logoTitle: {
		color: "white",
		fontSize: 36
	},
	foot: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: 'center',
	},
})
