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
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  return (
    <View>

        <ColorCounter color="Red"/>
        <ColorCounter color="Green"/>
        <ColorCounter color="Blue"/>

    </View>
  )
}

export default SquareScreen

const styles = StyleSheet.create({})


//note SquareScreen <== this need to read the three different state values
// <== these 3 below need to change the three different states values ==>
// ==> red
// ==> green
// ==> blue

//important generally, we create state variables in the most parent component that needs to read or change a state value

//important If a child need to read a state value, the parent can pass it down as a prop
//note: ColorCounter doesn't need to read state values! It just needs to pass down the state values to the child

//important if a child need to change the state value, the parent can pass down a callback function to change the state value as a prop "{ onChange: () => {} }"
