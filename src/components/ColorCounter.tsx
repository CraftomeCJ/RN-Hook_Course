//Add ColorScreen to the parent screen of SquareScreen

import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const ColorCounter = ({color}: {color: string}) => {
  return (
    <View>

      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />

    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})
