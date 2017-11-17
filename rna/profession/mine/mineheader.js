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

export default class MineHeader extends Component {
	render() {
		let _info = this.props.info
		let _clicked = this.props.clicked
		
		return (
			<TouchableOpacity style={styles.container} onPress={_clicked}>
				<View style={styles.imageContainer}>
					<Image source={require("../../image/icon_message.png")} />
				</View>
				<View style={styles.titlesContainer}>
					<Text style={[styles.title, styles.name]}>{_info.name}</Text>
					<Text style={[styles.title, styles.account]}>{_info.account}</Text>
					<Text style={[styles.title, styles.level]}>{_info.level}</Text>
				</View>
				<View style={styles.goContainer}>
					<Image style={styles.goImage} source={require("../../image/icon_arrowup.png")} />
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		backgroundColor: "#1C1D1F",
		flexDirection: "row",
		alignItems: "center",
	},
	imageContainer: {
		height: 88,
		width: 88,
		alignItems: "center",
		justifyContent: "center",
	},
	titlesContainer: {
		flex: 4,
		height: 60,
		justifyContent: "space-around",
	},
	title: {
		color: "white",
		fontSize: 12,
	},
	name: {},
	account: {
		fontSize: 10,
	},
	level: {
		fontSize: 10,
	},
	goContainer: {
		flex: 1,
		alignItems: "flex-end",
	},
	goImage: {
		transform:[{rotate: "90deg"}],
		marginRight: 10,
	},
})

MineHeader.propTypes = {
	info: React.PropTypes.object.isRequired,
}
