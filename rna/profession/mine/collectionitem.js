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

import PartDetail from '../partdetail'

export default class CollectionItem extends Component {
	
	clicked(title) {
		let _navigator = this.props.navigator
		_navigator.push({component: PartDetail})
	}
	
	render() {
		let _style = [styles.container]
		let _haveLine = this.props.haveLine
		if (_haveLine) _style.push(styles.bottomLine)
		
		let _clicked = this.clicked.bind(this)
		let _title = this.props.title
		
		return (
			<View>
				<View style={_style}>
					<View style={styles.containerTime}>
						<Text style={{fontSize: 10}}>2016-10-31</Text>
					</View>
					<TouchableOpacity style={styles.containerContent} onPress={() => _clicked(_title)}>
						<View>
							<Image style={styles.imageDetail} source={require("../../image/icon_message.png")} />
						</View>
						<View style={styles.containerInfo}>
							<Text style={styles.infoTitle}>发动机-11 4356 传动机构</Text>
							<Text style={styles.infoSub}>品牌: 宾利</Text>
							<Text style={styles.infoSub}>车型: Bentayga</Text>
							<Text style={styles.infoSub}>年份: 2001年</Text>
							<Text style={styles.infoSub}>车架号: /</Text>
						</View>
						<View style={{flex: 1}}>
							<View style={{height: 20}}></View>
							<View style={{flex: 1, alignItems: "center"}}>
								<Image style={styles.imageStar} source={require("../../image/icon_message.png")} />
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		height: 170,
		justifyContent: "center",
	},
	bottomLine: {
		borderBottomWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
	},
	containerTime: {
		height: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	containerContent: {
		flex: 1,
		backgroundColor: "#FFF",
		flexDirection: "row",
	},
	imageDetail: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		width: 120,
	},
	containerInfo: {
		justifyContent: "space-around",
	},
	infoTitle: {
		fontSize:12,
	},
	infoSub: {
		fontSize:10,
	},
	imageStar: {
		
	},
})

CollectionItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	haveLine: React.PropTypes.bool.isRequired,
//	clicked: React.PropTypes.func.isRequired,
}