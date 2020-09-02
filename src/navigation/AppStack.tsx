import * as React from 'react';
import { HomeScreen } from './../screens/home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}