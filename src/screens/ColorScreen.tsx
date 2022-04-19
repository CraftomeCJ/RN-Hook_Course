//example of a Hook function
import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const HookColorScreen = () => {
  const [color, setColor] = useState('')

  return (
    <View>
      <Button title="Add s Color" />
      <Text style={styles.textHeader}>
        What is your favorite color?
        </Text>
        <Text style={styles.textParagraph}>
        My favorite color is: {color}
        </Text>
      <Button
        title="Green"
        onPress={() => {
          setColor('green')
        }}
      />
      <Button
        title="Blue"
        onPress={() => {
          setColor('blue')
        }}
      />
      <Button
        title="Pink"
        onPress={() => {
          setColor('pink')
        }}
      />
      <Button
        title="Red"
        onPress={() => {
          setColor('red')
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setColor('')
        }}
      />
    </View>
  )
}

export default HookColorScreen

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30
  },
  textParagraph: {
    fontSize: 20
  },
  buttonStyle: {
    marginVertical: 20,
    color: 'red'
  }
})
