/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  Navigator,
} from 'react-native'

import Homepage from './rna/account/homepage'
import RootPage from './rna/profession/rootpage'
import PartDetail from './rna/profession/partdetail'
import VINSearch from './rna/profession/search/vinsearch'

class AndroidPPY extends Component {

	render() {
		return (
			<Navigator
		        initialRoute={{component: RootPage, index: 0}}
		        renderScene={(route, navigator) => {
		        		let Component = route.component
					return <route.component navigator={navigator} {...route.params} />;
				}}
			/>
		)
	}
}

var styles = StyleSheet.create({
	navgatorbar: {
		backgroundColor: '#1C1D1F',
	},
	navgatorbarText: {
		fontSize: 18,
		marginVertical: 10,
	},
	navgatorbarLeftButton: {
		paddingLeft: 10,
	},
	navgatorbarLeftButtonImage: {
		transform:[{rotate: "270deg"}],
	},
	navgatorbarTitle: {
		color: 'white',
//  		fontWeight: '500',
    		marginVertical: 9,
    		flex: 1,
    		backgroundColor: 'red',
	},
	navgatorbarRightButton: {
		paddingRight: 10
	},
	navgatorbarRightButtonText: {
		
	},
})

var NavigationBarRouteMapper = {
	LeftButton(route, navigator, index, navState) {
		if(index > 0) 
			return (
				<TouchableOpacity style={styles.navgatorbarLeftButton} onPress={() => {if (index > 0) navigator.pop()}}>
					<Image style={[styles.navgatorbarLeftButtonImage]} source={require("./rna/image/icon_arrowup.png")} />
				</TouchableOpacity>
			)
		else return null
	},
	RightButton(route, navigator, index, navState) {
		if(route.onPress)
			return (
				<TouchableOpacity onPress={() => {if (index > 0) route.onPress()}}>
					<Text style={[styles.navgatorbarText, styles.navgatorbarRightButtonText]}>
						{route.nextTitle ||"右键"}
					</Text>
				</TouchableOpacity>
			)
	},
	Title(route, navigator, index, navState) {
		return (
			<Text style={[styles.navgatorbarText, styles.navgatorbarTitle]}>{route.name}</Text>
		)
	},
}

AppRegistry.registerComponent('AndroidPPY', () => AndroidPPY);
