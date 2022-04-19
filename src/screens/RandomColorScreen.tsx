// //add the color label under the


// const changeSetting = (value: number, options: string | any[], setterFunction: (arg0: number) => void) => {
//   if (value === options.length - 1) {
//     setterFunction(0);
//     return;
//   }
//   setterFunction(value + 1);
// }


// 	//call the 'randomRgb' function here
// 	return (

//     <View style={{paddingTop: StatusBar.currentHeight}}/>
//     <View style={{styles.container, styles.screenSpace, hookedStyles}}>
//       {squares.map(elem => elem)}
//     </View>



// 		// <View>
// 		// 	<Button
// 		// 		title='Add a Color'
// 		// 		onPress={() => {
// 		// 			setColor([...color, randomRgb()]);
// 		// 		}}
// 		// 	/>
// 			{/* <ScrollView>
// 				<FlatList
// 					keyExtractor={(item) => item.name}
// 					data={color}
// 					renderItem={({ item }) => {
// 						return (
// 							<View style={styles.listStyle}>
// 								<View
// 									style={{
// 										height: 100,
// 										width: 100,
// 										backgroundColor: item.color,
// 									}}
// 								/>
// 								<Text>{item.name}</Text>
// 							</View>
// 						);
// 					}}
// 				/>
// 			</ScrollView> */}
// 		</View>
// 	);
// };

// const Square = () => (
//   <View
//     style={{
//       height: 100,
//       width: 100,
//       backgroundColor: randomRgb(),
//     }}
//   />
// );

// //To generate the random color
// const randomRgb = () => {
// 	const red = Math.floor(Math.random() * 256);
// 	const green = Math.floor(Math.random() * 256);
// 	const blue = Math.floor(Math.random() * 256);

//   return (`rgb(${red}, ${green}, ${blue})`);
// };


//example of a Generating Random Color with Layout Props
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	ScrollView,
  StatusBar
} from 'react-native';
import React, { useState } from 'react';

const RandomColorScreen = () => {

  const flexDirections = [
    'row',
    'row-reverse',
    'column',
    'column-reverse'];

  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const wraps = [
    'nowrap',
    'wrap',
    'wrap-reverse'
  ];
  const directions = [
    'inherit',
    'ltr',
    'rtl'
  ];

  //state management
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);
  // const [color, setColor] = useState<{ name: string; color: string }[]>([
// 		{ name: 'black', color: 'black' },
// 	]);
// 	//console.log(color);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
  };

  const changeSetting = (value: number, options: string | any[], setterFunction: { (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (value: React.SetStateAction<number>): void; (arg0: number): void; }) => {
    if (value == options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };
  const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);
  return (
    <>
      <View style={{ paddingTop: StatusBar.currentHeight }} />
      <View style={[styles.container, styles.playingSpace, hookedStyles]}>
        {squares.map(elem => elem)}
      </View>
      <ScrollView style={[styles.container]}>
        <View style={[styles.controlSpace]}>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Direction"
              onPress={() =>
                changeSetting(flexDirection, flexDirections, setFlexDirection)
              }
            />
            <Text style={styles.text}>{flexDirections[flexDirection]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Justify Content"
              onPress={() =>
                changeSetting(
                  justifyContent,
                  justifyContents,
                  setJustifyContent
                )
              }
            />
            <Text style={styles.text}>{justifyContents[justifyContent]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Align Items"
              onPress={() =>
                changeSetting(alignItems, alignItemsArr, setAlignItems)
              }
            />
            <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Direction"
              onPress={() => changeSetting(direction, directions, setDirection)}
            />
            <Text style={styles.text}>{directions[direction]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Change Flex Wrap"
              onPress={() => changeSetting(wrap, wraps, setWrap)}
            />
            <Text style={styles.text}>{wraps[wrap]}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Add Square"
              onPress={() => setSquares([...squares, <Square/>])}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Delete Square"
              onPress={() =>
                setSquares(squares.filter((v, i) => i != squares.length - 1))
              }
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'lightyellow',
    borderColor: 'purple',
    borderWidth: 5,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
  text: {
    textAlign: 'center'
  },
	listStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 5,
    paddingLeft: 20,
	}
});

const Square = () => (
  <View style={{
    width: 50,
    height: 50,
    backgroundColor: randomHexColor(),
  }} />
);

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default RandomColorScreen;
