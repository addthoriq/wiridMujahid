import React, { Component } from 'react';
import {BackHandler,StatusBar,Alert,Dimensions,FlatList,Clipboard,TouchableOpacity,View,ScrollView,StyleSheet,} from 'react-native';
import {Header,Title,Left,Right,Card,CardItem,Button,Body,Icon,Text} from 'native-base';
import DataDoa from '../data/DataDoa.json';
import OptionMenu from './layouts/OptionMenu';
import {Menu,MenuOptions,MenuOption,MenuTrigger,} from 'react-native-popup-menu';

export default class DetailDoa extends Component
{

    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    id      = this.props.navigation.getParam('pageId');
    index   = this.id - 1;
    data    = DataDoa[this.index];
    src     = `Download Aplikasi Doa Keselamatan untuk Kaum Muslimin di Playstore https://play.google.com/store/apps/details?id=com.doa.salamah`;
    text    = this.data.judul + '\n \n' + this.data.arab + '\n \n' + this.data.arti + '\n \n' + this.data.dalil + '\n \n' + this.src;
    carab   = this.data.arab;
    carti   = this.data.arti;
    cdalil  = this.data.dalil;

    cpAll = async (abc) => {
        const data    = DataDoa[parseInt(abc) - 1];
        const src     = `Download Aplikasi Doa Keselamatan untuk Kaum Muslimin di Playstore https://play.google.com/store/apps/details?id=com.doa.salamah`;
        const atext    = data.judul + '\n \n' + data.arab + '\n \n' + data.arti + '\n \n' + data.dalil + '\n \n' + src;
        await Clipboard.setString(atext);
        Alert.alert(
            'Salin Doa',
            'Doa berhasil di salin',
        );
    };

    cpArab = async (abc) => {
        const data    = DataDoa[parseInt(abc) - 1];
        const src     = `Download Aplikasi Doa Keselamatan untuk Kaum Muslimin di Playstore https://play.google.com/store/apps/details?id=com.doa.salamah`;
        const carab   = data.arab + '\n \n' + src;
        await Clipboard.setString(carab);
        Alert.alert(
            'Salin Arab',
            'Arab berhasil di salin',
        );
    }

    cpArti = async (abc) => {
        const data  = DataDoa[parseInt(abc) - 1];
        const src     = `Download Aplikasi Doa Keselamatan untuk Kaum Muslimin di Playstore https://play.google.com/store/apps/details?id=com.doa.salamah`;
        const carti = data.arti + '\n \n' + src;
        await Clipboard.setString(carti);
        Alert.alert(
            'Salin Terjemahan',
            'Terjemahan berhasil di salin'
        );
    }

    cpDalil = async (abc) => {
        const data  = DataDoa[parseInt(abc) - 1];
        const src     = `Download Aplikasi Doa Keselamatan untuk Kaum Muslimin di Playstore https://play.google.com/store/apps/details?id=com.doa.salamah`;
        const cdalil = data.dalil + '\n \n' + src;
        await Clipboard.setString(cdalil);
        Alert.alert(
            'Salin Dalil',
            'Dalil berhasil di salin'
        );
    }

    render() {
        const {navigation}  = this.props;
        const index         = parseInt(this.id) - 1;
      return (
          <FlatList
              data={DataDoa}
              keyExtractor={(doa, index)=>index.toString()}
              getItemLayout={(doa, index)=>(
                  {length: Dimensions.get('window').width, offset: Dimensions.get('window').width * index, index}
              )}
              initialScrollIndex={index}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              renderItem={(doa)=>(
                  <View style={{width: Dimensions.get('window').width, backgroundColor: '#e5e5e5'}}>
                      <StatusBar hidden={false}/>
                     <Header style={{backgroundColor: '#4caf50'}} androidStatusBarColor="green">
                         <Left>
                             <Button transparent onPress={()=>this.props.navigation.goBack()}>
                                 <Icon name="arrow-back" />
                             </Button>
                         </Left>
                         <Body>
                             <Title>Doa ke {doa.item.id}</Title>
                         </Body>
                         <Right>

                             {/* MENU DROPDOWN */}
                             <Menu>
                                <MenuTrigger style={{paddingHorizontal: 15, marginHorizontal: 0}}>
                                    <Icon name="more" style={{color: '#fff',fontWeight: 'bold',fontSize: 30}} />
                                </MenuTrigger>

                                {/* ISI DROPDOWN */}
                                <MenuOptions>
                                    <MenuOption onSelect={() => this.cpAll(doa.item.id)} >
                                        <Text style={s.pop} >Salin Doa</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={()=>this.cpArab(doa.item.id)} >
                                        <Text style={s.pop} >Salin Arab</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={()=>this.cpArti(doa.item.id)} >
                                        <Text style={s.pop} >Salin Terjemahan</Text>
                                    </MenuOption>
                                    <MenuOption onSelect={()=>this.cpDalil(doa.item.id)} >
                                        <Text style={s.pop} >Salin Dalil</Text>
                                    </MenuOption>
                                </MenuOptions>

                             </Menu>
                         </Right>
                     </Header>

                      <ScrollView>
                          <Card>
                              <CardItem header bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                                  <Text style={{textAlign: 'center', color: '#388e3c',fontFamily: 'SourceSansPro',}}>{doa.item.judul}</Text>
                              </CardItem>
                              <CardItem>
                                  <Body style={{justifyContent: 'center',alignItems: 'center',}}>
                                      <Text style={s.arb}>{doa.item.arab}</Text>
                                      <Text style={s.art}>{doa.item.arti}</Text>
                                  </Body>
                              </CardItem>
                              <CardItem footer bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                                  <Text style={{textAlign: 'center', color: '#388e3c',fontFamily: 'SourceSansPro',}}>{doa.item.dalil}</Text>
                              </CardItem>
                          </Card>
                      </ScrollView>
                  </View>
              )}
          />
      );
    }
}

const s = StyleSheet.create({
    arb:{
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 15,
        fontFamily: 'Scheherazade',
    },
    art:{
        fontStyle: 'italic',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'justify',
        fontFamily: 'SourceSansPro',
    },
    pop:{
        fontSize: 15,
        marginVertical: 7,
        fontFamily: 'SourceSansPro'
    },
});
