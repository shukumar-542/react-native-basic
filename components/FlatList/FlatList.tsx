import React from 'react'
import { View , FlatList, Text, StyleSheet} from 'react-native'

const FlatListItem = () => {
    const data = [
        {
            id : 1,
            name : 'shukumar'
        },
        {
            id : 2,
            name : 'Rohit'
        },
        {
            id : 3,
            name : 'Kohli'
        },
        {
            id : 4,
            name : 'Kohli'
        },
        {
            id : 5,
            name : 'Kohli'
        },
        {
            id : 6,
            name : 'Kohli'
        },
        {
            id : 7,
            name : 'Kohli'
        },
        {
            id : 8,
            name : 'Kohli'
        },
        {
            id : 9,
            name : 'Kohli'
        },
    ]
  return (
    <View style={{marginTop : 20}}>
       <FlatList
       data={data}
       renderItem={({item})=> <Text style={styles.item}>{item?.name}</Text>}
       />
    </View>
  )
}

const styles = StyleSheet.create({
    item : {
        fontSize : 20,
        backgroundColor : 'blue',
        marginTop : 5,
        color : "white",
        padding : 10,
        borderRadius : 5
    }
})

export default FlatListItem