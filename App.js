import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
//import Counter from "./src/screens/Counter";
//import TableComponent from "./src/screens/TableComponent";
import AnotherListScreen from "./src/screens/AnotherListScreen";
//import GridViewListScreen from "./src/screens/GridViewListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    //Counter: Counter,
    //Table: TableComponent,
    AnotherList: AnotherListScreen,
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
