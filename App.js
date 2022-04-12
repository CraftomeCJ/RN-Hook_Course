import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import componentScreen from "./src/screens/componentScreen";

const navigator = createStackNavigator(
  {
    Home: componentScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
