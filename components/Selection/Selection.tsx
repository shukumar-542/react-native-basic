import React from 'react';
import {SectionList, Text, View} from 'react-native';

const Selection = () => {
  const users = [
    {
      id: 1,
      name: 'Rohit Sharma',
      data: ['Captain', 'Batter', 'Bowler'],
    },
    {
      id: 2,
      name: 'Virat Kohli',
      data: ['Batter', 'Bowler'],
    },
    {
      id: 3,
      name: 'Hardik Pandiya',
      data: ['Batter', 'All rounder'],
    },
  ];
  return (
    <SectionList
      sections={users}
      renderItem={({item}) => <Text>{item}</Text>}
      renderSectionHeader={({section : {name}})=><Text style={{fontSize : 20}}>{name}</Text>}
      nestedScrollEnabled={true}
    />
  );
};

export default Selection;
