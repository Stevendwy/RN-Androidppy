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
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  Switch,
} from 'react-native'

import Root from '../root'
import NavigatorBar from '../navigatorbar'
import VerificationCode from './verificationcode'

export default class FoundPassword extends Root {
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
//		if(this.username.length > 0 && this.password.length > 0) Alert.alert(this.username + " and " + this.password)
//		else {
//			if(this.username.length < 1) ToastAndroid.show("请输入手机号或会员卡号", ToastAndroid.SHORT)
//			else ToastAndroid.show("请输入密码", ToastAndroid.SHORT)
//		}
		this.props.navigator.push({component: VerificationCode, params: {phonenumber: this.username}})
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
		
		return (
			<View style={{flex: 1, backgroundColor: "#EFEFEF"}}>
				<NavigatorBar title="找回密码" leftClicked={() => _navigator.pop()}/>
				<View style={styles.loginContainer}>
					<View style={styles.viewContentBox}></View>
					<View style={styles.contentContainer}>
						<View style={styles.inputContainer}>
							<TextInput style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="手机号"
								placeholderTextColor="#999"
								autoFocus={true}
								keyboardType="numeric"
		          				onChangeText={text => this.resetAccount(text, 0)}/>
	          			</View>
	          			<View style={styles.inputContainer}>
							<TextInput style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="设置新密码"
								placeholderTextColor="#999"
								type="password"
								secureTextEntry={_unshowPassword}
		          				onChangeText={text => this.resetAccount(text, 1)} />
		          			<Switch style={styles.switchPassword}
		          				onValueChange={_switchPassword}
		          				value={_switchStatus}></Switch>
	          			</View>
	          			<View style={{marginTop: 40}}>
							<TouchableOpacity>
								<Button style={styles.button}
									onPress={this.onButtonPress.bind(this)}
									title="下一步"
									color="#C8372B"/>
							</TouchableOpacity>
						</View>
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