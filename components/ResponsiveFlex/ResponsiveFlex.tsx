import React from 'react'
import { Text, View } from 'react-native'

const ResponsiveFlex = () => {
  return (
    <View style={{flex : 1}}>
      <View style={{flex : 1 , backgroundColor : 'red'}}><Text>Hi</Text></View>  
      <View style={{flex : 1 , backgroundColor : 'red'}}></View>  
      <View></View>  
    </View>
  )
}

export default ResponsiveFlex