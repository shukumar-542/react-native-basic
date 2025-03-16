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
    </View>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
