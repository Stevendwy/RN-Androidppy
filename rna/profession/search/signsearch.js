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
import SearchBar from './searchbar'

export default class SignSearch extends Root {
	render() {
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1}}>
				<View style={{height: 44}}>
					<SearchBar placeholder="请输入车牌号" leftClicked={() => _navigator.pop()} />
				</View>
				<View style={{flex: 1}}>
					
				</View>
			</View>
		)
	}
}
