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
  TextInput,
  TouchableOpacity,
} from 'react-native'

import NavigatorBar from '../navigatorbar'
import SearchItem from './search/searchitem'
import VINSearch from './search/vinsearch'
import BrandSearch from './search/brandsearch'
import PartSearch from './search/partsearch'
import SignSearch from './search/signsearch'

export default class Search extends Component {
	constructor() {
		super()
		this.state = {
			titlesArray: [["车架号查询", "车型查询"], ["零件号查询"]],
		}
	}
	
	itemClicked(code) {
		console.log(code)
		let _navigator = this.props.navigator
		switch(code) {
			case "00": _navigator.push({component: VINSearch})
				break
			case "01": _navigator.push({component: BrandSearch})
				break
			case "10": _navigator.push({component: PartSearch})
				break
			default: break
		}
		
		if(0) {//非会员检测
			Alert.alert("购买会员", "购买会员卡立即查询，更多品牌等你解锁", [
				{text: "取消", onPress: () => {console.log("取消")}},
				{text: "前去购买", onPress: () => {console.log("前去购买")}, tintColor: "red"}
			])
		}
	}
	
	render() {
		let _itemClicked = this.itemClicked.bind(this)
		let _titlesArray = this.state.titlesArray
		let _searchItems = _titlesArray.map((titles, index1) => {
			return (
				<View key={index1} style={styles.searchItemsContainer}>
					{
						titles.map((item, index2) => {
							return (
								<SearchItem key={index2} title={item} code={index1.toString() + index2} clicked={_itemClicked} />
							)
						})
					}
				</View>
			)
		})
		return (
			<View style={{flex: 1}}>
				<View style={{height: 44, marginBottom: 20}}>
					<NavigatorBar title="查询" hiddenLeft={true} />
				</View>
				{_searchItems}
			</View>
		)
	}
}

let styles = StyleSheet.create({
	searchItemsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginLeft: 60,
		marginRight: 60,
	}
})
