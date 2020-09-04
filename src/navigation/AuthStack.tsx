import * as React from 'react';
import { LoginScreen } from '../modules/login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}