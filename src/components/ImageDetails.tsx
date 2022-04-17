//todo create a new folder call components to keep all child components inside
//todo Child Components to be mapped to ==> Parent 'HomeScreen.tsx'
//todo  inside import statement and import a primitive component 'image'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const ImageDetails = ({imageSource, imageTitle, score}: {imageSource: any, imageTitle: string, score: number}): any => {
  //console.log(props)

  /*learn this is the most commonly a reusable component with props */
  return (
    <View>
      <Image
      source={imageSource}
      style={styles.styleImage}
      />
      <Text>{imageTitle}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
}

export default ImageDetails

const styles = StyleSheet.create({
  styleImage: {
    //justifyContent: 'center',
    //alignItems: 'center',
    //paddingLeft: 10,
    width: 300,
    height: 150,
    margin: 10,
    borderRadius: 10,
  }
})

//todo next is to pass some props from parent down to the child to customize how this child component display itself to show to the user
//todo display image here as well

//note
/* below is  a hardcoded way */
    /* <Image      ////<== self close tag for display image
      source={require('../../assets/maple-tree.jpg')}
      style={styles.styleImage} /> */
/* <Image
      source={
        require('../../assets/'+
        props.ImageTitle + '.jpg')}
      style={styles.styleImage} /> */
