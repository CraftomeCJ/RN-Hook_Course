//we are going to creat some react component in this file
//'Component' files create and export exactly one 'React Component'
//LEARN React Component File

// note ==> Part 1: import libraries we need to create a component
import React from 'react'; //=> core component
//import {userQuery} from 'react-query'//=>community component
import {Text, View, StyleSheet} from 'react-native'; //=> react native component
//import MyComponent from ./myfilepath //=>native component

/*
JSX Component
  ==> <Text> = A 'primitive' React element
    ==> Used to show some basic content on the screen
    ==> for displaying text to user
    ==> supports nesting, styling & touch handling
    ==> Any text place outside "<Text>" will result in error

  ==> StyleSheet.create an almost identical of CSS StyleSheets
  How 'styles' work? ==> The 'StyleSheet.create()' function validates a set of styling rules that we passed into it.
    ==> Can be use to or pass styling directly into an element

  ==> <View> = most fundamental component for building UI
    ==> General purpose element used for grouping other elements or styling
    ==> a container that supports layout with 'Flexbox', 'style', 'some touching handling' & accessibility controls
    ==> designed to be nested inside other views and can have zero to many children of any type

  ==> <Image> = Show an image

  ==> Button = show a button the user can press.
    ==> give use feedback whenever the user pressed it
    ==> should render nicely on any platform
    ==> support a minimal level of customization

  ==> <Text>,<View> ==> JSX = a 'dialect' of JS that tells React what content we want to show.

  ==> 'appNavigator' in 'App.js'??? ==>  a tool from a library call React Navigation that is used to show different screens to the user
*/

//note ==> Part 2: create some component => a function that returns some 'JSX'
//Text component with Nested text
const ComponentsScreen = () => {
  //create a variable using JSX element
  const greeting = <Text>'Hello, my Friend!!!'</Text>;

  //then we can show it inside JSX block
  //{styles.textStyleBase} <== props
  return (
  <View>
    <Text style={styles.textStyleBase}>
    This is the components screen
      <Text style={styles.textStyleInner}>
        and it look great.
        </Text>
      </Text>
    {greeting}
  </View>
  );
};
//important remember to wrap multi-line JSX with (parenthesis)

//note ==> Part 3: create a stylesheet to style our component
const styles = StyleSheet.create({
  textStyleBase: {
    fontSize: 30,
    color: 'red'
  },
  textStyleInner: {
    fontSize: 20,
    color: 'blue'
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderColor: '#fdfd2e',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#00ff00',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

//important Code Quality Tips:
// => By moving styles away from the render function, you're making the code easier to understand;
// => Naming the styles is a good way to add the low level components in the render function.



//note ==> export the component so we can use it elsewhere in our project
export default ComponentsScreen;
//export default ViewBoxesWithColorAndText;

//LEARN 1. We have just create our FIRST COMPONENT file

//important Rules Of JSX
//we can assemble different JSX elements like normal HTML
//we configure different JS element using 'props'
//we can refer to JS variables inside of a JSX block by using curly braces
//we can assign JSX elements to variable, then show that variable inside of a JSX block
