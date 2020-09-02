import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { AuthContext } from '../../providers/AuthProvider';

export default ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Screen: Home</Text>
      <TouchableHighlight onPress={() => logout()}>
        <Text>LOGOUT</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}