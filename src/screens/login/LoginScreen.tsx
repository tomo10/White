import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { AuthContext } from '../../providers/AuthProvider';

export default ({ navigation }) => {
const { login } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Screen: Login</Text>
      <TouchableHighlight onPress={() => login()}>
        <Text>LOGIN</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}