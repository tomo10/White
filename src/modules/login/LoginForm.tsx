import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
import { AuthContext } from '../../providers/AuthProvider';

const styles = require('./../../themes')('App')

const combineSubmit = (submit: () => void, login: () => void) => {
  try { submit() } 
  catch (e) { console.log(e) } 
  finally { login() }
}

export default () => {
  const { login } = React.useContext(AuthContext);  

    return (
        <View>
          <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text style={styles.title}>Email address</Text>
                <TextInput 
                  onChangeText={handleChange('email')}
                  keyboardType={'email-address'}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  />
                <Text style={styles.title}>Password</Text>
                <TextInput 
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  value={values.password}
                />
                <TouchableHighlight onPress={() => combineSubmit(handleSubmit, login)}>
                  <Text style={styles.title}>LOGIN</Text>
                </TouchableHighlight>
              </View>
            )}
          </Formik>
        </View>
    )
}



