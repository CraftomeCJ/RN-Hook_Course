//create SquareScreen to contain create square color logic

/*
Three questions:
What piece of data inside this application is changing?
==> red green blue
What type of data is it? Is it a number, a string, an object, or an array?
==> number
What is the starting value of that piece of data?
==> 255

Try to change the initial values of red, green and blue to see the effect.
*/

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SquareScreen = () => {
  return (
    <View>
      <Text>SquareScreen</Text>
    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})
