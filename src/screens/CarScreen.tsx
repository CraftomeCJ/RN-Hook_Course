

import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

function FavoriteCar() {
  const [car, setCar] = useState('Rolls Royce');
  const [model, setModel] = useState('Phantom');
  const [year, setYear] = useState('1935');
  const [color, setColor] = useState('silver');

return (
    <View>
      <Text style={styles.textStyle}>
        My favorite car is a {color}, {car}, {model} made in {year}!
        </Text>
      <Button
        title="red"
        onPress={() => {
          setColor('red')
        }}
      />
      </View>
)
}

export default FavoriteCar;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});
