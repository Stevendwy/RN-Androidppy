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

export default class MineListItem extends Component {
	render() {
		let _title = this.props.title
		let _style = [styles.container]
		let _haveLine = this.props.haveLine
		if (_haveLine) _style.push(styles.bottomLine)
		
		let _clicked = this.props.clicked
		
		return (
			<TouchableOpacity style={{backgroundColor: "#FFF",}} onPress={() => _clicked(_title)}>
				<View style={_style}>
					<View style={styles.imageContainer}>
						<Image source={require("../../image/icon_message.png")} />
					</View>
					<View style={styles.titleContainer}>
						<Text style={[styles.title, styles.name]}>{_title}</Text>
					</View>
					<View style={styles.goContainer}></View>
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 44,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	imageContainer: {
		height: 44,
		width: 44,
		alignItems: "center",
		justifyContent: "center",
	},
	titlesContainer: {
		flex: 1,
		
	},
	bottomLine: {
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
	},
})

MineListItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	haveLine: React.PropTypes.bool.isRequired,
	clicked: React.PropTypes.func.isRequired,
}