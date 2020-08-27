import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export interface PrimaryButtonProps {
  text: string;
  bkg?: string;
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  onPress?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  bkg,
  color,
  borderColor,
  disabled,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles(bkg, color, borderColor).button,
        disabled && styles(bkg, color, borderColor).disabled,
      ]}>
      <Text style={styles(bkg, color, borderColor).buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
