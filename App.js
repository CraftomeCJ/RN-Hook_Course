import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import AnotherListScreen from "./src/screens/AnotherListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import CarScreen from "./src/screens/CarScreen";
//import GridViewListScreen from "./src/screens/GridViewListScreen";
//import TableComponent from "./src/screens/TableComponent";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    AnotherList: AnotherListScreen,
    Counter: CounterScreen,
    HookColor: ColorScreen,
    HookCar: CarScreen,
    //Table: TableComponent,
    //GridView: GridViewListScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
