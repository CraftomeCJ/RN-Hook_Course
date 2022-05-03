//example GridViewList Screen in RN with Local Data
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button} from 'react-native'
import React from 'react'

const GridViewListScreen = () => {
    const ingredientsList = [
      { id: 1, name: 'Sugar'},
      { id: 2, name: 'Baking Powder'},
      { id: 3, name: 'Salt'},
      { id: 4, name: 'Milk'},
      { id: 5, name: 'Flour'},
      { id: 6, name: 'Eggs'},
      { id: 7, name: 'Butter'},
      { id: 8, name: 'Vanilla'}
    ]

    const GridView = ({name}: {id: number, name: string}): any => (
      <View style={styles.gridStyle}>
        <Text style={styles.gridText}>{name}</Text>
      </View>
    )

    return (
      <SafeAreaView style={styles.container}>

      <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      //showsVerticalScrollIndicator={false}
      data={ingredientsList}
      renderItem={({item}:{item:any}) =>
          <GridView name={item.name} id={0} />}
      keyExtractor={(item: { id: any }) => item.id}
      numColumns={2}
      />
      </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      padding: 10
    },
    gridStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#BAEFBE',
      height: 100,
      marginVertical: 5,
      margin: 3
    },
    gridText: {
      fontSize: 25,
      color: '#bbaaee',
    }
  })

export default GridViewListScreen
