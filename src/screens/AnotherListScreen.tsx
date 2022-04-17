//create another practice component
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const AnotherListScreen = () => {
//creating a Constant array named as PetNames
const PetDescriptions = [
  { id: 1, name: 'Rex', age: 2, color: 'brown' },
  { id: 2, name: 'Spot', age: 1, color: 'white' },
  { id: 3, name: 'Scooby', age: 3, color: 'black' },
  { id: 4, name: 'Lucky', age: 4, color: 'yellow' },
  { id: 5, name: 'Duke', age: 5, color: 'blue' },
  { id: 6, name: 'Sammy', age: 6, color: 'green' },
  { id: 7, name: 'Buddy', age: 7, color: 'orange' },
  { id: 8, name: 'Chloe', age: 8, color: 'red' },
  { id: 9, name: 'Buster', age: 9, color: 'purple' },
  { id: 10, name: 'Cody', age: 10, color: 'pink' },
  { id: 11, name: 'Murphy', age: 11, color: 'brown' },
  { id: 12, name: 'Rocky', age: 12, color: 'white' },
  { id: 13, name: 'Peanut', age: 13, color: 'black' },
  { id: 14, name: 'Patch', age: 14, color: 'yellow' },
  { id: 15, name: 'Tank', age: 15, color: 'blue' },
];

//creating a component named as ItemRender with prop name. we would use this component to render List items on screen
const ItemRender = ({ name }: {name: string}) => (
  <View
      style={styleSheet.item}>
      <Text style={styleSheet.itemText}>
        {name}
      </Text>
    </View>
)


// create another component named as ItemDivider to print a horizontal divider line between list items
const ItemDivider = () => {
  return (
    <View
    style={{
      height: 1,
      backgroundColor: '#607d8b',
      width: '100%'
    }}
    />
  )
}

//create return block, Now here we would make our main FlatList component with ketExtractor prop.
return (
  <SafeAreaView style={styleSheet.mainContainer}>

     <FlatList
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}
         keyExtractor={(name: { id: any; }):any => name.id}
         data={PetDescriptions}
         renderItem={({item}: {item: any}) => {
           return (
           <Text style={styleSheet.itemText}>
             ID:{item.id} Pet Name:{item.name} Pet Age:{item.age} Animal Color:{item.color}
           </Text>
           )
         }}
          />
  </SafeAreaView>
)
}

export default AnotherListScreen

//create style
const styleSheet = StyleSheet.create({

  mainContainer: {
    marginVertical: 10,
    width: '100%',
    flex: 1,
  },

  item: {
    marginVertical: 10,
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12
  },

  itemText: {
    flexWrap: 'wrap',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'lightyellow',
    color: '#607d8b'
  }

})
