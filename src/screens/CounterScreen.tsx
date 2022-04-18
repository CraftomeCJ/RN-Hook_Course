// LEARN useState
// Three questions:
//todo What piece of data inside this application is changing?
//todo What type of data is it? Is it a number, a string, an object, or an array?
//todo What is the starting value of that piece of data?

import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CounterScreen = () => {
  return (
    <View>
      <Text>Learn useState Counter Screen</Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})

//note Props ==> System to pass data from a parent to a child component
//note State ==> System to track a piece of data that will change over time. If that data changes, our app will "rerender" the component.
