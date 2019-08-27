import React, { Component } from 'react';

import { StyleSheet, TouchableOpacity, Dimensions, Clipboard } from 'react-native';
import { View, Text, List, ListItem } from 'native-base';

const OptionMenu = (props) => {
  const { hide, navigation } = props;

  if (hide) {
    return null;
  }

  const salinArab = async () => {
    await Clipboard.setString(navigation.getParam('haditsArab'));
    navigation.setParams({ hideOption: true });
    alert('Tersalin Ke Clipboard!');
  };

  const salinTerjemahan = async () => {
    await Clipboard.setString(navigation.getParam('haditsTerjemahan'));
    navigation.setParams({ hideOption: true });
    alert('Tersalin Ke Clipboard!');
  };

  const salinAll = async () => {
    await Clipboard.setString(navigation.getParam('haditsAll'));
    navigation.setParams({ hideOption: true });
    alert('Tersalin Ke Clipboard!');
  };

  return (
    <View style={styles.float}>
      <List>
        <ListItem style={styles.textFloat}>
          <TouchableOpacity style={styles.button} onPress={salinAll}>
            <Text style={styles.text}>Salin Hadits</Text>
          </TouchableOpacity>
        </ListItem>
        <ListItem style={styles.textFloat}>
          <TouchableOpacity style={styles.button} onPress={salinArab}>
            <Text style={styles.text}>Salin Arab</Text>
          </TouchableOpacity>
        </ListItem>
        <ListItem style={styles.textFloat}>
          <TouchableOpacity style={styles.button} onPress={salinTerjemahan}>
            <Text style={styles.text}>Salin Terjemahan</Text>
          </TouchableOpacity>
        </ListItem>
      </List>
    </View>
  );
}

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    backgroundColor: '#fff',
    elevation: 2,
    top: -25,
    right: 15,
    width: 150,
  },
  textFloat: {
    marginLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  button: {
    paddingVertical: 15,
    flex: 1,
  },
  text: {
    fontFamily: 'SourceSansPro',
    fontStyle: 'italic',
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  }
});

export default OptionMenu;
