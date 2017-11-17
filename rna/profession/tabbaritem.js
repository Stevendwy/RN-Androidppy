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
  TouchableWithoutFeedback,
} from 'react-native'

export default class TabbarItem extends Component {
	
	render() {
		let _title = this.props.title
		let _link
		let _index = this.props.index
		switch(_index) {
			case 0: _link = require("../image/icon_message.png")
				break
			case 1: _link = require("../image/icon_message.png")
				break
			case 2: _link = require("../image/icon_message.png")
				break
			default: break
		}
		
		let _itemClicked = this.props.itemClicked
		let _statusStyle = [styles.container]
		let _selected = this.props.selected
		if(_selected) _statusStyle.push(styles.containerSelected)
		
		return (
			<TouchableWithoutFeedback style={{flex:1}} onPress={() => {_itemClicked(_index)}}>
				<View style={_statusStyle}>
					<Image style={styles.image} source={_link}/>
					<Text style={styles.title}>{_title}</Text>
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

TabbarItem.propTypes = {
	index: React.PropTypes.number.isRequired,
	title: React.PropTypes.string.isRequired,
	selected: React.PropTypes.bool.isRequired,
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
		opacity: 0.7,
	},
	containerSelected: {
		opacity: 1,
	},
	image: {
		height: 16,
		width: 20,
	},
	title: {
		fontSize: 10,
		color: "#1C1D1F",
	},
})
