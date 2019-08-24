import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import DetailDoa from './component/DetailDoa';
import AboutScreen from './component/AboutScreen';
import AwalScreen from './component/AwalScreen';

const a = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Awal:{
        screen: AwalScreen
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
    render() {
      return (
        <Ap />
      );
    }
}
