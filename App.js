import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Components from './src/screens/Components';
import List from './src/screens/List';
import Image from './src/screens/Image';
import Counter from './src/screens/Counter';
import RandomColor from './src/screens/RandomColor';
import RgbColor from './src/screens/RgbColor';
import Text from './src/screens/Text';

import Box from './src/screens/Box';

const navigator = createStackNavigator(
  {
    Home,
    Components,
    List,
    Image,
    Counter,
    RandomColor,
    RgbColor,
    Text,
    Box,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native App',
    },
  },
);

export default createAppContainer(navigator);
