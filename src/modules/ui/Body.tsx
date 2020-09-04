import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../themes/solarized-dark/Module';

const BodyComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Module <Text style={styles.accent}>Body</Text> 
    </Text>
  </View>
);

export default {
    name: 'Body',
    Component: BodyComponent,
};