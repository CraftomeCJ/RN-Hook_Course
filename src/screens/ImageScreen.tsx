//todo Here's the Parent-component location for ImageDetails
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//todo import the child imageDetails to parent here
import ImageDetails from './../components/ImageDetails'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails />
      <ImageDetails />
      <ImageDetails />
      <ImageDetails />
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})

//learn Parent-Child relationship
//todo same group of elements, repeated three times
//todo we could repeat the same JSX three times over, or we could create a separate component
