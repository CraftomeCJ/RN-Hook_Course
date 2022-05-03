import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';

const RandomNumberScreen: React.FC = () => {
	const [number, setNumber] = useState<{ number: number }[]>([
		{ number: 1705 },
	]);
	//console.log(number);

	//call the 'randomRgb' function here
	return (
		<View>
			<Button
				title='Add a number'
				onPress={() => {
					setNumber([...number, randomNumber]);
				}}
			/>
			<ScrollView>
				<FlatList
					keyExtractor={(item) => item.number}
					data={number}
					renderItem={({ item }) => {
						return (
							<View style={styles.listStyle}>
								<Text>{item.number}</Text>
							</View>
						);
					}}
				/>
			</ScrollView>
		</View>
	);
};


//To generate the random number
let numbers: number[] = [];

const uniqueNumber = (maxVal: number) => {
   const number = Math.floor((Math.random() * maxVal) + 1);
   if (!numbers.includes(number)) {
      numbers.push(number);
      return number;
   } else if (numbers.length - 1 !== maxVal) {
      uniqueNumber(maxVal);
   }
}

const randomNumber = uniqueNumber(10000);
console.log(numbers) // returns all unique numbers

export default RandomNumberScreen

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 10,
  },
})
