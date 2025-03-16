/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import UserData from './components/UserData'



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name , setName] =  useState('Shukumar')


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fruit = (val : string)=>{
    // Alert.alert("Button Pressed!", val);
    setName(val)
    console.warn(val)
  }




  return (
    <View style={{padding: 20}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={{fontSize : 25 , marginTop : 20}}>{name}</Text>
      <UserData/>
      <Button onPress={()=>fruit("Shukunar Ghosh")} title="Press Me !" color={"green"} ></Button>


      <Text style={styles.textStyle}>Hello Style from react native</Text>
      <Text style={styles.textStyle}>Hello Style from react native</Text>
      <Text style={styles.textStyle}>Hello Style from react native</Text>
    </View>
  );
}


const styles  = StyleSheet.create({
  textStyle  : {
    marginTop : 20,
    fontSize : 20,
    backgroundColor : "gray",
    color : 'white',
    padding : 10,
    borderRadius : 10,
    textAlignVertical : "center",
    textAlign : "center"
  }
})

export default App;
