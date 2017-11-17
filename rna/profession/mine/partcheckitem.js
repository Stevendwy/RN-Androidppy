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
  TouchableOpacity,
  Alert,
} from 'react-native'

export default class PartCheckItem extends Component {
	constructor(props) {
		super(props)
		this.style = props.style
	}
	
	getImage(title) {
		let _link
		switch(title) {
			case "零件上传": _link = require("../../image/icon_message.png")
				break
			case "正在审核": _link = require("../../image/icon_message.png")
				break
			case "审核通过": _link = require("../../image/icon_message.png")
				break
			default: break
		}
		return _link
	}
	
	getInfo() {
		let _info
		if(this.style == "result") {
			_info = (
				<View style={styles.infoContainer}>
					<Text style={styles.info}>名    称: 齿轮</Text>
					<Text style={styles.info}>零件号: 7487383</Text>
					<Text style={styles.info}>品    牌: 保时捷</Text>
					<Text style={styles.info}>上传时间: 2016-09-09</Text>
					<Text style={styles.info}>审核通过: 2016-09-11</Text>
				</View>
			)
		}else {
			_info = (
				<View style={styles.infoContainer}>
					<Text style={styles.info}>名    称: 齿轮</Text>
					<Text style={styles.info}>零件号: 7487383</Text>
					<Text style={styles.info}>品    牌: 保时捷</Text>
					<Text style={styles.info}>上传时间: 2016-09-09</Text>
				</View>
			)
		}
		return _info
	}
	
	render() {
		let _title = this.props.title
		let _info = this.getInfo()
		
		return (
			<TouchableOpacity style={styles.container} onPress={() => this.props.clicked(_title)}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={require("../../image/icon_message.png")} />
				</View>
				{_info}
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flexDirection: "row",
		marginBottom: 5,
		alignItems: "center",
	},
	image: {
		height: 88,
		width: 88,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10,
		marginRight: 10,
	},
	info: {
		fontSize: 12,
	},
})

PartCheckItem.propTypes = {
//	index: React.PropTypes.number.isRequired,
//	title: React.PropTypes.string.isRequired,
//	clicked: React.PropTypes.func.isRequired,
}