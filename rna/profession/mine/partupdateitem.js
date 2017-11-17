/**
 * PPY React Native App
 * Created By Zwei in 2017/02/09
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

export default class PartUpdateItem extends Component {
	
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
	
	render() {
		
		let _title = this.props.title
		let _link = this.getImage(_title)
		
		return (
			<TouchableOpacity style={styles.container} onPress={() => this.props.clicked(_title)}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={_link} />
				</View>
				<Text style={styles.title}>{_title}</Text>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 120,
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
		height: 88,
		width: 88,
		backgroundColor: "#FFF",
		borderRadius: 44,
		marginBottom: 10,
	},
	image: {
	},
	title: {
		fontSize: 12,
		color: "#666",
	},
})

PartUpdateItem.propTypes = {
//	index: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}