import React , {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ActivityIndicator, ProgressBarAndroid } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import * as HomeStyle from './styles/HomeStyle.js';
import WebData from './components/WebData.js';
import HomeScreen from './components/HomeScreen.js';
import CommercialVehicleScreen from './components/CommercialVehicleScreen.js';
import NexusScreen from './components/NexusScreen.js';
import AboutScreen from './components/AboutScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoadingScreen from './components/LoadingScreen.js';

export default class App extends React.Component {
	state={
		loaded: false
	}
	constructor(){
		super()
		
	}
	componentDidMount() {
		LoadingScreen.load(v => this.setState({loaded: true}));
	}
	render() {
		return this.state.loaded?<AppContainer />:<View style={styles.container}><Image source={require('./assets/icon.png')} style={{width: 100, height: 100}}></Image><ProgressBarAndroid styleAttr="Horizontal" color='#fff' /></View>;
	}
}


// Stack navigator 
// we can have different format of navigator bottom , top , stack or none button in return to //render those page
const AppNavigator = createStackNavigator({
	Home: {
		screen: createMaterialTopTabNavigator({
			PersonalVehicle: {
				screen: HomeScreen,
				navigationOptions: ({ navigation }) => ({
					title: 'Personal',
					tabBarIcon: ({ tintColor }) => (
						<Icon
							name="car"
							size={17}
							color={tintColor} />
					),
				}),
			},
			CommercialVehicle: {
				screen: CommercialVehicleScreen,
				navigationOptions: ({ navigation }) => ({
					title: 'Commercial',
					tabBarIcon: ({ tintColor }) => (
						<Icon
							name="truck"
							size={17}
							color={tintColor} />
					),
				}),
			},
			Nexus: {
				screen: NexusScreen,
				navigationOptions: ({ navigation }) => ({
					title: 'NEXUS',
					tabBarIcon: ({ tintColor }) => (
						<Icon
							name="barcode"
							size={17}
							color={tintColor} />
					),
				}),
			},
		},
		{
			tabBarOptions: {
				activeTintColor: '#fff',
				inactiveTintColor: '#e6e6e6',
				style: {
					backgroundColor: '#13b0b9',
				},
				indicatorStyle: {
					backgroundColor: '#fff',
				},
				showIcon: true,
			},
		}
		),
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'Home',
			headerStyle: {
				backgroundColor: '#12A3AA',
			},
			headerTitleStyle: {
				color: '#fff',
			},
			headerRight: <TouchableOpacity onPress={() => navigation.navigate('About')}>
			<Text style={{color: 'white', paddingRight: 20}}>About</Text>
			</TouchableOpacity>
		}),
	},
	About: {
		screen: AboutScreen,
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'About',
		})
	},
	Data: {
		screen: WebData,
		navigationOptions: ({ navigation }) => ({
			headerTitle: 'Test',
		})
	},
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#13b0b9',
		alignItems: 'center',
		justifyContent: 'center',
	},
	AboutContainer: {
		paddingTop: 30,
		flex: 4,
		backgroundColor: '#fff',
	},
	TextAlignCenter: {
		textAlign: "center",
	},
	TextPadding: {
		paddingLeft: 30,
		paddingRight: 30,
	},
	DeveloperInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 60,
		paddingLeft: 60,
	},
	head: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: 'center',
		paddingLeft: 30,
		paddingRight: 30,
	},
});