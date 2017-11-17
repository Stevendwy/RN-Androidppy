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
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import CellNormal from '../../normal/cellnormal'
import CellSwitch from '../../normal/cellswitch'
import AboutUS from './aboutus'
import Root from '../../root'

export default class Setting extends Root {
	
	logout() {
		Alert.alert("提示", "确认退出账号？", [
			{text: "取消", onPress: () => {console.log("取消")}},
			{text: "确认退出", onPress: () => {console.log("确认退出")}}
		])
	}
	
	render() {
		let _logout = this.logout.bind(this)
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="设置" leftClicked={() => _navigator.pop()}/>
				</View>
				<CellSwitch title="音效与震动" clicked={() => {}} />
				<CellNormal title="关于零零汽" clicked={() => _navigator.push({component: AboutUS})} />
				<TouchableOpacity onPress={_logout}>
					<View style={styles.logout}>
						<Text style={{color: "red"}}>退出登录</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	logout: {
		marginTop: 20,
		height: 36,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	}
})