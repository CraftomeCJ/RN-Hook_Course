
//import here to show on the screen

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
//=> need list out 'relative path' to import the component
import ComponentsScreen from "./src/screens/ComponentsScreen";
//import ButtonExample from "./src/screens/ButtonExample";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen
  //Button: ButtonExample
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

// LEARN 2. Showing a Custom Component
