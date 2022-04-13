//important default setup (Boilerplate) for component
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListScreen = () => {
  return (
    <View>
      <Text>List Screen</Text>
    </View>
  );
}



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
