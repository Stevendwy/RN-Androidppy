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

export default class MineInfoItemUsername extends Component {
	render() {
		let _clicked = this.props.clicked
		let _title = this.props.title
		
		return (
			<TouchableOpacity style={{backgroundColor: "#fff"}} onPress={_clicked}>
				<View style={styles.container}>
					<Text style={{fontSize: 12}}>用户名</Text>
					<View style={styles.infoContainer}>
						<Text style={{fontSize: 12}}>用户名xxx</Text>
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
	infoContainer: {
		flexDirection: "row",
	},
})

MineInfoItemUsername.propTypes = {
//	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}
