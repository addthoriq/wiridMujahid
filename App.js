import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import DetailDoa from './component/DetailDoa';
import AboutScreen from './component/AboutScreen';
import SplashScreen from 'react-native-splash-screen';

const a = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    About:{
        screen: AboutScreen
    },
    Detail: {
        screen: DetailDoa
    },
},{
    defaultNavigationOptions:{
        header: null
    }
});
const Ap = createAppContainer(a);
export default class App extends Component
{
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    render() {
      return (
        <Ap />
      );
    }
}
