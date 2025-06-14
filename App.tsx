/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={"dark-content"}  />
      <View style={{padding: 20}}>
        <Text style={styles.textStyle}>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 20,
    fontSize: 20,
    backgroundColor: 'gray',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textInput: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default App;
