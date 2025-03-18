import React, { useEffect, useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'

const Unmount = () => {
    const [show , setShow] = useState(true);
  return (
    <View>
        <Text>Unmount Lifecycle</Text>
        <Button title='Toggle' onPress={()=> setShow(!show) } />

        {
            show ? <Student/> : null
        }
        
    </View>
  )
}

const Student = ()=>{
    // let timer = setInterval(()=>{
    //     Alert.alert("component did mount")
    // }, 5000)
    // useEffect(()=>{
    //     return ()=> clearInterval(timer)
    // })
    return(
        <View>
            <Text>Student</Text>
        </View>
    )
}

export default Unmount