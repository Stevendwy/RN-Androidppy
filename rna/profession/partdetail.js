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
  ScrollView,
} from 'react-native'

import NavigatorBar from '../navigatorbar'
import Root from '../root'

export default class PartDetail extends Root {
	render() {
		let _navigator = this.props.navigator
		let _itemsHeader = (
			<View style={{flexDirection: "row",}}>
				<View style={styles.formTitleContainer}>
					<Text style={styles.formTitle}>供应商</Text>
				</View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>零件种类</Text></View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>发货地</Text></View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>陆运价</Text></View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>海运价</Text></View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>航运价</Text></View>
				<View style={styles.formTitleContainer}><Text style={styles.formTitle}>价格</Text></View>
			</View>
		)
		
		let _itemsFooter = (
			[1, 2, 3, 4, 5, 5, 5,5 ,5 ,5 ,5 ].map((item, index) => {
				return (
					<View key={index} style={{flexDirection: "row",}}>
						<View style={styles.formTitleContainer}>
							<Text style={styles.formTitle}>供应商</Text>
						</View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>零件种类</Text></View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>发货地</Text></View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>陆运价</Text></View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>海运价</Text></View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>航运价</Text></View>
						<View style={styles.formTitleContainer}><Text style={styles.formTitle}>价格</Text></View>
					</View>
				)
			})
		)
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="零件详情" leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={{flex: 1}}>
					<View style={{height: 200, backgroundColor: "blue", alignItems: "center", justifyContent: "center"}}>
						<Image source={require("../image/icon_message.png")} />
					</View>
					<View style={{height: 160}}>
						<View style={styles.containerDescription}>
							<Text style={styles.description}>零件号: N91129501</Text>
							<Text style={styles.description}>名称: 带内多齿头的_圆柱头密配螺栓(保时捷)</Text>
							<Text style={styles.description}>描述: 带内多齿头的_圆柱头密配螺栓</Text>
							<Text style={styles.description}>最小数量: 1</Text>
							<Text style={styles.description}>危险性: 无</Text>
							<Text style={styles.description}>重量: 1.5KG</Text>
							<Text style={styles.description}>价格列表:</Text>
						</View>
					</View>
					<ScrollView style={{height: 160}}
						horizontal={true}
					>
						<View style={styles.form}>
							{_itemsHeader}
							<ScrollView>
								{_itemsFooter}
							</ScrollView>
						</View>
					</ScrollView>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	containerDescription: {
		flex: 1,
		justifyContent: "space-around",
		backgroundColor: "white",
	},
	description: {
		fontSize: 10,
	},
	form: {
		width: 560,
		backgroundColor: "white",
	},
	formTitleContainer: {
		flex: 80,
		height: 36,
		justifyContent: "center",
		alignItems: "center",
	},
	formTitle: {
		fontSize: 10,
	},
	formList: {
		flex: 1,
	},
})
