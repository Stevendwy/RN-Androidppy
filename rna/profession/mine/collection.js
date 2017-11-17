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
  InteractionManager,
} from 'react-native'

import NavigatorBar from '../../navigatorbar'
import Root from '../../root'
import CollectionItem from './collectionitem'

export default class Collection extends Root {
	constructor() {
		super()
		this.state = {
			list: [],
			selectedIndex: -1, 
		}
	}
	
	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.setState({
				list: ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2"],
			})
		})
	}
	
	itemClicked(title) {
		console.log(title)
	}
	
	getItems() {
		let _itemClicked = this.itemClicked.bind(this)
		let _items
		let _list = this.state.list
		let _navigator = this.props.navigator
		
		_items = _list.map((item, index) => {
			return (
				<CollectionItem key={index}
					navigator={_navigator}
					title="testing"
					haveLine={index == _list.length - 1 ? false : true}
				/>
			)
		})
		return _items
	}
	
	render() {
		let _navigator = this.props.navigator
		let _items = this.getItems()
		
		return (
			<View style={{flex: 1, backgroundColor: "#D8D8D8"}}>
				<View style={{height: 44}}>
					<NavigatorBar title="收藏夹" leftClicked={() => _navigator.pop()}/>
				</View>
			<ScrollView>
				<View style={{flex: 1}}>
					{_items}
				</View>
			</ScrollView>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	logout: {
		marginTop: 20,
		height: 36,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	}
})