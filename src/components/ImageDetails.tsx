//todo create a new folder call components to keep all child components inside
//todo Child Components to be mapped to ==> Parent 'HomeScreen.tsx'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageDetails = (props: any) => {
  //console.log(props)

  return (
    <View>
      <Text>{props.ImageTitle}</Text>
    </View>
  )
}

export default ImageDetails

const styles = StyleSheet.create({})

//todo next is to pass some props from parent down to the child to customize how this child component display itself to show to the user
