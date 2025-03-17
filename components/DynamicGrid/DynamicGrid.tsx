import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
      name: 'Kalis',
    },
    {
      id: 5,
      name: 'Warners',
    },
    
    {
      id: 6,
      name: 'Warners',
    },
    {
      id: 7,
      name: 'Warners',
    },
  
  ];

export const DynamicGrid = () => {
  return (
    <View style={{flex : 1 , flexDirection : 'row' , marginTop : 20 , flexWrap : 'wrap' }}>
        {
            data?.map(item => <Text style={styles.gridStyle} key={item?.id}>{item?.name}</Text>)
        }
    </View>
  )



}
const styles = StyleSheet.create({
    gridStyle : {
        backgroundColor : 'red',
        width : 118,
        margin : 2,
        height: 110,
        textAlignVertical : "center",
        textAlign : 'center'
    }
  })
