import React from 'react';
import {Text, View} from 'react-native';


//note ==> create native component ==> a function that returns some 'JSX' with View, Text & Stylesheet
const ViewBoxesWithColorAndText = () => {
  return (
  <View
    viewStyle= {
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

export default ViewBoxesWithColorAndText;
