import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';

import {t} from '../../../../i18n';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export interface ListProps {}

const List: FC<ListProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>{t('categories:categories')}</Text>
    </View>
  );
};

export default List;
