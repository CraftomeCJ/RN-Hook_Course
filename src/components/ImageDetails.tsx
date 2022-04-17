//todo create a new folder call components to keep all child components inside
//todo Child Components to be mapped to ==> Parent 'HomeScreen.tsx'
//todo  inside import statement and import a primitive component 'image'
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetails = (props: any) => {
  //console.log(props)

  return (
    <View>
      <Image      ////<== self close tag for display image
      source={require('../../assets/maple-tree.jpg')}
      style={styles.styleImage} />
      <Text>{props.ImageTitle}</Text>
    </View>
  )
}

export default ImageDetails

const styles = StyleSheet.create({
  styleImage: {
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingLeft: 10,
    width: 350,
    height: 200,
    margin: 10,
    borderRadius: 10,
  }
})

//todo next is to pass some props from parent down to the child to customize how this child component display itself to show to the user
//todo display image here as well
