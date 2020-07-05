import React, { FC } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './index'

export interface AboutProps { }

const About: FC<AboutProps> = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

export default About;