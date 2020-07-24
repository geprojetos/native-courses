import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../utils/styles';

export interface IconBackProps {}

const IconBack: FC<IconBackProps> = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleBack}>
      <Icon name="chevron-left" size={18} color={colors.BLUE_PRIMARY} />
    </TouchableOpacity>
  );
};

export default IconBack;
