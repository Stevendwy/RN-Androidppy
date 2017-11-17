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

import Root from '../../root'
import NavigatorBar from '../../navigatorbar'

export default class ChangeWithPhone extends Root {
	constructor(props) {
		super(props)
		this.oldPwd = ""
		this.newPwd = ""
		this.state = {
			switchStatus: false,
			unshowPassword: true,
			switchOpen1:false,
			switchOpen2:false
		}
	}
	
	onButtonPress() {
		if(this.oldPwd.length > 0 && this.newPwd.length > 0) Alert.alert("修改密码成功")
		else {
			if(this.oldPwd.length < 1) ToastAndroid.show("请输入旧密码或新密码", ToastAndroid.SHORT)
			else ToastAndroid.show("请输入密码", ToastAndroid.SHORT)
		}
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
		let _phonenumber = this.props.phonenumber
		
		return (
			<View style={{flex: 1, backgroundColor: "#EFEFEF"}}>
				<NavigatorBar title="修改密码" leftClicked={() => _navigator.pop()}/>
				<View style={styles.loginContainer}>
					<View style={styles.viewContentBox}></View>
					<View style={styles.contentContainer}>
						<View style={styles.inputContainer}>
							<TextInput 
								secureTextEntry={!this.state.switchOpen1} 
								style={styles.input} 
								placeholder="旧密码" 
								underlineColorAndroid="transparent"
								onChangeText={ (text) => this.oldPwd=text }
                      			value={this.state.oldPwd}
							/>
							<Switch
                					style={styles.switchBox}
               					 //动态改变value
                					value={this.state.switchOpen1}
               					 //当切换开关室回调此方法
                					onValueChange={(value)=>{this.setState({switchOpen1:!this.state.switchOpen1})}}
            					/>
						</View>
						<View style={styles.inputContainer}>
							<TextInput  
								secureTextEntry={!this.state.switchOpen2} 
								style={styles.input} placeholder="新密码" 
								underlineColorAndroid="transparent"
								onChangeText={ (text) => this.newPwd=text }
                      			value={this.state.newPwd}
							/>
							<Switch
                					style={styles.switchBox}
               					 //动态改变value
                					value={this.state.switchOpen2}
               					 //当切换开关室回调此方法
                					onValueChange={(value)=>{this.setState({switchOpen2:!this.state.switchOpen2})}}
            					/>
						
						</View>
	          			<View style={{marginTop: 20}}>
							<TouchableOpacity>
								<Button style={styles.button}
									onPress={this.onButtonPress.bind(this)}
									title="完成"
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
		alignItems: "center",
//		justifyContent: "flex-end",
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
		marginTop: 1,
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		borderRadius: 4,
		height: 40,
	},
	verificationCodeButtonContainer: {
		marginTop: 13,
		height: 40,
		width: 100,
	},
	verificationCodeButton: {
		backgroundColor: "#C8372B",
		borderRadius: 4,
	},
	utilsContainer: {
		paddingTop: 10,
		marginBottom: 40,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	switchBox:{
		position: "absolute",
		top: 9,
		right:0,
	},
})