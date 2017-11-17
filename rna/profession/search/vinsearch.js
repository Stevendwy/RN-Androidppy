/**
 * PPY React Native App
 * Created By Zwei in 2017/02/14
 */

import React, {
  Component,
} from 'react'

import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import Root from '../../root'
import SearchBar from './searchbar'

export default class VINSearch extends Root {
	constructor(props){
		super(props)
		this.state = {
			historyArray: ["WP1AA2954FLB15850", "WP0CA2984CS710607", "WPOAA2978DL013340", "WPOAA2978DL013380"],
			chooseItemValue: ""
		}
	}
	chooseHistory(title){
		this.setState({
			chooseItemValue:title
		})
		
	}
	changeInput(text){
		this.setState({
			chooseItemValue:text
		})
	}
	deleteItem(index){
		
	}
	getItems(){
		let _historyArray = this.state.historyArray;
		let _items;
		let _chooseHistory = this.chooseHistory
		
		_items = _historyArray.map((_title, index) => {
			return (
				<View key={index} style={styles.historyItemContainer}>
					<TouchableOpacity style={styles.historyItem} onPress={_chooseHistory.bind(this,_title)}>
						<View style={styles.imageHistoryLogo}>
							<Image source={require("../../image/icon_message.png")} />
							<Text style={{marginLeft:8}}>
								{_title}
							</Text>
						</View>
						<View style={styles.imageClearLogo} onPress={this.deleteItem.bind(this,index)}>
							<Image source={require("../../image/icon_message.png")} />
						</View>
					</TouchableOpacity>
				</View>
			)
		})
		return _items
	}
	render() {
		let _items = this.getItems();
		let _value = this.state.chooseItemValue
		let _navigator = this.props.navigator
		
		return (
			<View style={styles.viewMain}>
				<View style={{height: 44}}>
					<SearchBar placeholder="汽车品牌" value={_value}
						changeInput={this.changeInput.bind(this)}
						leftClicked={() => _navigator.pop()}
					/>
				</View>
				<View style={styles.viewTop}>
					<View style={{flex: 1}}>
						{_items}
					</View>
				</View>
				<View style={styles.viewBottom}>
					<TouchableOpacity>
						<View style={styles.viewToRow}>
							<Image source={require("../../image/icon_message.png")} />
							<Text style={{marginLeft:8}} onPress={this.deleteItem.bind(this)}>
								清除查询历史
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	viewMain:{
		flex:1,
		flexDirection:'column',
		backgroundColor: "white",
	},
	imageHistoryLogo: {
		flexDirection:'row',
	},
	historyItemContainer:{
		backgroundColor:"#fff"
	},
	historyItem:{
		marginLeft:10,
		marginRight:10,
		paddingTop:5,
		paddingBottom:5,
		flexDirection:'row',
		justifyContent: "space-between",
		borderBottomWidth:1,
		alignItems:"center"

	},
	viewTop:{
		height:200,
		flex:1
	},
	viewBottom:{
		flex:0,
		height:30,
		backgroundColor:"#fff",		
	},
	viewToRow:{
		flexDirection:'row',
		alignItems:"center",
		paddingLeft:10,
		marginTop:4,
		
	}
})
