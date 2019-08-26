import React, { Component } from 'react';
import {StatusBar,Alert,Dimensions,FlatList,Clipboard,TouchableOpacity,View,ScrollView,StyleSheet,} from 'react-native';
import {Header,Title,Left,Right,Card,CardItem,Button,Body,Icon,Text} from 'native-base';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import DataDoa from '../data/DataDoa.json';

export default class DetailDoa extends Component
{
    constructor(props){
        super(props);
        this.state  = {

        };
    }

    _menu       = null;
    setMenuRef  = ref => {
        this._menu  = ref;
    };
    hideMenu    = () => {
        this._menu.hide();
    };
    showMenu    = () => {
        this._menu.show();
    };

    id      = this.props.navigation.getParam('pageId');
    index   = parseInt(this.id) - 1;
    data    = DataDoa[this.index];
    text    = this.data.judul + '\n \n' + this.data.arab + '\n \n' + this.data.arti + '\n \n' + this.data.dalil;
    carab   = this.data.arab;
    carti   = this.data.arti;
    cdalil  = this.data.dalil;

    copy(){
        Clipboard.setString(this.text);
        Alert.alert(
            'Salin Doa',
            'Doa berhasil di salin',
        );
        this.hideMenu();
    }
    cpArab(){
        Clipboard.setString(this.carab);
        Alert.alert(
            'Salin Arab',
            'Arab berhasil di salin',
        );
        this.hideMenu();
    }
    cpArti(){
        Clipboard.setString(this.carti);
        Alert.alert(
            'Salin Terjemahan',
            'Terjemahan berhasil di salin'
        );
        this.hideMenu();
    }
    cpDalil(){
        Clipboard.setString(this.cdalil);
        Alert.alert(
            'Salin Dalil',
            'Dalil berhasil di salin'
        );
        this.hideMenu();
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
                             <Button transparent>
                                 <Menu
                                     style={{flex: 1}}
                                     ref={this.setMenuRef}
                                     button=
                                     {
                                         <TouchableOpacity onPress={this.showMenu}>
                                             <Icon name="more" style={{fontSize: 26}} />
                                         </TouchableOpacity>
                                     }
                                 >
                                     <MenuItem onPress={()=>this.copy()} >
                                         Salin Doa
                                     </MenuItem>
                                     <MenuItem onPress={()=>this.cpArab()} >
                                         Salin Arab
                                     </MenuItem>
                                     <MenuItem onPress={()=>this.cpArti()} >
                                         Salin Terjemahan
                                     </MenuItem>
                                     <MenuItem onPress={()=>this.cpDalil()} >
                                         Salin Dalil
                                     </MenuItem>
                                 </Menu>
                             </Button>
                         </Right>
                     </Header>
                      <ScrollView>
                          <Card>
                              <CardItem header bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                                  <Text style={{textAlign: 'center', color: '#388e3c'}}>{doa.item.judul}</Text>
                              </CardItem>
                              <CardItem>
                                  <Body style={{justifyContent: 'center',alignItems: 'center',}}>
                                      <Text style={s.arb}>{doa.item.arab}</Text>
                                      <Text style={s.art}>{doa.item.arti}</Text>
                                  </Body>
                              </CardItem>
                              <CardItem footer bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                                  <Text style={{textAlign: 'center', color: '#388e3c'}}>{doa.item.dalil}</Text>
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
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
    },
    art:{
        fontStyle: 'italic',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'justify'
    }
});
