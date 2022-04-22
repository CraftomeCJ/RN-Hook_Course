
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import AnotherListScreen from './src/screens/AnotherListScreen';
import CounterScreen from './src/screens/CounterScreen';
import HookColorScreen from './src/screens/HookColorScreen';
import ColorScreen from './src/screens/ColorScreen';
import CarScreen from './src/screens/CarScreen';
import GridViewListScreen from './src/screens/GridViewListScreen';
import TableComponent from './src/screens/TableComponent';
import TextStyleProps from './src/screens/TextStyleProps';
import LayoutPropsScreen from './src/screens/LayoutPropsScreen';
import RandomNumberScreen from './src/screens/RandomNumberScreen';
import SquareScreen from './src/screens/SquareScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    AnotherList: AnotherListScreen,
    Counter: CounterScreen,
    HookColor: HookColorScreen,
    Color: ColorScreen,
    HookCar: CarScreen,
    GridView: GridViewListScreen,
    Table: TableComponent,
    TextStyle: TextStyleProps,
    LayoutProps: LayoutPropsScreen,
    RandomNumber: RandomNumberScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
