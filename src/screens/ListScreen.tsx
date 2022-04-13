//important default setup (Boilerplate) for component
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 21},
    {name: 'Friend #3', age: 22},
    {name: 'Friend #4', age: 23},
    {name: 'Friend #5', age: 24},
    {name: 'Friend #6', age: 25},
    {name: 'Friend #7', age: 26},
    {name: 'Friend #8', age: 27},
    {name: 'Friend #9', age: 28},
    {name: 'Friend #10', age: 29},
  ];
  return (
  <FlatList         //<== RN component
  data={friends}    //<== pass in a Prop of data
  renderItem={({item}) => {  //pass in another Prop with arg
    // element === {item: {name: 'Friend #1', age: 20}, index: 0}
    //or item === {name: 'Friend #2', age: 21}

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
