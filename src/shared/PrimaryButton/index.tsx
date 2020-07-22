import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export interface PrimaryButtonProps {
  text: string;
  onPress?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.9}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
