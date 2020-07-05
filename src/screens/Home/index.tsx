import React, { FC } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './index'

export interface HomeProps { }

const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;