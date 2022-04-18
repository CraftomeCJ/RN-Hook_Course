// LEARN useState
// Three questions:
//todo What piece of data inside this application is changing?
//todo What type of data is it? Is it a number, a string, an object, or an array?
//todo What is the starting value of that piece of data?

import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const CounterScreen = () => {
  //important Understand how to use setState. Never change the state directly.
  const [
    counter, //<== the element you want to track
    setCounter //<== function to set the counter state
  ] = useState //<== useState is a hook that is a function that returns an array of two elements, the first element is the value of the counter, the second element is a function to set the counter state
  (0) //<== (with default value you set)

  return (
    <View>
      <Button title='Increase' onPress={() => {
        setCounter(counter + 1)
      }}
        />
      <Button title='Decrease' onPress={() => {
        setCounter(counter - 1)
      }} />
      <Text style={styles.counterStyle}>
        Counter Count: {counter}
        </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 30
  }
})

//note Props ==> System to pass data from a parent to a child component
//note State ==> System to track a piece of data that will change over time. If that data changes, our app will "rerender" the component.

//note Lifecycle of a program using setState
/*
1. App starts up
2. We navigate to the counterScreen. 'counter' piece of state is initialized ////====> counter: 0
3. User taps on the 'Increase' button, and the 'onPress' callbacks runs
4. 'onPress' calls 'setCounter', and updates its value
5. After a very brief pause, React automatically 'rerender' or re-runs the COunterScreen component
6. CounterScreen was already ran once! The state variable 'counter' is not initialized again
7. 'counter' now has & updated value of '1'////=> counter: 1
8. We return some JSX that references the updated 'counter' variable
*/

//important Few Notes on State
/*
=> We are using function-based state in a functional component. React also has class-based components that have access to state
=> We never directly modify a state variable. React doesn't detect this change! Only use the 'setter' function
=> We can name the state variable anything we wish
=> We can track any kind of data that changes over time - a number, string, array of objects, etc
=> When a component is re-rendered, all of its children get re-rendered too
=> A state variable can be passed to a child component! At that point, the state variable is now being used as props.
*/
