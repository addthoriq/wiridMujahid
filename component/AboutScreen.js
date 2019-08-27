import React, { Component } from 'react';
import {StatusBar,Image,FlatList,TouchableOpacity,ScrollView,Dimensions,Animated,View,StyleSheet} from 'react-native';
import {List,ListItem,Text,Left,Body,Icon} from 'native-base';
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
          <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <View style={{flex: 1, backgroundColor: '#e5e5e5',width: Dimensions.get('window').width}}>
                  <StatusBar backgroundColor="green" hidden/>
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
                          <Image
                              style={{flex: 1,width: null,alignSelf: 'stretch',opacity: 0.2}}
                              source={require('../assets/img/smp.jpg')}
                          />
                          <Animated.View style={{fontFamily: 'SourceSansPro',flex: 1,position: 'absolute', bottom: 0}}>
                              <Text style={s.nap}>Tentang Aplikasi</Text>
                          </Animated.View>

                  </Animated.View>

                  <ScrollView
                      scrollEventThrottle={16}
                      style={{flex: 1}}
                      onScroll={Animated.event(
                          [{nativeEvent:{contentOffset: {y: this.state.scrollY}}}]
                      )}
                  >
                      <View style={s.fl}>
                          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                              <Image
                                  source={require('../assets/img/logo_utama.png')}
                                  style={{width: 125, height: 125}}
                              />
                          </View>
                          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                              <Text style={{fontFamily: 'SourceSansPro_bold',fontSize: 16, fontWeight: 'bold', marginTop: 20}}>
                                  Doa Keselamatan untuk kaum Muslimin
                              </Text>
                              <Text style={{fontFamily: 'SourceSansPro',fontSize: 14, textAlign: 'center',marginBottom: 20}}>
                                  By: Muhammad Rizqy Ath-Thaariq{"\n"}Santri Umar asal Samarinda, DKI Kaltim
                              </Text>
                          </View>
                          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                              <Text style={{textAlign: 'justify',fontFamily: 'SourceSansPro',fontSize: 14, marginTop: 20}}>
                                  Aplikasi ini bersumber pada kitab "Adzkarud Jihad wad Du'a 'Alal Kuffar Ash-Shahihah" karya Wa'il Ad-Dasuqy dan sudah ada versi Terjemahan bahasa Indonesia dengan judul "Wirid Mujahid: Handbook Mujahid di segala cuaca" diterbitkan oleh Penerbit Jazera pada tahun 2009.
                              </Text>
                              <Text style={s.prg}>
                                  Project ini merupakan hasil pembelajaran mobile application dari santri jurusan programming di Pondok Informatika Al-Madinah. Dikerjakan dengan basis React Native selama 1 bulan ½.
                              </Text>
                              <Text style={s.prg}>
                                  Teks Arab dan Terjemahan disadur dari berbagai macam sumber.
                              </Text>
                              <Text style={s.lst}>
                                  https://quran.kemenag.go.id/index.php{"\n"}
                                  https://tafsirweb.com/pilih-surat{"\n"}
                                  http://www.voa-islam.com/read/doa/2013/03/27/23761/doa-saat-berhadapan-dengan-musuh/;#sthash.pVDS4dZI.dkCIJK6E.dpbs{"\n"}
                                  https://github.com/AbidKhairyAK/App-Dzikir{"\n"}
                                  https://hamariweb.com/islam/hadith/
                              </Text>
                          </View>
                          <Text style={s.ttl}>
                              Developers
                          </Text>
                          <List style={{marginBottom: 20}}>
                              <ListItem icon>
                                  <Left>
                                      <Icon name="arrow-dropright" style={s.ico}/>
                                  </Left>
                                  <Body>
                                      <Text style={{fontFamily: 'SourceSansPro',fontSize: 14,}}>Muhammad Rizqy Ath-Thaariq</Text>
                                  </Body>
                              </ListItem>
                          </List>
                          <Text style={s.ttl}>
                              Pondok Informatika Al-Madinah
                          </Text>
                          <List style={{marginBottom: 10}}>
                              <ListItem icon>
                                  <Left>
                                      <Icon name="mail" style={s.ico}/>
                                  </Left>
                                  <Body>
                                      <Text style={{fontFamily: 'SourceSansPro',fontSize: 14,}}>pondokitalmadinah@gmail.com</Text>
                                  </Body>
                              </ListItem>
                              <ListItem icon>
                                  <Left>
                                      <Icon name="logo-wordpress" style={s.ico}/>
                                  </Left>
                                  <Body>
                                      <Text style={{fontFamily: 'SourceSansPro',fontSize: 14,}}>http://pondokinformatika.com</Text>
                                  </Body>
                              </ListItem>
                              <ListItem icon>
                                  <Left>
                                      <Icon name="call" style={s.ico}/>
                                  </Left>
                                  <Body>
                                      <Text style={{fontFamily: 'SourceSansPro',fontSize: 13,}}>0857 2524 9265 / 0822 5718 2656 (Irhamullah)</Text>
                                  </Body>
                              </ListItem>
                              <ListItem icon>
                                  <Left>
                                      <Icon name="home" style={s.ico}/>
                                  </Left>
                                  <Body>
                                      <Text style={{fontFamily: 'SourceSansPro',fontSize: 12,}}>Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
                                  </Body>
                              </ListItem>
                          </List>
                      </View>
                  </ScrollView>
              </View>
          </ScrollView>
      );
    }
}

const s = StyleSheet.create({
    nap:{
        marginLeft: 10,
        marginBottom: 15,
        fontFamily: 'SourceSansPro',fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
    },
    fl:{
        marginTop: 253,
        width: Dimensions.get('window').width,
        padding: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
    },
    ico:{
        fontSize: 20
    },
    prg:{
        textAlign: 'justify',
        fontFamily: 'SourceSansPro',
        fontSize: 14,
        marginTop: 10
    },
    lst:{
        marginTop: 2,
        marginBottom: 20,
        color: '#2196f3',
        textDecorationLine: 'underline',
        fontFamily: 'SourceSansPro',fontSize: 14,
    },
    ttl:{
        marginTop: 20,
        fontFamily: 'SourceSansPro',fontSize: 14,
        fontWeight: 'bold',
    },
    nme:{
        justifyContent: 'center',
        alignItems: 'center'
    },
});
