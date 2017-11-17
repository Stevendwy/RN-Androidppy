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
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import NavigationBar from 'react-native-navbar'

export default class NavigatorBar extends Component {
	
	constructor(props) {
		super(props)
		this.title = props.title
		this.next = props.next || ""
	}
	
	render() {
		let _title = this.title
		let _next = this.next
		let _leftClicked = this.props.leftClicked
		let _rightClicked = this.props.rightClicked
		
		let leftButtonConfig = (
			<TouchableOpacity onPress={_leftClicked}>
				<View style={styles.leftButtonContainer}>
					<Image style={styles.leftButtonImage} source={require("./image/icon_arrowup.png")} />
				</View>
			</TouchableOpacity>
		)
		
		let titleConfig = {
			style: styles.titleConfig,
			title: _title,
		}
		
		let rightButtonConfig = {
			title: _next,
			style: styles.rightButtonConfig,
			tintColor: "#FFF",
			handler: _rightClicked,
		}
		
		let _hiddenLeft = this.props.hiddenLeft
		let _hiddenRight = this.props.hiddenRight
		
		return (
			<View>
				<StatusBar backgroundColor={backgroundColor} />
				<NavigationBar
					style={styles.navigatorbar}
					leftButton={_hiddenLeft ? <View /> : leftButtonConfig}
					title={titleConfig}
					rightButton={_hiddenRight ? <View /> : rightButtonConfig}
				/>
			</View>
		)
	}
}

NavigatorBar.propTypes = {
	title: React.PropTypes.string.isRequired
}

let backgroundColor = "#1C1D1F"

let styles = StyleSheet.create({
	navigatorbar: {
		backgroundColor: backgroundColor,
	},
	leftButtonContainer: {
		transform:[{rotate: "270deg"}],
		width: 44,
		justifyContent: "center",
	},
	leftButtonImage: {
		paddingRight: 10,
	},
	titleConfig: {
		color: "#FFF",
		fontSize: 18,
	},
	rightButtonConfig: {
		
	},
})
