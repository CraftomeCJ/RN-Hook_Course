//SquareScreen to refactor the SquareScreen with Reducers

/*
LEARN Creating a Reducer here:
steps to refactor the SquaresScreen with reducers.
*/

import { StyleSheet, Text, View } from 'react-native'
import React, {useReducer} from 'react'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 5;

/*
1. SquareScreen App works right now - we could leave it as-is! But we could make it slightly better...
2. We have 3 separate pieces of useState
3. For SquareScreen app, these 3 piece of state are extremely related
4. There is a precise set of well-known ways in which we update these values
5. This makes 3 & 4 "state" a great candidate for being managed by a 'reducer'
6. What is 'Reducer'?? <== is actually a FunctionThatManagesChangesToAnObject
   1. Some fancy name
   2. Function that gets called with two objects
   3. Argument #1 ==> object that has all of out state in it
      (example: {red: 0, green: 0, blue: 0})
   4. Argument #2 ==> object that describes the update we want to make
      (example: {colorToChange: 'red', amount: 15})
   5. Look at Argument #2 and use it to decide how to change Argument #1
   6. important = Two technicalities
      - (1) We never change Argument #1 directly
      - (2) We must always return a value to be used as Argument #1
      */

      //action ==> use "action:" instead of long name like "howToChange StateObject"
const ReducerSqScreen: React.FC = () => {
//note second: define our reducer function
const reducer = (state: {red: number, green: number, blue: number}, action: {type: string, payload: number}) => {
  // state === {red: number, green: number, blue: number};
  //action is an object that contains the color and amount of color to change
  //example action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  //I can further refactor action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
  //action.color is the color to change
  //action.amount is the amount of color to change
switch (action.type) {
  case 'change_red':
    // add Validation
    return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload}
  case 'change_green':
    return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload}
  case 'change_blue':
    return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload}
  default:
    return state;
}
};

//note first: calling useReducer with the reducer function and the initial state
//dispatch <== another name is runMyReducer
const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
// console.log(state);
const {red, green, blue} = state;

  return (
    <View style={styles.container}>
        <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}

          color="Red"/>

        <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}

        color="Green"/>

        <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}

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

export default ReducerSqScreen

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


//learn Our Action Object Had..
/*
{colorToChange: 'red', amount: 15}

note usually by convention, we'll instead use:
{type: 'change_red', payload: 15}

type --> String that describes the exact change operation we want to make

payload --> some data that critical to the change operation
*/
