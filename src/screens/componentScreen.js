import React from 'react';
import { Text, StyleSheet } from 'react-native';

const componentScreen = () => {
  return <Text style={styles.text}>Component Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default componentScreen;
