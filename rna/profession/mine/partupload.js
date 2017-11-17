/**
 * PPY React Native App
 * Created By Zwei in 2017/02/17
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'

export default class NewPage extends Root {
	constructor() {
		super()
		this.state = {
			titles: [],
			brands: [],
		}
	}
	
	componentDidMount() {
		this.setState({
			placeholders: ["请选择品牌", "请输入零件号", "请输入零件名称"]
		})
	}
	
	render() {
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="完善零件信息" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={styles.container}>
					<View>
						<TouchableOpacity>
							<TextInput />
						</TouchableOpacity>
						<View>
							<TextInput />
						</View>
						<View>
							<TextInput />
						</View>
					</View>
				</View>
			</View>
		)
	}
}

//“../../image/icon_message.png")

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})