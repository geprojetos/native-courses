import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export interface PrimaryButtonProps {
  text: string;
  bkg?: string;
  color?: string;
  borderColor?: string;
  onPress?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  bkg,
  color,
  borderColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles(bkg, color, borderColor).button}>
      <Text style={styles(bkg, color, borderColor).buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
