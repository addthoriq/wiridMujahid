import React, { Component } from 'react';
import {
    StatusBar,
    Dimensions,
    Image,
    View,
    StyleSheet,
} from 'react-native';

export default class AwalScreen extends Component
{
    render() {
        return (
            <View style={s.c}>
                <StatusBar hidden/>
                <View style={{flex: 4, justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        source={require('../img/logo_utama.png')}
                        style={{width: 150, height: 150}}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        source={require('../img/Pita_web_logo-1.png')}
                        style={{width: '60%', height: '30%'}}
                    />
                </View>
            </View>
        );
    }
}

const s     = StyleSheet.create({
    c:{
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
