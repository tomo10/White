import React, { useContext } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { LogoutButton } from './components';
import { AppStackParamList } from '../../navigation/AppStackParamList';

const styles = require('./../../themes')('App');

export default ({ navigation }: AppStackParamList) => {

  return (
    <SafeAreaView style={styles.container}>
      <LogoutButton />
      <Text>Landing Page</Text>
    </SafeAreaView>
  )
}