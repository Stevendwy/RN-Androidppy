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
  Button,
} from 'react-native'

export default class VIPBuyItem extends Component {
	
	getTitle(index) {
		let _title
		switch(index) {
			case 0:
				_title = (
					<Text style={styles.title}>
						一个月
						<Text style={[styles.title, styles.titleInner]}>
							99
						</Text>
						元
					</Text>
				)
				break
			case 1:
				_title = (
					<Text style={styles.title}>
						年费
						<Text style={[styles.title, styles.titleInner]}>
							999
						</Text>
						元
					</Text>
				)
				break
			default:
				break
		}
		return _title
	}
	
	render() {
		let _clicked = this.props.clicked
		let _index = this.props.index
		
		let _title = this.getTitle(_index)
		
		return (
			<View style={{backgroundColor: "#fff"}} >
				<View style={styles.container}>
					{_title}
					<View style={styles.buttonContainer}>
						<Button style={styles.button}
								onPress={() => _clicked(_index)}
								title="购买"
								color="#C8372B"/>
					</View>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 40,
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 20,
		marginRight: 20,
	},
	title: {
		fontSize: 12,
	},
	titleInner: {
		color: "red",
	},
	buttonContainer: {
		width: 60,
	},
})

VIPBuyItem.propTypes = {
//	title: React.PropTypes.string.isRequired,
	clicked: React.PropTypes.func.isRequired,
	index: React.PropTypes.number.isRequired,
}
