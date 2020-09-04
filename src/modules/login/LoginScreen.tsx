import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableHighlight, StyleSheet } from 'react-native';
import { AuthContext } from '../../providers/AuthProvider';
import { LoginForm } from './';

const styles = require('./../../themes')('App');


export default ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  )
}