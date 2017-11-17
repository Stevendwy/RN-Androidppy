/**
 * PPY React Native App
 * Created By Zwei in 2017/02/15
 */

import React, {
  Component,
  PropTypes
} from 'react';

import {
  MapView,
  MapTypes,
  Geolocation
} from 'react-native-baidu-map';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  Linking,
} from 'react-native';

export default class BaiduMapDemo extends Component {
	constructor() {
		super()
		this.state = {
			center: {
				latitude: 22.542449,
                longitude: 113.981718,
			},
			markers: [],
		}
	}
	
	componentDidMount() {
		Geolocation.getCurrentPosition()
			.then(data => {
				this.setState({
					center: {
						latitude: data.latitude,
		                longitude: data.longitude,
					},
					markers: [
						{
							latitude: 30.255056,
							longitude: 120.174712,
							title: "地址0"
						},
						{
							latitude: 30.255565,
							longitude: 120.174712,
							title: "地址1"
						},
						{
							latitude: 30.255276,
							longitude: 120.174912,
							title: "地址2"
						},
						{
							latitude: 30.255286,
							longitude: 120.174412,
							title: "地址3"
						},
					]
				})
			})
	}

  render() {
  	let _center = this.state.center
  	let _markers = this.state.markers
  	
    return (
        <MapView 
          trafficEnabled={true}
          zoom={20}
          markers={_markers}
          style={styles.map}
          center={_center}
          onMarkerClick={(e) => {
			Linking.openURL("baidumap://map/navi?location=31.255286,121.174412")
				.catch((err)=>{  
					ToastAndroid.show("启动地图失败", ToastAndroid.SHORT)  
				})
          }}
        >
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
  }
});