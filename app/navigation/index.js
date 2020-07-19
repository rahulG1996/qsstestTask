import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './drawerNav';
import Notification from '../screens/notification';

const Stack = createStackNavigator();

function Route() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

export default Route;
