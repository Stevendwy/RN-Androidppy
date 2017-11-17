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

export default class ChangeWithPassword extends Root {
constructor(props) {
		super(props)
		this.oldPwd = ""
		this.newPwd = ""
		this.phone = "157****5790"
		this.state = {
			switchStatus: false,
			unshowPassword: true,
			switchOpen1:false,
			switchOpen2:false,
			buttonValue:"重新获取"
		}
	}
	
	onButtonPress() {
		if(this.oldPwd.length > 0 && this.newPwd.length > 0) Alert.alert("修改密码成功")
		else {
			if(this.oldPwd.length < 1) ToastAndroid.show("请输入验证码或密码", ToastAndroid.SHORT)
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
	reAgain(){
		if(this.state.buttonValue=="重新获取"){
			this.setState({
                 buttonValue:"已发送(30s)"
            })
			var i=29;
			this.timer = setInterval(()=>{
				if(i==0){
					this.setState({
                     	buttonValue:"重新获取"
                     })
					clearInterval(this.timer);
                     this.timer = undefined;
                     return
				}
				this.setState({
					buttonValue:"已发送("+i+"s)"
				})
				i--
			},1000)
		}
	}
	render() {
		let _switchPassword = this.switchPassword.bind(this)
		let _switchStatus = this.state.switchStatus
		let _unshowPassword = this.state.unshowPassword
		let _navigator = this.props.navigator
		let _phonenumber = this.props.phonenumber
		let _phone = this.phone
		let _buttonValue = this.state.buttonValue
		let _isRed = (this.state.buttonValue=="重新获取"?"#C8372B":"#ddd")
		return (
			<View style={{flex: 1, backgroundColor: "#EFEFEF"}}>
				<NavigatorBar title="修改密码" leftClicked={() => _navigator.pop()}/>
				<View style={styles.loginContainer}>
					<View style={styles.viewContentBox}></View>
					<View style={styles.contentContainer}>
						<View>
							<Text style={styles.topTitle}>
								验证码已发送到手机{_phone}
							</Text>
						</View>
						<View style={styles.inputContainer}>
							<TextInput 
								keyboardType='numeric'
								style={styles.input} 
								placeholder="验证码" 
								underlineColorAndroid="transparent"
								onChangeText={ (text) => this.oldPwd=text }
                      			value={this.state.oldPwd}
							/>
							<TouchableOpacity style={styles.littlebutton}>
								<Text style={[styles.buttonChange,{backgroundColor:_isRed}]} onPress={this.reAgain.bind(this)}>
									{_buttonValue}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.inputContainer}>
							<TextInput  
								secureTextEntry={!this.state.switchOpen2} 
								keyboardType='email-address'
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
									title="确定"
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
		marginTop: 5,
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
	topTitle:{
		fontSize:8
	},
	littlebutton:{
		position: "absolute",
		top: 10,
		right:8,
		width:70,
		height:30,
	},
	buttonChange:{
		fontSize:10,
		width:70,
		height:25,
		backgroundColor:"#C8372B",
		color:"#fff",
		borderRadius:4,
		textAlign:"center",
		textAlignVertical:"center"

	},
	
})