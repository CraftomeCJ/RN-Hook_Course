//important default setup (Boilerplate) for component
import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
//note FlatList
// A performant interface for 'rendering' => basic, flat list, supporting handy features:
//read RN documentation for more details

const ListScreen = () => {
  //below is an array of objects
  const friends = [
    //note ways to solve 'key' issues
  //method 1 we can use a 'key' prop and hard code every object in array => {name: 'Friend #1', age: 20, key: '1'},
//important 'key' prop => must be unique and a 'string'

    {name: 'Friend #1', age: 20,},
    {name: 'Friend #2', age: 21,},
    {name: 'Friend #3', age: 22,},
    {name: 'Friend #4', age: 23,},
    {name: 'Friend #5', age: 24,},
    {name: 'Friend #6', age: 25,},
    {name: 'Friend #7', age: 26,},
    {name: 'Friend #8', age: 27,},
    {name: 'Friend #9', age: 28,},
    {name: 'Friend #10', age: 29,},
  ];

  //note What is 'key' prop?
  //React's key prop is something you need to put on elements when you map over an array (otherwise React will get mad at you).
  //React's key prop gives you the ability to control component instances.
  //Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all the props changed.
  //learn this happens just as much for the state of native form elements (for things like value and even focus). The key prop isn't just for getting rid of that annoying React console error when I try to render an array of elements (all "annoying" errors from React are awesome and help you avoid bugs, so please do not ignore them). The key prop can also be a useful mechanism for controlling React component and element instances.

  return (
  <FlatList         //<== RN component
  //note if you write horizontal prop in FlatList component => default it mean {true}. shorthand => horizontal
  //horizontal
  showsHorizontalScrollIndicator={false}

  //method 2 we can use 'keyExtractor' prop in 'FlatList' component => keyExtractor={friend => friend.name}
  //create a 'keyExtractor' and pass a function that is going to be called so many different times with a single argument 'friend'
  //note it is used to extract a "Unique" key for a given item at a specified index. Useful when there are hundreds of items present in our list.
  keyExtractor={friend => friend.name}

  //important props = 'data' ==> a plain array
  data={friends}    //<== pass in a Prop of data

  //important props = 'renderItem' ==> take an 'item' from 'data' and renders it into the list
  renderItem={({item}) => {  //pass in another Prop with arg
    // arg element will be like ===> {item: {name: 'Friend #1', age: 20}, index: 0}
    //while arg item will be like ===> {name: 'Friend #2', age: 21}

    return (
    <Text style={styles.textStyle}>
      {item.name} - Age {item.age}
    </Text>
    );
  }}
  />
    );
};


//note a few 'Props' around FlatList
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50 //<== 'marginVertical' Margin prop => Apply margin only to top and bottom side only
  }
});



export default ListScreen;

//understand what is flatList and how it form the list from the datasource

//LEARN FlatList Element
/*
=> Turns an array into a list of elements
=> we are required to pass in a 'prop" of 'data' ==> the array of data that we are going to create a bunch of elements out of
=> also required to pass in a 'renderItem' prop ==> function that will turn each individual item into an element
=> if you are coming from React on the web, I might be used to 'mapping' an array of data to build a list ==> FlatList is better with RN
*/
