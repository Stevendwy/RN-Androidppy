/**
 * PPY React Native App
 * Created By Zwei in 2017/02/10
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
} from 'react-native'

export default class CellSwitch extends Component {
	constructor() {
		super()
		this.state = {
			switchStatus: false,
		}
	}
	
	switchClicked() {
		let _switchStatus = !this.state.switchStatus
		this.setState({
			switchStatus: _switchStatus,
		})
	}
	
	render() {
		let _clicked = this.props.clicked
		let _title = this.props.title
		let _switchPassword = this.switchClicked.bind(this)
		let _switchStatus = this.state.switchStatus
		
		return (
			<TouchableOpacity style={{backgroundColor: "#fff"}} onPress={_clicked}>
				<View style={styles.container}>
					<Text style={{fontSize: 12}}>{_title}</Text>
					<Switch onValueChange={_switchPassword}
		          			value={_switchStatus}
		          	/>
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 44,
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
})

CellSwitch.propTypes = {
	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
}
