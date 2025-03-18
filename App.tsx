/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import UserData from './components/UserData';
import {DynamicGrid} from './components/DynamicGrid/DynamicGrid';
import Selection from './components/Selection/Selection';
import ComponentDidUpdate from './components/ComponentDidUpdate/ComponentDidUpdate';
import Unmount from './components/Unmount/Unmount';

const data = [
  {
    id: 1,
    name: 'shukumar',
  },
  {
    id: 2,
    name: 'Rohit',
  },
  {
    id: 3,
    name: 'Kohli',
  },
  {
    id: 4,
    name: 'Kohli',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fruit = (val: string) => {
    Alert.alert('Button Pressed!', val);
    setName(val);
  };

  return (
    // <ScrollView>
      <View style={{padding: 20}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text style={{fontSize: 25, marginTop: 20}}>{name}</Text>

        <UserData />
        <Button
          onPress={() => fruit('Shukunar Ghosh')}
          title="Press Me !"
          color={'green'}></Button>

        <Text style={styles.textStyle}>Hello Style from react native</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={text => setName(text)}
          placeholder="Enter Your Name"
        />
        {/* {data?.map(item => (
          <Text style={styles.textStyle}>{item?.name}</Text>
        ))} */}

        {/* <DynamicGrid /> */}
        <Selection/>
        {/* <ComponentDidUpdate/> */}
        {/* <Unmount/> */}
      </View>
    // </ScrollView>
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
