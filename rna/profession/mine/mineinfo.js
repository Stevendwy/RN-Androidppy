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
  Alert,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'
import MineInfoItemHeader from './mineinfoitemheader'
import ImagePicker from 'react-native-image-picker'
import MineInfoItemUsername from './mineinfoitemusername'
import UsernameChange from './usernamechange'
import MineInfoItemPhone from './mineinfoitemphone'
import MineInfoItemWeChat from './mineinfoitemwechat'
import MineInfoItemPassword from './mineinfoitempassword'
import ChangeWithPhone from './changewithphone'
import ChangeWithPassword from './changewithpassword'

export default class MineInfo extends Root {
	constructor() {
		super()
		this.state = {
			titles: []
		}
		this.options = {
			title:'请选择',
//  cancelButtonTitle:'取消',
//  takePhotoButtonTitle:'拍照',
//  chooseFromLibraryButtonTitle:'选择相册',
//  quality:0.75,
//  allowsEditing:true,
//  noData:false,
		    storageOptions: {
		        skipBackup: true,
		        path:'images'
		    }
		}
	}
	
	componentDidMount() {
		this.setState({
			titles: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
			avatarSource: {}
		})
	}
	
	handleHeaderImage(type) {
		if(type == "camera") {
			ImagePicker.launchCamera(this.options, (response)  => {
//				console.log(response.uri)
			})
		}else {
			ImagePicker.launchImageLibrary(this.options, (response)  => {
//				console.log(response.uri)
			})
		}
	}
	
	headerClicked() {
		let _handleHeaderImage = this.handleHeaderImage.bind(this)
		
		Alert.alert("", "请选择获取方式", [
				{text: "取消", onPress: () => {console.log("取消")}},
				{text: "使用手机相机拍照", onPress: () => _handleHeaderImage("camera")},
				{text: "从手机相册选择", onPress: () => _handleHeaderImage("library")},
			])
		return
		
		ImagePicker.showImagePicker(this.options, (response) => {
			console.log('Response = ', response)
			if (response.didCancel) {
				console.log('User cancelled image picker')
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error)
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton)
			}
			else {
				console.log('else')
				let source = { uri: response.uri }
				this.setState({
					avatarSource: source
				})
			}
		})
	}
	
	usernameClicked() {
		let _navigator = this.props.navigator
		_navigator.push({component: UsernameChange})
	}
	
	phoneClicked() {
		ToastAndroid.show("点击手机", ToastAndroid.SHORT)
	}
	
	weChatClicked() {
		ToastAndroid.show("点击微信", ToastAndroid.SHORT)
	}
	
	passwordClicked() {
		let _navigator = this.props.navigator
//		ToastAndroid.show("点击登录密码", ToastAndroid.SHORT)
		Alert.alert("", "请选择修改方式", [
				{text: "取消", onPress: () => {console.log("取消")}},
				{text: "通过旧密码方式", onPress: () => _navigator.push({component: ChangeWithPassword})},
				{text: "通过手机验证", onPress: () => _navigator.push({component: ChangeWithPhone})},
			])
	}
	
	callback() {
		ToastAndroid.show("callback", ToastAndroid.SHORT)
	}
	
	render() {
		let _navigator = this.props.navigator
		let _headerClicked = this.headerClicked.bind(this)
		let _usernameClicked = this.usernameClicked.bind(this)
		let _phoneClicked = this.phoneClicked.bind(this)
		let _weChatClicked = this.weChatClicked.bind(this)
		let _passwordClicked = this.passwordClicked.bind(this)
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="账号信息" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.container}>
					<MineInfoItemHeader clicked={_headerClicked} />
					<MineInfoItemUsername clicked={_usernameClicked} />
					
					<View style={styles.textContainer}>
						<Text style={styles.text}>账号绑定</Text>
					</View>
					
					<MineInfoItemPhone clicked={_phoneClicked} />
					<MineInfoItemWeChat clicked={_weChatClicked} />
					
					<View style={styles.textContainer}>
						<Text style={styles.text}>安全设置</Text>
					</View>
					
					<MineInfoItemPassword clicked={_passwordClicked} />
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
	textContainer: {
		height: 15,
		justifyContent: "center",
	},
	text: {
		marginLeft: 10,
		fontSize: 8,
	}
})