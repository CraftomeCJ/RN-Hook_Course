
import { FlatList, Platform, ScrollView, Slider, StatusBar, StyleSheet, Switch, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react'

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
const [fontSize, setFontSize] = useState(14);
const [fontStyleIdx, setFontStyleIdx] = useState(0);
  const [fontWeightIdx, setFontWeightIdx] = useState(0);
  const [lineHeight, setLineHeight] = useState(14);
  const [textAlignIdx, setTextAlignIdx] = useState(0);
  const [textDecorationLineIdx, setTextDecorationLineIdx] = useState(0);
  const [includeFontPadding, setIncludeFontPadding] = useState(false);
  const [textVerticalAlignIdx, setTextVerticalAlignIdx] = useState(0);
  const [fontVariantIdx, setFontVariantIdx] = useState(0);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [textDecorationStyleIdx, setTextDecorationStyleIdx] = useState(0);
  const [textTransformIdx, setTextTransformIdx] = useState(0);
  const [writingDirectionIdx, setWritingDirectionIdx] = useState(0);
  const [textShadowRadius, setTextShadowRadius] = useState(0);
  const [textShadowOffset, setTextShadowOffset] = useState({
    height: 0,
    width: 0
  });

  return (
    <View>
      <Text>TextStyleProps</Text>
    </View>
  )
}

export default TextStyleProps

const styles = StyleSheet.create({})
