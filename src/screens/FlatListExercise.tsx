//LEARN FlatList Exercise
//GOAL:
//Make the FlatList scroll vertically again
//Add a new 'age' property to each of our 'friend' objects
//print out that age for each element produced by the FlatList

import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const FlatListExercise = () => {
  const goodFriends = [
    { name: 'Best Friend #1', age: 35, },
    { name: 'Best Friend #2', age: 36, },
    { name: 'Best Friend #3', age: 37, },
    { name: 'Best Friend #4', age: 38, },
    { name: 'Best Friend #5', age: 39, },
    { name: 'Best Friend #6', age: 40, },
    { name: 'Best Friend #7', age: 41, },
  ];

  return (
    <FlatList
    keyExtractor={goodFriends => goodFriends.name}
    data={goodFriends}
    renderItem={({ item }) => {
      return (
        <Text style={styles.textStyle}>
          {item.name} - Age {item.age}
        </Text>
      );
    }}
    />
  );
};

export default FlatListExercise

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})
