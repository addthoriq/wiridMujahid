import React, { Component } from 'react';
import {StatusBar,Text,Image,FlatList,TouchableOpacity,ScrollView,Dimensions,Animated,View,StyleSheet} from 'react-native';
import DaftarIsi from '../data/DaftarIsi.json';

HEADER_MAX_HEIGHT           = 150
HEADER_MIN_HEIGHT           = 50

export default class HomeScreen extends Component
{
    constructor(props){
        super(props);
        this.state={
            scrollY : new Animated.Value(0)
        }
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })
        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 150],
            outputRange: [0, 0, 1000],
            extrapolate: 'clamp'
        })
        const headerTitle = this.state.scrollY.interpolate({
            inputRange: [0,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 ,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + 30
            ],
            outputRange: [-50, -50, -50, 0],
            extrapolate: 'clamp'
        })
        const {navigation}  = this.props;
      return (
        <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
            <StatusBar backgroundColor="green"/>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#4caf50',
                    height: headerHeight,
                    zIndex: headerZindex,
                    elevation: headerZindex,
                }}>
                <Animated.View style={{position: 'absolute', bottom: 0}}>
                    <Text style={s.naps}>Wirid Keselamatan</Text>
                </Animated.View>
            </Animated.View>

            <ScrollView
                scrollEventThrottle={16}
                style={{flex: 1}}
                onScroll={Animated.event(
                    [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
                )}
            >
                <FlatList
                    style={s.vfl}
                    data={DaftarIsi}
                    keyExtractor={(daftar, index) => index.toString()}
                    renderItem={ (daftar) => (
                        <TouchableOpacity
                            style={s.fl}
                            onPress={()=>this.props.navigation.navigate('Detail',{itemId:daftar.item.id})}
                        >
                            <View style={s.id}>
                                <Text style={{fontSize: 20,textAlign: 'center',color: '#fff'}}>{daftar.item.id}</Text>
                            </View>
                            <View style={s.jdl}>
                                <Text style={{textAlign: 'justify',fontSize: 16,}}>{daftar.item.judul}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
      );
    }
}

const s = StyleSheet.create({
    naps:{
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    vfl:{
        marginTop: 155,
        marginHorizontal: 5,
    },
    fl:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 5,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    id:{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4caf50',
        width: 30,
        height: 30,
        borderRadius: 10,
    },
    jdl:{
        margin: 5,
        width: '80%',
    }
});
