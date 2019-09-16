import React, { Component } from 'react';
import {StatusBar,Text,Image,FlatList,TouchableOpacity,ScrollView,Dimensions,Animated,View,StyleSheet} from 'react-native';
import {Button, Icon} from 'native-base';
import AboutScreen from './AboutScreen';
import DaftarIsi from '../data/DaftarIsi.json';

HEADER_MAX_HEIGHT           = 250
HEADER_MIN_HEIGHT           = 100

export default class HomeScreen extends Component
{
    constructor(props){
        super(props);
        this.state={
            scrollY : new Animated.Value(0),
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
          <ScrollView
              horizontal={true} pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}

              // untuk identifikasi index view
              ref={(ask) => {this.scrollView = ask}}
            >

                {/* HALAMAN DAFTAR ISI */}
                <View style={{flex: 1, backgroundColor: '#e5e5e5',width: Dimensions.get('window').width}}>
                    <StatusBar backgroundColor="green" hidden/>

                    {/* HEADER NYA SCROLLABLE */}
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: '#4caf50',
                            height: headerHeight,
                            zIndex: 100,
                            elevation: headerZindex,
                        }}>

                          {/* BACKGROUND HEADER */}
                            <Image
                                style={{flex: 1,width: null,alignSelf: 'stretch',opacity: 0.3}}
                                source={require('../assets/img/masjidil_haram.jpg')}
                            />

                            {/* TOMBOL TRIGGER KE HALAMAN ABOUT */}
                            <Animated.View style={{flex: 1,position: 'absolute', right: 0,}}>
                                <TouchableOpacity style={{margin: 5, padding: 5}} onPress={()=>this.scrollView.scrollToEnd({ animated: true })}>
                                    <Icon name="info-outline" type={'MaterialIcons'} style={{fontSize: 30,color: '#fff'}}/>
                                </TouchableOpacity>
                            </Animated.View>

                            {/* JUDUL APLIKASI */}
                            <Animated.View style={{flex: 1,position: 'absolute', bottom: 0}}>
                                <Text style={s.nap}>دعاء سلامة للمسلمين</Text>
                                <Text style={s.naps}>Doa Keselamatan untuk Kaum Muslimin</Text>
                            </Animated.View>

                    </Animated.View>

                    {/* TAMPILAN BACKGROUND */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        style={{flex: 1}}
                        onScroll={Animated.event(
                            [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
                        )}
                    >
                        {/* DAFTAR ISI NYA */}
                        <FlatList
                            style={s.vfl}
                            data={DaftarIsi}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(daftar, index) => index.toString()}
                            renderItem={ (daftar) => (

                                // {/* TOMBOL DAFTAR ISI */}
                                <TouchableOpacity
                                    style={s.fl}
                                    onPress={()=>this.props.navigation.navigate('Detail',{pageId:daftar.item.id})}
                                >
                                    {/* NOMOR */}
                                    <View style={s.id}>
                                        <Text style={{fontFamily: 'SourceSansPro',fontSize: 20,textAlign: 'center',color: '#fff'}}>{daftar.item.id}</Text>
                                    </View>

                                    {/* JUDUL */}
                                    <View style={s.jdl}>
                                        <Text style={{textAlign: 'justify',fontFamily: 'SourceSansPro',fontSize: 16,}}>{daftar.item.judul}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </ScrollView>
                </View>

              {/* HALAMAN ABOUT */}
              <View style={{flex: 1, backgroundColor: '#e5e5e5',width: Dimensions.get('window').width}}>
                  <StatusBar backgroundColor="green" hidden/>
                  <AboutScreen tombol={()=>this.scrollView.scrollTo({animated: true},0)} />
              </View>
          </ScrollView>
      );
    }
}

const s = StyleSheet.create({
    nap:{
        marginLeft: 10,
        marginBottom: 0,
        fontFamily: 'SourceSansPro',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
    },
    naps:{
        marginLeft: 10,
        marginBottom: 15,
        fontFamily: 'SourceSansPro_bold',
        fontSize: 18,
        color: '#fff',
    },
    vfl:{
        marginTop: 253,
    },
    fl:{
        width: Dimensions.get('window').width,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
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
