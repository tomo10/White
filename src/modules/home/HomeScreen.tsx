import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
import { AuthContext } from '../../providers/AuthProvider';
import modules from '..';

const styles = require('./../../themes')('App');

export default ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => logout()}>
        <Text>LOGOUT</Text>
      </TouchableHighlight>
      <View>
        {
          modules.map(({name, Component}) => (
            <Component key={name} />
          ))
        }
      </View>
    </SafeAreaView>
  )
}