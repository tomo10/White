import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackParamList } from './AppStackParamList';
import modules from './../modules';

const Stack = createStackNavigator<AppStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      {
        modules.map(({ navigation }) => (
          <Stack.Screen 
            name={navigation.name} 
            component={navigation.component} 
          />
        ))
      }
    </Stack.Navigator>
  )
}