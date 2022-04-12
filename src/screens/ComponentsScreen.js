//we are going to creat some react component in this file
//'Component' files create and export exactly one 'React Component'
//LEARN React Component File

// note ==> Part 1: import libraries we need to create a component
import React from 'react'; //=> core component
//import {userQuery} from 'react-query'//=>community component
import {Text, View, StyleSheet, Button} from 'react-native'; //=> react native component
//import MyComponent from ./myfilepath //=>native component

/*
JSX Component
  ==> <Text> = for displaying text
    ==> supports nesting, styling & touch handling

  ==> StyleSheet an almost identical of CSS StyleSheets

  ==> View = most fundamental component for building UI;
    ==> a container that supports layout with 'Flexbox', 'style', 'some touching handling' & accessibility controls
    ==> designed to be nested inside other views and can have zero to many children of any type

  ==> Button = should render nicely on any platform
    ==> support a minimal level of customization
*/

//note ==> Part 2: create some component => a function that returns some 'JSX'
//Text component with Nested text
const ComponentsScreen = () => {
  return <Text style={styles.textStyleBase}>
    This is the components screen
      <Text style={styles.textStyleInner}>
        and it look great.
        </Text>
    </Text>;
};

//note ==> create native component ==> a function that returns some 'JSX' with View, Text & Stylesheet
const ViewBoxesWithColorAndText = () => {
  return (
  <View
    viewStyle={
      {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 100,
      padding: 20
    }
  }
  >
    <View viewStyle={{ backgroundColor: 'red', flex: 0.3 }} />
    <View viewStyle={{ backgroundColor: 'green', flex: 0.5 }} />
    <View viewStyle={{ backgroundColor: 'blue', flex: 0.2 }} />
    <Text>Hello, There!!!</Text>
  </View>
  );
};



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
