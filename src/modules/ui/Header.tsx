import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../themes/solarized-dark/Module';

const HeaderComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Module <Text style={styles.accent}>Header</Text> 
    </Text>
  </View>
);

export default {
    name: 'Header',
    Component: HeaderComponent,
};