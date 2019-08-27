import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import DetailDoa from './component/DetailDoa2';
import AboutScreen from './component/AboutScreen';
import SplashScreen from 'react-native-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';

const a = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailDoa
    },
    About:{
        screen: AboutScreen
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
          <MenuProvider>
            <Ap />
          </MenuProvider>
      );
    }
}
