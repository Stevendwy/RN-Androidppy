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
  Alert,
} from 'react-native'

export default class MessageCenterItem extends Component {
	render() {
		let _style = [styles.container]
		let _haveLine = this.props.haveLine
		if (_haveLine) _style.push(styles.bottomLine)
		
		let _clicked = this.props.clicked
		let _title = this.props.title
		
		return (
			<TouchableOpacity style={{backgroundColor: "#FFF",}} onPress={() => _clicked(_title)}>
				<View style={_style}>
					<View style={styles.containerTitle}>
						<Text style={styles.title}>您的订单已支付</Text>
						<Text style={styles.titleTime}>10-09 10:11</Text>
					</View>
					<View style={styles.containerContent}>
						<Text style={styles.content}>您购买的会员卡已经支付成功，请前往会员中心查看。</Text>
						<Text style={styles.content}>(点击查看详情)</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 64,
		marginLeft: 20,
		marginRight: 20,
		justifyContent: "center",
	},
	bottomLine: {
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
	},
	containerTitle: {
		height: 14,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	title: {
		fontSize: 12,
	},
	titleTime: {
		fontSize: 10,
	},
	containerContent: {
		
	},
	content: {
		fontSize: 10,
	},
})

MessageCenterItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	haveLine: React.PropTypes.bool.isRequired,
	clicked: React.PropTypes.func.isRequired,
}