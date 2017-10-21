import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import { Constants } from 'expo';

// const PHOTOS = Array.from({ length: 24 }).map((_, i) => `https://unsplash.it/600/600/?random&__id${i}`);
// const SCREEN = Dimensions.get('window');
// const BOX_SIZE = (Dimensions.get('window').width / 2) - 12;

export default class App extends Component {

  render() {    
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor="green" barStyle="light-content" />
        <View style={styles.appBar}>
          <Text>Here</Text>
        </View>
        <View style={styles.content}></View>
      </View>
    );
  }
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'green',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
