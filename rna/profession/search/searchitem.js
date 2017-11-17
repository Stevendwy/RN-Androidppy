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

export default class SearchItem extends Component {
	
	getImage(code) {
		let _link
		switch(code) {
			case "00": _link = require("../../image/icon_message.png")
				break
			case "01": _link = require("../../image/icon_message.png")
				break
			case "10": _link = require("../../image/icon_message.png")
				break
			default: break
		}
		return _link
	}
	
	render() {
		let _title = this.props.title
		let _code = this.props.code
		let _link = this.getImage(_code)
		
		return (
			<TouchableOpacity style={styles.container} onPress={() => this.props.clicked(_code)}>
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
		fontSize: 14,
		color: "#666",
	},
})

SearchItem.propTypes = {
	code: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}