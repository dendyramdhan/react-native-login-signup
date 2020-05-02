import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

// import Login from './src/pages/Login';
// import Signup from './src/pages/Signup';

import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <Routes />
        {/* <Text style={{color: '#fff', fontSize: 18}}>Hi there!</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
