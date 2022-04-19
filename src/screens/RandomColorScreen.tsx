//example of a Generating Random Color
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, {useState} from 'react'

//add the color label under the
const RandomColorScreen: React.FC = () => {
  const [color, setColor] = useState<{name: string; color: string}[]>([{name: 'yellow', color: 'yellow'},]);
  //console.log(color);

  //call the 'randomRgb' function here
  return (
    <View>
      <Button
      title="Add a Color"
      onPress={() => {
        setColor([...color, randomRgb()]);
      }}
      />

      <FlatList
      keyExtractor={(item) => item.name}
      data={color}
      renderItem={({item}) => {

        return (
          <View style={styles.listStyle}>

      <View
        style={{height: 100, width: 100, backgroundColor: item.color}} />
        <Text>{item.name}</Text>
        </View>
        )
      }}
      />
    </View>
  )
}


//To generate the random color
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return {
    name:`rgb(${red}, ${green}, ${blue})`,
    color: `rgb(${red}, ${green}, ${blue})`,
  }
}

export default RandomColorScreen

const styles = StyleSheet.create({
  listStyle: {
    paddingTop: 10,
    paddingBottom: 5,
  }
})
