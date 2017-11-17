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
import MineHeader from './mine/mineheader'
import MineList from './mine/minelist'
import MineInfo from './mine/mineinfo'

export default class Mine extends Component {
	headerClicked() {
		let _navigator = this.props.navigator
		_navigator.push({component: MineInfo})
	}
	
	render() {
		let _navigator = this.props.navigator
		let _userInfo = {name: "Zwei", account: "156", level: "普通会员", imgUrl: ""}
		let _headerClicked = this.headerClicked.bind(this)
		
		return (
			<View style={{flex: 1}}>
				<View style={{height: 44}}>
					<NavigatorBar title="个人" hiddenLeft={true} />
				</View>
				<View style={{flex: 1}}>
					<MineHeader info={_userInfo} clicked={_headerClicked} />
					<MineList navigator={_navigator} />
				</View>
			</View>
		)
	}
}
