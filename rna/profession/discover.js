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

//import SearchBar from './searchbar'
import NavigatorBar from '../navigatorbar'
import DiscoverList from './discover/discoverlist'

export default class Discover extends Component {
	render() {
		let _navigator = this.props.navigator
		
		return (
			<View style={{flex: 1}}>
				<View style={{height: 44}}>
					<NavigatorBar title="发现" hiddenLeft={true} />
				</View>
				<View style={{flex: 1}}>
					<DiscoverList navigator={_navigator} />
				</View>
			</View>
		)
	}
}
