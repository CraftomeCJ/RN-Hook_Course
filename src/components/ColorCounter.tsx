//Add ColorScreen to the parent screen of SquareScreen

import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

//
export interface ColorCounterProps {
  color: string;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ColorCounter = ({color, onIncrease, onDecrease}: ColorCounterProps) => {

  return (
    <View>

      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />

    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})
