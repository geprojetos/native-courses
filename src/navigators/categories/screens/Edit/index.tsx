import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {t} from '../../../../i18n';
import styles from './styles';

export interface EditProps {
  name?: string;
}

const Edit: FC<EditProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{t('categories:categories')}</Text>
    </View>
  );
};

export default Edit;
