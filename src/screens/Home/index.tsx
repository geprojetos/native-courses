import React, {FC} from 'react';
import {View, Text} from 'react-native';

import styles from './index';
import {t} from '../../i18n';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{t('common:welcome')}</Text>
    </View>
  );
};

export default Home;
