// LEARN useState
// Three questions:
//todo What piece of data inside this application is changing?
//todo What type of data is it? Is it a number, a string, an object, or an array?
//todo What is the starting value of that piece of data?

import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const CounterScreen = () => {
  //important Understand how to use setState. Never change the state directly.
  const [
    counter, //<== the element you want to track
    setCounter //<== function to set the counter state
  ] = useState //<== useState is a hook that is a function that returns an array of two elements, the first element is the value of the counter, the second element is a function to set the counter state
  (0) //<== (with default value you set)

  return (
    <View>
      <Button title='Increase' onPress={() => {
        setCounter(counter + 1)
      }}
        />
      <Button title='Decrease' onPress={() => {
        setCounter(counter - 1)
      }} />
      <Text style={styles.counterStyle}>
        Counter Count: {counter}
        </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 30
  }
})

//note Props ==> System to pass data from a parent to a child component
//note State ==> System to track a piece of data that will change over time. If that data changes, our app will "rerender" the component.
