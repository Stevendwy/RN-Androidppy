/**
 * PPY React Native App
 * Created By Zwei in 2017/02/09
 */

import React, {
} from 'react'

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  Switch,
} from 'react-native'

import Root from '../root'
import NavigatorBar from '../navigatorbar'
import FoundPassword from './foundpassword'
import Register from './register'

export default class Login extends Root {
	constructor(props) {
		super(props)
		this.username = ""
		this.password = ""
		this.state = {
			switchStatus: false,
			unshowPassword: true
		}
	}
	
	onButtonPress() {
		if(this.username.length > 0 && this.password.length > 0) Alert.alert(this.username + " and " + this.password)
		else {
			if(this.username.length < 1) ToastAndroid.show("请输入手机号或会员卡号", ToastAndroid.SHORT)
			else ToastAndroid.show("请输入密码", ToastAndroid.SHORT)
		}
	}
	
	resetAccount(content, type) {
		if(type == 0) this.username = content
		else this.password = content
	}
	
	switchPassword() {
		let _switchStatus = !this.state.switchStatus
		this.setState({
			switchStatus: _switchStatus,
			unshowPassword: !_switchStatus
		})
	}
	
	render() {
		let _switchPassword = this.switchPassword.bind(this)
		let _switchStatus = this.state.switchStatus
		let _unshowPassword = this.state.unshowPassword
		let _navigator = this.props.navigator
		let _onButtonPress = this.onButtonPress.bind(this)
		
		return (
			<View style={{flex: 1, backgroundColor: "#EFEFEF"}}>
				<NavigatorBar title="登录" leftClicked={() => _navigator.pop()}/>
				<View style={styles.loginContainer}>
					<View style={styles.viewContentBox}></View>
					<View style={styles.contentContainer}>
						<View style={styles.inputContainer}>
							<TextInput style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="手机号 / 会员卡号"
								placeholderTextColor="#999"
								autoFocus={true}
								keyboardType="numeric"
		          				onChangeText={text => this.resetAccount(text, 0)}/>
	          			</View>
	          			<View style={styles.inputContainer}>
							<TextInput style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="密码"
								placeholderTextColor="#999"
								type="password"
								secureTextEntry={_unshowPassword}
		          				onChangeText={text => this.resetAccount(text, 1)} />
		          			<Switch style={styles.switchPassword}
		          				onValueChange={_switchPassword}
		          				value={_switchStatus}></Switch>
	          			</View>
						<View style={styles.utilsContainer}>
							{
								["忘记了密码？", "立即注册"].map((item, index) => {
									return (
										<TouchableOpacity  key={index}
											onPress={() => {
												if(index == 0) _navigator.push({component: FoundPassword})
												else _navigator.push({component: Register})
											}}
										>
											<Text style={{color: "#666"}}>{item}</Text>
										</TouchableOpacity>
									)
								})
							}
						</View>
						<TouchableOpacity>
							<Button style={styles.button}
								onPress={_onButtonPress}
								title="登录"
								color="#C8372B"/>
						</TouchableOpacity>
					</View>
					<View style={styles.viewContentBox}></View>
				</View>
				<View style={{flex: 1}}></View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		marginTop: 30,
		flexDirection: "row",
	},
	contentContainer: {
		flex: 1
	},
	inputContainer: {
		flexDirection: "row",
	},
	switchPassword: {
		position: "absolute",
		bottom: 7,
		right:12,
	},
	viewContentBox: {
		width: 20,
	},
	input: {
		flex: 1,
		paddingLeft: 10,
		marginTop: 10,
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		borderRadius: 4,
		height: 40,
	},
	utilsContainer: {
		paddingTop: 10,
		marginBottom: 40,
		flexDirection: "row",
		justifyContent: "space-between"
	},
})