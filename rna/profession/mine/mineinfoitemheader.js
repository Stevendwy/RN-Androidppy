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

export default class MineInfoItemHeader extends Component {
	render() {
		let _clicked = this.props.clicked
		let _title = this.props.title
		
		return (
			<TouchableOpacity style={{backgroundColor: "#fff"}} onPress={_clicked}>
				<View style={styles.container}>
					<Text style={{fontSize: 12}}>头像</Text>
					<View style={styles.imageContainer}>
						<Image source={require("../../image/icon_message.png")} />
						<Image style={{transform:[{rotate: "90deg"}]}} source={require("../../image/icon_message.png")} />
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 64,
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
	imageContainer: {
		flexDirection: "row",
	},
})

MineInfoItemHeader.propTypes = {
//	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}
