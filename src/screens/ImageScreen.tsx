//todo Here's the Parent-component location for ImageDetails
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
//todo import the child imageDetails to parent here
import ImageDetails from './../components/ImageDetails'

//todo customize each  of the different image detail to show slightly different content
//todo next is to pass some props from parent down to the child to customize how this child component display itself to show to the user
//todo code to add image and add image file to assets folder

//note
/* create a very unique custom props name called title */
/* 'ImageDetails => self close tag for display image details */
////<== props title for description
////<== 2nd props always use name make send to me & other developer
const ImageScreen = ({navigation}: {navigation: any}) => {
  return (

    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
      <ImageDetails
      imageTitle = 'sunset'
      imageSource = {require('../../assets/sunset.jpg')}
      score = {10}
      />
      </TouchableOpacity>
      <ImageDetails
      imageTitle = 'freeway'
      imageSource = {require('../../assets/freeway.jpg')}
      score = {8}
      />
      <ImageDetails
      imageTitle = 'cliffbythesea'
      imageSource = {require('../../assets/cliffbythesea.jpg')}
      score = {7}
      />
      <ImageDetails
      imageTitle = 'mountaintop'
      imageSource = {require('../../assets/mountaintop.jpg')}
      score = {10}
      />
      {/* <ImageDetails
      imageTitle = 'sunset'
      imageSource = {require('../../assets/sunset.jpg')}
      />
      <ImageDetails
      imageTitle = 'lakeview'
      imageSource = {require('../../assets/lakeview.jpg')}
      />
      <ImageDetails
      imageTitle = 'lonelytree'
      imageSource = {require('../../assets/lonelytree.jpg')}
      />
      <ImageDetails
      imageTitle = 'mountainvalley'
      imageSource = {require('../../assets/mountainvalley.jpg')}
      />
      <ImageDetails
      imageTitle = 'swimmingpond'
      imageSource = {require('../../assets/swimmingpond.jpg')}
      />
      <ImageDetails
      imageTitle = 'mapleleafart'
      imageSource = {require('../../assets/mapleleafart.jpg')}
      /> */}

    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})

//learn Parent-Child relationship
//todo same group of elements, repeated three times
//todo we could repeat the same JSX three times over, or we could create a separate component

//learn building reusable components exercise
/*
1. add a new prop to be passed from ImageScreen to ImageDetails
2. this props should indicate a 'score' for the image. Make sure you give the prop an appropriate name!
3. show the image score under the image in a new Text element
*/
