import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
//using 'View' to wrap the <Text> component
//using 'TouchableOpacity' to warp the <Button> component and it is going to be used more frequently than 'Button'

//1. first need to show 'Button' on the screen
//note <Button /> element is a self close component and
//pass in a prop 'title' and assign a value to the prop ="Click Me" <== a rare case of without using curly braces  ////<== this is the default value for the button
//add in another prop ==> 'onPress={}' in to <Button> element
//2. then need to use 'TouchableOpacity' to wrap the <Button> element with a default css fade-off animation
//note TouchableOpacity is not a self close tag and it is a wrapper tag
const HomeScreen = () => {
  return (
  <View>
    <Text style={styles.text}>
      Hello world
    </Text>
    <Button
    onPress={() => console.log('Button Pressed!')}
    title='Go to component Demo'
    />
    <TouchableOpacity
    onPress={() => console.log('You tapped the button!')}>
    <Text>
      Go to List Demo
    </Text>
      </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'green'
  },
});

export default HomeScreen;


//LEARN Button Types
//going to work on how to:
//How to make user touch a button navigate to 'componentsScreen'
//or touch another button and navigate to 'listScreen'
/*
note- *Button*
  - Very simple component for showing a button and detecting a press
  - onPress - Handler to be call when user taps the button
  - title - Text to display inside the button
  - color - Color of the text (iOS), or background color of the button (Android).

note- *TouchableOpacity*
  - Highly customizable component that can detect a press on just about any kind of element
  - A wrapper for making views respond to touches.
  - On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.
  - Opacity is controlled by wrapping the children in an 'Animated.View' ==> using the style property with an alpha channel, and animates alongside the layout changes of the wrapped view.
  - onPress - Handler to be call when user taps the button
  - style - can apply the custom styling.
*/
