//important default setup (Boilerplate) for component
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
//note FlatList
// A performant interface for 'rendering' => basic, flat list, supporting handy features:
//read RN documentation for more details

const ListScreen = () => {
  //below is an array of objects
  const friends = [
    {name: 'Friend #1', age: 20, key: '1'},
    {name: 'Friend #2', age: 21, key: '2'},
    {name: 'Friend #3', age: 22, key: '3'},
    {name: 'Friend #4', age: 23, key: '4'},
    {name: 'Friend #5', age: 24, key: '5'},
    {name: 'Friend #6', age: 25, key: '6'},
    {name: 'Friend #7', age: 26, key: '7'},
    {name: 'Friend #8', age: 27, key: '8'},
    {name: 'Friend #9', age: 28, key: '9'},
    {name: 'Friend #10', age: 29, key: '10'},
  ];

  return (
  <FlatList         //<== RN component
  //important props = 'data' ==> a plain array
  data={friends}    //<== pass in a Prop of data
  //important props = 'renderItem' ==> take an 'item' from 'data' and renders it into the list
  renderItem={({item}) => {  //pass in another Prop with arg
    // arg element will be like ===> {item: {name: 'Friend #1', age: 20}, index: 0}
    //while arg item will be like ===> {name: 'Friend #2', age: 21}

    return (
    <Text>
      {item.name} - Age {item.age}
    </Text>
    );
  }}
  />
    );
};




const styles = StyleSheet.create({});



export default ListScreen;

//understand what is flatList and how it form the list from the datasource

//LEARN FlatList Element
/*
=> Turns an array into a list of elements
=> we are required to pass in a 'prop" of 'data' ==> the array of data that we are going to create a bunch of elements out of
=> also required to pass in a 'renderItem' prop ==> function that will turn each individual item into an element
=> if you are coming from React on the web, I might be used to 'mapping' an array of data to build a list ==> FlatList is better with RN
*/
