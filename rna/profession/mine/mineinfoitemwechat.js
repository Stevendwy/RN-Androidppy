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

export default class MineInfoItemWeChat extends Component {
	render() {
		let _clicked = this.props.clicked
		let _title = this.props.title
		
		return (
			<TouchableOpacity style={{backgroundColor: "#fff"}} onPress={_clicked}>
				<View style={styles.container}>
					<View style={styles.titleContainer}>
						<Image source={require("../../image/icon_message.png")} />
						<Text style={{fontSize: 12}}>微信</Text>
					</View>
					<View style={styles.infoContainer}>
						<Text style={{fontSize: 12}}>未绑定</Text>
						<Image style={{transform:[{rotate: "90deg"}]}} source={require("../../image/icon_message.png")} />
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
	titleContainer: {
		flexDirection: "row",
	},
	infoContainer: {
		flexDirection: "row",
	},
})

MineInfoItemWeChat.propTypes = {
//	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}
