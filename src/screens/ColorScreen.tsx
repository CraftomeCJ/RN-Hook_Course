import { StyleSheet, View, Button, FlatList, Text } from 'react-native';
import React, { useState } from 'react';

/*
Three questions:
  1, What piece of data inside this application is changing?
  colors
  2. What type of data is it? Is it a number, a string, an object, or an array?
  array of strings`
  3. What is the starting value of that piece of data?
  []

==> Try to change the initial colors to see the effect.
==> Try to add the color label under the color square.
*/

const ColorScreen: React.FC = () => {
	// declare a useState variable
	const [colors, setColors] = useState<{ name: string; color: string }[]>([
		{ name: 'red', color: 'red' },
	]);

	//use a console log to check if it works
	//console.log(colors);

	return (
		<View>
			<Button
				title='Add a Color'
				onPress={() => {
					//add a new color to the colors array
					//setColors(colors.concat(randomRgb()));
					//Type 'string' is not assignable to type 'never'.ts(2322) => error because useState not assign any value to array
					setColors([...colors, randomRgb()]);
				}}
			/>

			{/* can remove hardcode style*/}
			{/* now can called the randomRgb function here */}
			{/*<View style={{height: 100, width: 400, backgroundColor: randomRgb()}}
      /> */}

			<FlatList
				keyExtractor={(item) => item.name}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View style={styles.listStyle}>
							<View
								style={{
									height: 100,
									width: 100,
									backgroundColor: item.color,
								}}
							/>
							<Text>{item.name}</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};

//create a random color with RGB() function
const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	//return a template literal
	//return name & color objects
	return {
		name: `red: ${red}, green: ${green}, blue: ${blue}`,
		color: `rgb(${red}, ${green}, ${blue})`,
	};
};

export default ColorScreen;

const styles = StyleSheet.create({
	listStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: 10,
	},
});
