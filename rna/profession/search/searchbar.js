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
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default class SearchBar extends Component {
	constructor(props){
		super(props)
		
	}
	render() {
		let _value = this.props.value
		let _placeholder = this.props.placeholder
		let _changeInput = this.props.changeInput
		let _leftClicked = this.props.leftClicked
		return (
			<View style={styles.searchBarContainer}>
				<StatusBar backgroundColor={backgroundColor} />
				<View style={styles.searchContainer}>
					<TouchableOpacity style={styles.imageBackContainer} onPress={_leftClicked}>
						<Image style={styles.imageBack} source={require("../../image/icon_arrowup.png")} />
					</TouchableOpacity>
					<View style={styles.inputContainer}>
						<TextInput style={styles.input}
							placeholder={_placeholder}
							value = {_value}
							underlineColorAndroid="transparent"
							autoFocus={true}
							onChangeText={(text)=>{_changeInput(text)}}
						/>
						<Image style={styles.searchImage} source={require("../../image/icon_message.png")} />
						<Image style={styles.cameraImage} source={require("../../image/icon_message.png")} />
					</View>
					<View style={{width: 15, backgroundColor: "red"}}>
						
					</View>
					<View style={{width: 20, height: 20, backgroundColor: "#ddd"}}>
						<Image source={require("../../image/icon_message.png")} />
					</View>
					<View style={{width: 20}}>
						
					</View>
				</View>
			</View>
		)
	}
}

let backgroundColor = "#1C1D1F"

let styles = StyleSheet.create({
	searchBarContainer: {
		flex: 1,
		backgroundColor: backgroundColor,
	},
	searchContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	imageBackContainer: {
		width: 40, 
		height: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	imageBack: {
		transform:[{rotate: "270deg"}],
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
	},
	input: {
		flex: 1,
		paddingLeft: 28,
		height: 28,
		paddingTop: 0,
		paddingBottom: 0,
		backgroundColor: "#fff",
		fontSize: 14,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#D8D8D8",
		borderRadius: 4,
	},
	searchImage: {
		position: "absolute",
		left: 8,
		top: 6,
		height: 16,
		width: 16,
	},
	cameraImage: {
		position: "absolute",
		right: 8,
		top: 6,
		height: 16,
		width: 20,
	},
	
})
