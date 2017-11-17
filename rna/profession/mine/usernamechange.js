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
  TextInput,
  Button,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'

export default class UsernameChange extends Root {
	constructor(props) {
		super(props)
		this.state = {
			enableButton: false,
		}
		
		this.username = props.username
	}
	
	componentDidMount() {
		
	}
	
	resetUsername(text) {
		this.username = text
		this.setState({
			enableButton: text.length > 0
		})
	}
	
	render() {
		let _navigator = this.props.navigator
		let _resetUsername = this.resetUsername.bind(this)
		let _enableButton = this.state.enableButton
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="用户名" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.container}>
					<View style={styles.contentContainer}>
						<View style={styles.inputContainer}>
							<TextInput style={styles.input}
								underlineColorAndroid="transparent"
								placeholder="请输入用户名"
								placeholderTextColor="#999"
			         			onChangeText={text => _resetUsername(text)}
			         		/>
		          		</View>
		          		<View style={styles.textContainer}>
		          			<Text style={styles.text}>输入姓名 / 公司名称</Text>
		          		</View>
		          		<View style={styles.buttonContainer}>
		          			<Button style={styles.button}
		          				title="确认修改"
		          				color={_enableButton ? "red" : "grey"}
		          				onPress={() => {
		          					if(_enableButton) ToastAndroid.show("确认修改", ToastAndroid.SHORT)
		          				}}
		          			/>
		          		</View>
		          	</View>
				</View>
			</View>
		)
	}
}

//“../../image/icon_message.png")

let styles = StyleSheet.create({
	constainer: {
		flex: 1,
	},
	contentContainer: {
		marginLeft: 20,
		marginRight: 20,
	},
	inputContainer: {
		backgroundColor: "white",
		marginTop: 20,
		height: 40,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		borderRadius: 4,
	},
	input: {
		paddingLeft: 5,
		
	},
	textContainer: {
		height: 40,
	},
	text: {
		fontSize: 10,
	},
	buttonContainer: {
		
	},
	button: {
		
	},
})