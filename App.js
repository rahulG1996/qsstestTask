import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Route from './app/navigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}

export default App;
