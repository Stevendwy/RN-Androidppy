/**
 * PPY React Native App
 * Created By Zwei in 2017/02/09
 */

import React, {
  Component,
} from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  ToastAndroid,
} from 'react-native'

import Discover from './discover'
import Mine from './mine'
import Search from './search'
import TabbarItem from './tabbaritem'

export default class RootPage extends Component {
	constructor() {
		super()
		this.titles = [
			{
				title: "查询",
			},
			{
				title:"发现",
			},
			{
				title:"我的",
			}
		]
		
		this.state = {
			selectedIndex: 1
		}
	}
	
	itemClicked(index) {
		this.setState({
			selectedIndex: index
		})
	}
	
	render() {
		let _content
		let _navigator = this.props.navigator
		let _selectedIndex = this.state.selectedIndex
		switch(_selectedIndex) {
			case 0: _content = <Search navigator={_navigator} />
				break
			case 1: _content = <Discover navigator={_navigator} />
				break
			case 2: _content = <Mine navigator={_navigator} />
				break
			default:
			break
		}
		
		let _itemClicked = this.itemClicked.bind(this)
		let _tabbarItems = this.titles.map((item, index) => {
			let _selected = false
			if(index == _selectedIndex) _selected = true
			return (
				<TabbarItem key={index} title={item.title} index={index} itemClicked={_itemClicked} selected={_selected} />
			)
		})
		return (
			<View style={{flex: 1}}>
				<View style={styles.contentContainer}>
					{_content}
				</View>
				<View style={styles.tabbar}>
					{_tabbarItems}
				</View>
			</View>
		)
	}
}

let styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		height: 44,
		backgroundColor: "#D8D8D8"
	},
	tabbar: {
		height: 44,
		backgroundColor: "#FFF",
		flexDirection: "row",
	}
})