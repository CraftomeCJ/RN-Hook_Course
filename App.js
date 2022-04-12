import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ButtonExample from "./src/screens/ButtonExample";

const navigator = createStackNavigator(
  {
    //Home: HomeScreen,
    //Components: ComponentsScreen,
    Home: ButtonExample
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
