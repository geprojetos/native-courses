import React, {FC} from 'react';
import {View, Text} from 'react-native';
import Formik from 'formik';

import {t} from '../../../../i18n';
import styles from './styles';

export interface AddProps {
  name?: string;
}

const Add: FC<AddProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{t('categories:categories')}</Text>
    </View>
  );
};

export default Add;
