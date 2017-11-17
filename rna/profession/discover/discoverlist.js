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
  TextInput,
  TouchableOpacity,
} from 'react-native'

import DiscoverListItem from './discoverlistitem'
import Near from './near'

export default class DiscoverList extends Component {
	
	constructor() {
		super()
		this.state = {
			titles: ["附近加油站", "附近停车场", "附近洗车场"],
		}
	}
	
	itemClicked(title) {
		let _navigator = this.props.navigator
		switch(title) {
			case "附近加油站": _navigator.push({component: Near, params: {navigatorTitle: "地图-加油站"}})
				break
			case "附近停车场": _navigator.push({component: Near, params: {navigatorTitle: "地图-停车场"}})
				break
			case "附近洗车场": _navigator.push({component: Near, params: {navigatorTitle: "地图-洗车场"}})
				break
		}
	}
	
	render() {
		let _titles = this.state.titles
		let _itemClicked = this.itemClicked.bind(this)
		
		let _discoverListItems = _titles.map((item, index) => {
			return (
				<DiscoverListItem key={index}
					clicked={_itemClicked}
					title={item}
					index={index}
					haveLine={index == _titles.length - 1 ? false : true}
				/>
			)
		})
		return (
			<View style={{backgroundColor: "#FFF",}}>
				{_discoverListItems}
			</View>
		)
	}
}

let styles = StyleSheet.create({
})