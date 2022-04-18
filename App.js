import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import AnotherListScreen from "./src/screens/AnotherListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";
import CarScreen from "./src/screens/CarScreen";
import GridViewListScreen from "./src/screens/GridViewListScreen";
import TableComponent from "./src/screens/TableComponent";
import TextStyleProps from "./src/screens/TextStyleProps";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    AnotherList: AnotherListScreen,
    Counter: CounterScreen,
    CounterScreen: Counter,
    HookColor: ColorScreen,
    HookCar: CarScreen,
    GridView: GridViewListScreen,
    Table: TableComponent,
    TextStyle: TextStyleProps

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
