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
import React, {useState} from 'react'
import ColorCounter from '../components/ColorCounter'

//NOTE all cap with an underscore ==> by convention it mean this is a true constant value. A sign to other engineers this is a special variable.
const COLOR_INCREMENT = 15;

//Use enum of Color for string constant
enum Color {
  RED = 'Red',
  GREEN = 'Green',
  BLUE = 'Blue'
}

const SquareScreen: React.FC = () => {
  //Convert the states of red, blue, green into a state of object with property of red, blue and green
  //useState is a function that returns an array of two values. The first value is the current state of the variable. The second value is a function that allows you to update the state of the variable.

  const [red, setRed] = useState(180);
  const [green, setGreen] = useState(180);
  const [blue, setBlue] = useState(180);
  console.log('red', red, 'green',green, 'blue',blue);

  // //way 2 to validate the state changes <== not the best
  // const setColor = (color: string, change: number) => {
  //   //color === 'red', 'green', 'blue'
  //   //change === +15, -15
  //   //NOTE the useState is a function that returns an array of two values. The first value is the current state of the variable. The second value is a function that allows you to update the state of the variable.
  //   if (color === 'red') {
  //     if (red + change > 255 || red + change < 0) {
  //       return;
  //     } else {
  //       setRed(red + change);
  //     }
  //   }
  // }

  //way 3 refactor using switch statement to validate the state changes <== best
const setColor = (color: string, change: number): void => {
  switch (color) {
    case 'red':
      red + change > 255 || red + change < 0 ? null : setRed(red + change);
      return;
    case 'green':
      green + change > 255 || green + change < 0 ? null : setGreen(green + change);
      return;
    case 'blue':
      blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
      return;
    default:
      return;
  }
}

  // console.log(red);
  // console.log(green);
  // console.log(blue);

  return (
    <View style={styles.container}>
 {/* way 1 <== not the best way is using if else with || && ! */}
        <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
          // if (red + COLOR_INCREMENT > 255) {
          //   return;
          // }
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
          color="Red"/>

        <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"/>

        <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"/>

        <View style={{height: 150, width: 370, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        <Text style={styles.textStyle}>{colorLabel(red, green, blue)}</Text>

    </View>
  )
}

//add the color label under the color square.
const colorLabel = (red: number, green: number, blue: number) => {
  return `(Red: ${red}, Green: ${green}, Blue: ${blue})`;
}

export default SquareScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10
  },
  textStyle: {
    fontSize: 25,
    color: '#00aa00',
    textAlign: 'center',
    paddingTop: 20,
  },
})


//note SquareScreen <== this need to read the three different state values
// <== these 3 below need to change the three different states values ==>
// ==> red
// ==> green
// ==> blue

//important generally, we create state variables in the most parent component that needs to read or change a state value

//important If a child need to read a state value, the parent can pass it down as a prop
//note: ColorCounter doesn't need to read state values! It just needs to pass down the state values to the child

//important if a child need to change the state value, the parent can pass down a callback function to change the state value as a prop "{ onChange: () => {} }"

//challenge:
/*
1. Try to add the color label under the color square.
2. Convert the states of red, blue, green into a state of object with property of red, blue and green
3. Try the initial state with null and fix the issue to make it work.
*/

//bug to refactor with typeof keyof
