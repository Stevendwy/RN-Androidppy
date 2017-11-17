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

import Root from '../../root'
import NavigatorBar from '../../navigatorbar'

export default class BrandSearch extends Root {
	render() {
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1}}>
				<View style={{height: 44}}>
					<NavigatorBar title="品牌车型查询"  leftClicked={() => _navigator.pop()}/>
				</View>
				<View style={{flex: 1}}>
					
				</View>
			</View>
		)
	}
}
