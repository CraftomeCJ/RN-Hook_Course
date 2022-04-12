  import React from 'react';
  import { Text, StyleSheet, View } from 'react-native';

const JSXExercise = () => {

  const myName = 'CJ Ho';

  return (
    <View>
    <Text style={style.textHeader}>
      Getting started with React Native!
      </Text>
    <Text style={style.textBody}>
      My name is {myName}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  textHeader: {
    fontSize: 45,
    color: 'red'
  },
  textBody: {
    fontSize: 20,
    color: 'green'
  }
});


export default JSXExercise;
