import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/homeScreen';
import DrawerComponent from '../../components/DrawerComponent'

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="slide"
      drawerContent={(props) => <DrawerComponent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
