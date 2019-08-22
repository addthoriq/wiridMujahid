import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {Container,Header,Title,Content,Left,Right,Button,Body,Icon,Text} from 'native-base';

export default class AboutScreen extends Component
{
    render() {
      return (
          <Container>
             <Navbar nav={this.props.navigation} />
              <Content>
                  <Button success>
                      <Text>Ini About</Text>
                  </Button>
              </Content>
          </Container>
      );
    }
}
