
//import here to show on the screen
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
//=> need list out 'relative path' to import the component
import ComponentsScreen from "./src/screens/ComponentsScreen"; //<== import custom components
import ButtonExample from "./src/screens/ButtonExample";
import JSXExercise from "./src/screens/JSXExercise";
import ViewBoxesWithColorAndText from "./src/screens/ViewBoxesWithColorAndText.tsx";
import ListScreen from "./src/screens/ListScreen";
import FlatListExercise from "./src/screens/FlatListExercise"


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen, //<== add custom component to navigator
    Button: ButtonExample,
    JSXExercise: JSXExercise,
    ViewBox: ViewBoxesWithColorAndText,
    List: ListScreen, //<== wire-up here
    FriendList: FlatListExercise
  },
  {
    initialRouteName: 'FriendList', //<== change to the component you want to display
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

// LEARN 2. Showing a Custom Component
//Understand how a component appear on a screen

//note If you don't understand how Navigator works now, it's okay. Later will have one chapter for navigation.

//here just need to know we need to add it to some parent component to make the component component appear on the screen.
