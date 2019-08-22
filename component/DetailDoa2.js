import React, { Component } from 'react';
import {
    FlatList,
    Clipboard,
    TouchableOpacity,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import {Header,Title,Left,Right,Card,CardItem,Button,Body,Icon,Text} from 'native-base';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import DataDoa from '../data/DataDoa.json';

export default class DetailDoa extends Component
{
    constructor(props){
        super(props);
        this.state  = {
            status: true,
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

    id      = this.props.navigation.getParam('itemId');
    index   = parseInt(this.id) - 1;
    data    = DataDoa[this.index];
    text    = this.data.judul + '\n \n' + this.data.arab + '\n \n' + this.data.arti;

    copy(){
        Clipboard.setString(this.text);
        alert('Doa tersalin ke Clipboard');

        this.hideMenu();
    }

    render() {
        const {navigation}  = this.props;
        const index         = parseInt(this.id) - 1;
      return (
          <View style={{flex: 1, backgroundColor: '#e5e5e5'}}>
             <Header style={{backgroundColor: '#4caf50'}} androidStatusBarColor="green">
                 <Left>
                     <Button transparent onPress={()=>this.props.navigation.goBack()}>
                         <Icon name="arrow-back" />
                     </Button>
                 </Left>
                 <Body>
                     <Title>Doa ke {DataDoa[index].id}</Title>
                 </Body>
                 <Right>
                     <Button transparent>
                         <Menu
                             ref={this.setMenuRef}
                             button=
                             {
                                 <TouchableOpacity onPress={this.showMenu}>
                                     <Icon name="more" style={{fontSize: 24}} />
                                 </TouchableOpacity>
                             }
                         >
                             <MenuItem onPress={()=>this.copy()} >
                                 Salin
                             </MenuItem>
                         </Menu>
                     </Button>
                 </Right>
             </Header>
              <ScrollView pagingEnabled={true}>
                  <Card>
                      <CardItem header bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                          <Text style={{textAlign: 'center', color: '#388e3c'}}>{DataDoa[index].judul}</Text>
                      </CardItem>
                      <CardItem>
                          <Body style={{justifyContent: 'center',alignItems: 'center',}}>
                              <Text style={s.arb}>{DataDoa[index].arab}</Text>
                              <Text style={s.art}>{DataDoa[index].arti}</Text>
                          </Body>
                      </CardItem>
                      <CardItem footer bordered style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
                          <Text style={{textAlign: 'center', color: '#388e3c'}}>{DataDoa[index].dalil}</Text>
                      </CardItem>
                  </Card>
              </ScrollView>
          </View>
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
