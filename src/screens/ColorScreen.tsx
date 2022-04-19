//example of a Hook function
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, {useState} from 'react'

const HookColorScreen = () => {
  const [color, setColor] = useState([]);
  //console.log(color);

  //call the 'randomRgb' function here
  return (
    <View>
      <Button
      title="Click to View a Random Color"
      onPress={() => {
        setColor([...color, randomRgb()]);
      }
    }
      />
      <View
      style={{height: 100, width: 100, backgroundColor: randomRgb()}}
      />

      <FlatList
      keyExtractor={(item) => item}
      data={color}
      renderItem={({item}) => {
        return <View style={{height: 100, width: 100, backgroundColor: item}} />
      }}

      {/* <Text style={styles.textHeader}>
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
      /> */}
    </View>
  )
}

//To generate the random color
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
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
