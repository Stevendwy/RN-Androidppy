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
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import MineListItem from './minelistitem'
import Setting from './setting'
import MessageCenter from './messagecenter'
import Collection from './collection'
import PartUpdate from './partupdate'
import VIPCardManage from './vipcardmanage'
import VIPBuy from './vipbuy'

export default class MineList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			titleArray: [["会员卡购买", "会员卡管理", "零件图上传", "收藏夹", "邀请好友"], ["消息中心"], ["设置"]],
		}
	}
	
	itemClicked(title) {
		let _navigator = this.props.navigator
		switch(title) {
			case "设置": _navigator.push({component: Setting})
				break
			case "消息中心": _navigator.push({component: MessageCenter})
				break
			case "邀请好友": ToastAndroid.show("暂未开通", ToastAndroid.SHORT)
				break
			case "收藏夹": _navigator.push({component: Collection})
				break
			case "零件图上传": _navigator.push({component: PartUpdate})
				break
			case "会员卡管理": _navigator.push({component: VIPCardManage})
				break
			case "会员卡购买": _navigator.push({component: VIPBuy})
				break
		}
	}
	
	getItems() {
		let _itemClicked = this.itemClicked.bind(this)
		let _items
		let _titleArray = this.state.titleArray
		_items = _titleArray.map((titles, index1) => {
			return (
				<View key={index1} style={{marginTop: 10}}>
				{
					titles.map((title, index2) => {
						return (
							<MineListItem key={index2}
								title={title}
								haveLine={index2 == titles.length - 1 ? false : true}
								clicked={_itemClicked}
								/>
						)
					})
				}
				</View>
			)
		})
		return _items
	}
	
	render() {
		let _items = this.getItems()
		
		return (
			<View style={styles.container}>
				{_items}
			</View>
		)
	}
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})