//todo Here's the Parent-component location for ImageDetails
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//todo import the child imageDetails to parent here
import ImageDetails from './../components/ImageDetails'

//todo customize each  of the different image detail to show slightly different content
const ImageScreen = () => {
  return (

    <View>
      {/* create a very unique custom props name called title */}
      <ImageDetails ImageTitle = 'maple-tree'/>
      <ImageDetails ImageTitle = 'freeway'/>
      <ImageDetails ImageTitle = 'cliffbythesea'/>
      <ImageDetails ImageTitle = 'mountaintop'/>
      <ImageDetails ImageTitle = 'sunset'/>
      <ImageDetails ImageTitle = 'lakeview'/>
      <ImageDetails ImageTitle = 'lonelytree'/>
      <ImageDetails ImageTitle = 'mountainvalley'/>
      <ImageDetails ImageTitle = 'swimmingpond'/>
      <ImageDetails ImageTitle = 'mapleleafart'/>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})

//learn Parent-Child relationship
//todo same group of elements, repeated three times
//todo we could repeat the same JSX three times over, or we could create a separate component
