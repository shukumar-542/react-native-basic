import React, { useEffect, useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'

const ComponentDidUpdate = () => {
    const [count , setCount] = useState(0);
    const [data , setData ] = useState(100);

    useEffect(()=>{
        Alert.alert(`${count}`)
    }, [count])

  return (
    <View>
        <Text>Component did Mount {count}</Text>
        <Text>Data {data}</Text>
        <Button title='Update Counter' onPress={()=> setCount(count + 1)} />
            <Button title='Data' onPress={()=> setData(data + 1)}  />
    </View>
  )
}

export default ComponentDidUpdate