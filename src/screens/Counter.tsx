import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const Counter = () => {
   //todo trying: try to replace the following line with let counter = 0;
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button
      title="Increase"
      onPress={() => {
  //todo trying: try to replace the following line with counter++;
        setCounter(counter + 1)
      }}
      />
      <Button
      title="Decrease"
      onPress={() => {
  //todo trying: try to replace the following line with counter--;
        setCounter(counter - 1)
      }}
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})
