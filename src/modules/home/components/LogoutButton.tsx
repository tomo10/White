import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../../../providers/AuthProvider';

export default () => {
  const { logout } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => logout()}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  ) 
}