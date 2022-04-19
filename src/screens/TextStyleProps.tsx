
import { FlatList, Platform, ScrollView, StatusBar, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react'
import Slider from '@react-native-community/slider'

const fontStyles = ["normal", "italic", "oblique"]
const fontVariants = [
  undefined,
  "small-caps",
  "oldstyle-nums",
  "lining-nums",
  "tabular-nums",
  "proportional-nums",
];

const fontWeight = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

const textDecorationStyles = [
  "solid",
  "double",
  "dotted",
  "dashed",
  "wavy",
];

const textTransformations = [
  "none",
  "uppercase",
  "lowercase",
  "capitalize",
];

const textAlignmentsVertical = [
  "auto",
  "top",
  "center",
  "bottom",
];

const writingDirections = [
  "auto",
  "ltr",
  "rtl",
];

const TextStyleProps = () => {


  return (
    <View>
    <Text> This is Text Style Props Demo </Text>
    </View>
  );

}

export default TextStyleProps

const styles = StyleSheet.create({
  
});
