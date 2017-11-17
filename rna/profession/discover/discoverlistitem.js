/**
 * PPY React Native App
 * Created By Zwei in 2017/02/10
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
} from 'react-native'

export default class DiscoverListItem extends Component {
	
	getImage(index) {
		let _link
		switch(index) {
			case 0: _link = require("../../image/icon_message.png")
				break
			case 1: _link = require("../../image/icon_message.png")
				break
			case 2: _link = require("../../image/icon_message.png")
				break
			default: break
		}
		return _link
	}
	
	render() {
		let _title = this.props.title
		let _index = this.props.index
		let _link = this.getImage(_index)
		let _clicked = this.props.clicked
		let _style = [styles.itemContainer]
		let _haveLine = this.props.haveLine
		if (_haveLine) _style.push(styles.bottomLine)
		return (
			<TouchableOpacity style={_style} onPress={() => _clicked(_title)}>
				<View style={styles.imageContainer}>
					<Image source={_link} />
				</View>
				<Text style={styles.title}>{_title}</Text>
				<View style={styles.imageContainer}></View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	itemContainer: {
		marginLeft: 20,
		marginRight: 20,
		height: 88,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	bottomLine: {
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
	},
	imageContainer: {
		width: 60,
		height: 88,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 12,
	}
})

DiscoverListItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	index: React.PropTypes.number.isRequired,
	haveLine: React.PropTypes.bool.isRequired,
	clicked: React.PropTypes.func.isRequired,
}
